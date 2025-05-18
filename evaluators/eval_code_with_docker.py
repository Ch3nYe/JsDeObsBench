from glob import glob
import subprocess
import jsonlines
import logging
import uuid
import json
import os

def check_container_stat(container_name):
    command = f"docker stats --no-stream --format json {container_name}"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        logging.error("[!] Error: check container stat failed")
        return None
    stat = json.loads(result.stdout)
    logging.debug(stat)
    return stat

def restart_container(container_name) -> bool:
    command = f"docker stop {container_name} && docker start {container_name}"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode == 0 and result.stderr == "":
        return True
    raise KeyError(f"[!] Fatal Error: restart failed for container {container_name}")

def create_docker_container(container_name = "eval_js_container", 
                            docker_image = "node:18.19.0"):
    # check docker is installed
    check_process = subprocess.run(["docker", "--version"], capture_output=True, text=True)
    if check_process.returncode != 0:
        raise Exception("[!] Docker is not installed")
    # check container exists
    check_process = subprocess.run(["docker", "ps", "-a", "--filter", f"name={container_name}", "--format", "{{.Names}}"], capture_output=True, text=True)
    if check_process.returncode == 0 and container_name in check_process.stdout.split('\n'):
        # Container already exists, restart it
        logging.info(f"[+] Container '{container_name}' already exists, restarting it")
        restart_container(container_name)
        return container_name
    # Create a Docker container and keep it running
    logging.info(f"[+] Creating a container '{container_name}' from image '{docker_image}'")
    subprocess.run(["docker", "run", "--name", container_name, "-dit", docker_image, "/bin/bash"], check=True)
    return container_name

def stop_docker_container(container_name) -> bool:
    result = subprocess.run(f"docker stop {container_name}", shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        logging.error(f"[!] Error: Failed to stop the container '{container_name}'")
        return False
    return True

def compile_and_run_JS_code_in_docker(container_name: str, code: str, program_inputs: list, expected_outputs: list, timeout: int = 5):
    try:
        # Unique ID for the file name to avoid conflicts
        file_name = f"temp_{uuid.uuid4()}.js"
        with open(file_name, "w") as file:
            file.write(code)

        # Copy the Python file to the container
        subprocess.run(["docker", "cp", file_name, f"{container_name}:/program.js"], capture_output=True, check=True)
    except subprocess.CalledProcessError as e:
        logging.error(f"[!] Error during Docker operations:\n{e}")
        return 0
    finally:
        # Cleanup: remove the temporary file
        if os.path.exists(file_name):
            os.remove(file_name)

    # Run the compiled program
    results = []
    for program_input, expected_output in zip(program_inputs, expected_outputs):
        try:
            run_process = subprocess.run(
                ["docker", "exec", "-i", container_name, "node", "/program.js"],
                input=program_input,
                capture_output=True,
                text=True,
                timeout=timeout
            )

            # Check the output
            if run_process.returncode != 0:
                logging.debug(f"[!] Runtime Error: {run_process.stderr}")

            output = run_process.stdout
            if output.strip() == expected_output.strip():
                logging.debug("[+] Success: Output matches expected output") 
                results.append(1)
            else:
                logging.debug(f"[-] Failure: Output does not match. Expected '{expected_output}', got '{output}'") 
                results.append(0)
                break
        except subprocess.TimeoutExpired:
            logging.debug("[-] Error: Program timeout")
            results.append(0)
            break
    # Cleanup: remove the temporary file
    if os.path.exists(file_name):
        os.remove(file_name)
    return 0 if 0 in results else 1

def run_malware_JS_code_in_docker(container_name: str, code: str, timeout: int = 15):
    ioc = None
    try:
        # Unique ID for the file name to avoid conflicts
        file_name = f"temp_{uuid.uuid4()}.js"
        with open(file_name, "w") as file:
            file.write(code)
        # Clean cache
        subprocess.run(f"docker exec {container_name} bash -c 'rm -rf /tmp/program.js*'", shell=True, capture_output=True, check=True)
        # Copy the Python file to the container
        subprocess.run(["docker", "cp", file_name, f"{container_name}:/tmp/program.js"], capture_output=True, check=True)
    except subprocess.CalledProcessError as e:
        logging.error(f"[!] Error during Docker operations:\n{e}")
        return ioc
    finally:
        # Cleanup: remove the temporary file
        if os.path.exists(file_name):
            os.remove(file_name)

    try:
        ioc_file = f"ioc_{uuid.uuid4()}.json"
        command = f"bash -c 'timeout {timeout} box-js /tmp/program.js --output-dir /tmp/ ; chmod 777 -R /tmp/program.js.results'"
        docker_command = f"docker exec {container_name} {command}"
        subprocess.run(docker_command, shell=True, capture_output=True, text=True)

        # Check the output
        ret = subprocess.run(["docker", "cp", f"{container_name}:/tmp/program.js.results/IOC.json", ioc_file], capture_output=True, check=True)
        if ret.returncode != 0:
            return None
        if not os.path.exists(ioc_file):
            return None
        with open(ioc_file, "r") as file:
            ioc = json.load(file)
    except Exception as e:
        logging.error(f"[-] Error occurred: {str(e)}")
    finally:
        # Cleanup: remove the temporary file
        if os.path.exists(ioc_file):
            os.remove(ioc_file)

    return ioc

if __name__ == "__main__":
    # Create the Docker container
    container_name = create_docker_container(container_name = "eval_js_container", docker_image = "node:18.19.0")
    # get program inputs and expected outputs
    test_cases = {}
    with jsonlines.open('../build_dataset/codenet_dataset/Project_CodeNet_selected.jsonl','r') as reader:
        for obj in reader:
            filename = obj['filename']
            test_cases[filename] = obj['test_case']
    # eval each JS code
    JS_code_path = "../build_dataset/codenet_dataset/"
    files = glob(os.path.join(JS_code_path, "*.js"))
    for fp in files:
        with open(fp, "r") as f:
            code = f.read()
        k = os.path.basename(fp).split("_")[-1].removesuffix(".js")
        test_case = test_cases[k]
        program_inputs = [i[0] for i in test_case]
        expected_outputs = [i[1] for i in test_case]
        res = compile_and_run_JS_code_in_docker(container_name, code, program_inputs, expected_outputs)
        print(fp,res)