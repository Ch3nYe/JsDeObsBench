import os
import shutil
import logging
import jsonlines
import subprocess
from tqdm import tqdm
from build_dataset.data import save_solution, get_codenet_problem_ids

codenet_jsonl_path = "../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl"
save_solution_to = "../results/codenet_javascript-obfuscator_name-obfuscation/synchrony_prediction.jsonl"
codenet_problem_ids = get_codenet_problem_ids(codenet_jsonl_path)
codenet_dataset_path = os.path.dirname(codenet_jsonl_path)

def collect_solution():
    # collect solution 
    logging.info('[+] Collect deobfuscation solution')
    with jsonlines.open(codenet_jsonl_path, 'r') as reader:
        json_data = list(reader)
        json_data = {i['filename']:i for i in json_data}
    dataset = []
    tid = 0
    for p in tqdm(codenet_problem_ids, desc="collect solution"):
        ori_path = os.path.join(codenet_dataset_path, f"codenet_{p}.js")
        obf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.obf.js")
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        with open(ori_path, "r") as ori, open(obf_path, "r") as obf, open(deobf_path, "r") as deobf:
            original_code = ori.read()
            obfuscated_code = obf.read()
            deobfuscated_code = deobf.read()
        data = {
            "task_id": tid,
            "task_type": "deobfuscation",
            "original": original_code,
            "obfuscated": obfuscated_code,
            "deobfuscated": deobfuscated_code,
            "language":"JavaScript", 
            "test_cases": json_data[p]['test_case']
            }
        tid += 1
        dataset.append(data)
    # save into prediction file
    logging.info(f'[+] Save deobfuscation solution into: {save_solution_to}')
    save_solution(dataset, save_solution_to)

def clean_deobfuscated_files():
    for p in tqdm(codenet_problem_ids, desc="clean"):
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        if os.path.exists(deobf_path):
            os.remove(deobf_path)

def deobfuscate_with_webcrack():
    clean_deobfuscated_files()
    deobfuscator_cmd = "webcrack {input} -o {output} -f" # -f overwrite
    tmp_path = "temp"
    for p in tqdm(codenet_problem_ids, desc="webcrack"):
        obf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.obf.js")
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=tmp_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")
        shutil.move(os.path.join(tmp_path,"deobfuscated.js"), deobf_path)
    os.removedirs(tmp_path)


def deobfuscate_with_obfuscator_io_deobfuscator():
    clean_deobfuscated_files()
    deobfuscator_cmd = "obfuscator-io-deobfuscator --source {input} --output {output}"
    for p in tqdm(codenet_problem_ids, desc="obfuscator-io-deobfuscator"):
        obf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.obf.js")
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")

def deobfuscate_with_javascript_deobfuscator():
    clean_deobfuscated_files()
    deobfuscator_cmd = "js-deobfuscator -i {input} -o {output}"
    for p in tqdm(codenet_problem_ids, desc="js-deobfuscator"):
        obf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.obf.js")
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")

def deobfuscate_with_synchrony():
    clean_deobfuscated_files()
    deobfuscator_cmd = "synchrony {input} -o {output}"
    for p in tqdm(codenet_problem_ids, desc="synchrony"):
        obf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.obf.js")
        deobf_path = os.path.join(codenet_dataset_path, f"codenet_{p}.deobf.js")
        cmd = deobfuscator_cmd.format(input=obf_path, output=deobf_path)
        run_process = subprocess.run(cmd, shell=True, capture_output=True)
        if run_process.returncode != 0:
            logging.error(run_process.stderr.decode())
            raise Exception(f"[!] Failed to deobfuscate {obf_path}")



if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)

    # step1 do deobfuscation
    # deobfuscate_with_webcrack() # test ok
    # deobfuscate_with_obfuscator_io_deobfuscator() # test ok
    # deobfuscate_with_javascript_deobfuscator() # test ok
    deobfuscate_with_synchrony()

    # step2 do collection
    collect_solution()