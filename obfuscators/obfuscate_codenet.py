import os
import jsonlines
import subprocess
from tqdm import tqdm
from collections import defaultdict
from evaluators.evaluators import SyntaxEvaluator
from evaluators.eval_code_with_docker import compile_and_run_JS_code_in_docker, create_docker_container

container_name = "eval_js_container"
config = "high-obf-low-perf"
obfuscate_cmd = f"javascript-obfuscator --config ./javascript-obfuscator-configs/{config}.json"
obfuscated_save_path = f"../build_dataset/codenet_dataset_{config}/"
codenet_dataset_jsonl = os.path.join(obfuscated_save_path, "Project_CodeNet_selected.jsonl")
problem_cnt = 1613 # how many problem we collect maximum
code_per_problem = 1 # how many code for each problem we collect
max_code_len = 1000

if not os.path.exists(obfuscated_save_path):
    os.makedirs(obfuscated_save_path)

# open jsonl file containing all JS code, which has been checked with testcase
with jsonlines.open('../build_dataset/raw_dataset/Project_CodeNet/data1_js_ok.jsonl', 'r') as reader:
    dataset = list(reader)
    cnt_p_len = defaultdict(int)
    dict_dataset = defaultdict(list)
    for i in dataset:
        cnt_p_len[i['filename']] += 1
        dict_dataset[i['filename']].append(i)
    sorted_cnt_p_len = sorted(cnt_p_len.items(), key=lambda x: x[1], reverse=True)

selected_problems = [i[0] for i in sorted_cnt_p_len]

# select multi JS code for each problem
print("select JS code, with ori/obf-code syntax checking and obf-code execution checking")
create_docker_container(container_name = container_name, docker_image = "node:18.19.0")
syntax_evaluator = SyntaxEvaluator()
selected_data = defaultdict(list)
for p in tqdm(selected_problems,desc='problems'):
    if len(selected_data) >= problem_cnt:
        print("have collected enough data")
        break
    for item in dict_dataset[p]:
        if len(selected_data[p]) >= code_per_problem:
            break
        if len(item['code']) >= max_code_len:
            continue
        if not syntax_evaluator.is_valid_js(item['code']):
            continue
        k = f"{p}_{len(selected_data[p])+1}"
        item['filename'] = k
        ori_path = os.path.join(obfuscated_save_path, f'codenet_{k}.js')
        obf_path = os.path.join(obfuscated_save_path, f'codenet_{k}.obf.js')
        with open(ori_path, 'w') as f:
            f.write(item['code'])
        run_process = subprocess.run(f"{obfuscate_cmd} {ori_path} --output {obf_path}", shell=True)
        if run_process.returncode != 0:
            continue
        with open(obf_path, 'r') as f:
            item['obfuscated'] = f.read()
        if not syntax_evaluator.is_valid_js(item['obfuscated']):
            continue
        res = compile_and_run_JS_code_in_docker(container_name=container_name,
                                            code=item['obfuscated'],
                                            program_inputs=[i[0] for i in item['test_case']],
                                            expected_outputs=[i[1] for i in item['test_case']])
        if res != 1: # execution failed
            continue
        # fix key name
        ori_code = item.pop('code')
        item['original'] = ori_code
        test_cases = item.pop('test_case')
        item['test_cases'] = test_cases
        item['language'] = "JavaScript"
        selected_data[p].append(item)
    if len(selected_data[p]) < code_per_problem:
        print(f"problem {p} has only {len(selected_data[p])} code")
        selected_data.pop(p)

# write to js files
final_dataset = []
for k, v in selected_data.items():
    for i in v:
        final_dataset.append(i)
print(f"save {len(final_dataset)} item into file {codenet_dataset_jsonl}")
with jsonlines.open(codenet_dataset_jsonl, 'w') as writer:
    for i in final_dataset:
        writer.write(i)