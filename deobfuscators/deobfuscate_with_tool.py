import os
import shutil
import logging
import jsonlines
import subprocess
from tqdm import tqdm
from build_dataset.data import read_dataset

assert shutil.which("js-deobfuscator"), "[!] Please install js-deobfuscator first"
assert shutil.which("synchrony"), "[!] Please install synchrony first"

def deobfuscate_with_javascript_deobfuscator(dataset_jsonl_path):
    dataset = read_dataset(dataset_jsonl_path)
    deobfuscator_cmd = "js-deobfuscator -i {input} -o {output}"
    fail_cnt = 0
    looper = tqdm(dataset, desc="js-deobfuscator")
    for data in looper:
        filename = data['filename']
        obf_code = data['obfuscated']
        obf_path = os.path.join(deobf_temp_path, f"{filename}.obf.js")
        with open(obf_path, "w") as f:
            f.write(obf_code)
        deobf_path = os.path.join(deobf_temp_path, f"{filename}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")
        if os.path.exists(deobf_path):
            with open(deobf_path, "r") as f:
                deobf_code = f.read()
        else:
            deobf_code = ""
            fail_cnt += 1
        data['deobfuscated'] = deobf_code
        looper.set_postfix(fail_cnt=fail_cnt)
    return dataset

def deobfuscate_with_webcrack(dataset_jsonl_path):
    dataset = read_dataset(dataset_jsonl_path)
    deobfuscator_cmd = "webcrack --no-unpack --no-jsx {input} > {output}"
    fail_cnt = 0
    looper = tqdm(dataset, desc="webcrack")
    for data in looper:
        filename = data['filename']
        obf_code = data['obfuscated']
        obf_path = os.path.join(deobf_temp_path, f"{filename}.obf.js")
        with open(obf_path, "w") as f:
            f.write(obf_code)
        deobf_path = os.path.join(deobf_temp_path, f"{filename}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")
        if os.path.exists(deobf_path):
            with open(deobf_path, "r") as f:
                deobf_code = f.read()
        else:
            deobf_code = ""
            fail_cnt += 1
        data['deobfuscated'] = deobf_code
        looper.set_postfix(fail_cnt=fail_cnt)
    return dataset

def deobfuscate_with_synchrony(dataset_jsonl_path):
    dataset = read_dataset(dataset_jsonl_path)
    deobfuscator_cmd = "synchrony {input} -o {output}"
    fail_cnt = 0
    looper = tqdm(dataset, desc="synchrony")
    for data in looper:
        filename = data['filename']
        obf_code = data['obfuscated']
        obf_path = os.path.join(deobf_temp_path, f"{filename}.obf.js")
        with open(obf_path, "w") as f:
            f.write(obf_code)
        deobf_path = os.path.join(deobf_temp_path, f"{filename}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")
        if os.path.exists(deobf_path):
            with open(deobf_path, "r") as f:
                deobf_code = f.read()
        else:
            deobf_code = ""
            fail_cnt += 1
        data['deobfuscated'] = deobf_code
        looper.set_postfix(fail_cnt=fail_cnt)
    return dataset

if __name__ == "__main__":
    # get args
    import argparse
    parser = argparse.ArgumentParser(description='Deobfuscate codenet dataset')
    parser.add_argument('--transformation', type=str, help='combination name')
    parser.add_argument('--deobfuscator', default='js-deobfuscator', type=str, help='combination name')
    args = parser.parse_args()
    transformation = args.transformation
    deobfuscator = args.deobfuscator

    deobf_temp_path = f"./deobf-temp-{transformation.replace('/','-')}-{deobfuscator}"
    if os.path.exists(deobf_temp_path):
        shutil.rmtree(deobf_temp_path) # clean cache
    os.makedirs(deobf_temp_path)

    logging.basicConfig(level=logging.DEBUG)


    dataset_jsonl_path = f"../build_dataset/codenet_dataset_{transformation}/Project_CodeNet_selected.jsonl"
    save_solution_to = f"../results/codenet_javascript-obfuscator_{transformation}/{deobfuscator}.jsonl"
    if os.path.exists(save_solution_to):
        print(f"[!] {save_solution_to} already exists")
        exit(0)


    # step1 do deobfuscation
    if deobfuscator == "js-deobfuscator":
        dataset = deobfuscate_with_javascript_deobfuscator(dataset_jsonl_path)
    elif deobfuscator == "synchrony":
        dataset = deobfuscate_with_synchrony(dataset_jsonl_path)
    elif deobfuscator == "webcrack":
        dataset = deobfuscate_with_webcrack(dataset_jsonl_path)
    else:
        raise NotImplementedError(f"[!] deobfuscator {deobfuscator} not implemented")

    # step2 save into prediction file
    logging.info(f'[+] Save deobfuscation solution into: {save_solution_to}')
    with jsonlines.open(save_solution_to,'w') as w:
        w.write_all(dataset)

    # clean cache
    if os.path.exists(deobf_temp_path):
        shutil.rmtree(deobf_temp_path)