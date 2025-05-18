# cmd-demo: API_KEY="EMPTY" API_URL="http://localhost:8000/v1" MODEL="Mistral-7B-Instruct-v0.3" TOKENIZER_PATH="mistralai/Mistral-7B-Instruct-v0.3" python query_vllm.py --input_path ../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl --output_path ../results/codenet_javascript-obfuscator_name-obfuscation/ --max_retry 1 --prompt oneshot --example name-obfuscation
import os
import re
import fire
import json
import time
import jsonlines
from tqdm import tqdm
from openai import OpenAI
from termcolor import colored
from transformers import AutoTokenizer
from build_dataset.data import read_dataset
from utils import generate_prompt

# get global parameters from ENV
API_KEY = os.environ.get("API_KEY", "EMPTY") # api key to access the remote model
API_URL = os.environ.get("API_URL", "http://localhost:8000/v1") # api url to access the remote model
MODEL = os.environ.get("MODEL", "Mistral-7B-Instruct-v0.3") # remote model name
MAX_INPUT_TOKENS = int(os.environ.get("MAX_INPUT_TOKENS", 1024*12)) # max input token length of the remote model, default to 1024*12
MAX_NEW_TOKENS = int(os.environ.get("MAX_NEW_TOKENS", 1024*4)) # max output token length of the remote model, default to 1024*4
TOKENIZER_PATH = os.environ.get("TOKENIZER_PATH", "mistralai/Mistral-7B-Instruct-v0.3") # huggingface repo id or local path


def call_model(prompt):
    try:
        client = OpenAI(
            api_key=API_KEY,
            base_url=API_URL,
        )
        completion = client.chat.completions.create(
            model=MODEL,
            temperature=1.0,
            stream=False,
            max_tokens=MAX_NEW_TOKENS,
            messages = [
                {"role": "user", "content": prompt}
            ]
        )
    except Exception as e:
        print(colored(e,'red'))
        return "<RequestException>"+str(e)
    return completion.choices[0].message.content

def parse_model_output(output):
    '''
    @desc: return the code wrapped by ```
        exampl 1:
        "```python\nprint('hello world')\n```"
        example 2:
        "the code:\n```JavsScript\nconsole.log('hello world')\nconsole.log('hello world')\n```\n balabala..."
    
    '''
    pattern = r'```[a-zA-Z, ]*\n(.+?)\n```'
    match = re.search(pattern, output, re.DOTALL)
    if match:
        return match.group(1)
    else:
        return ""

# cmd-demo: API_KEY="EMPTY" API_URL="http://localhost:8000/v1" MODEL="Mistral-7B-Instruct-v0.3" TOKENIZER_PATH="mistralai/Mistral-7B-Instruct-v0.3" python query_vllm.py --input_path ../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl --output_path ../results/codenet_javascript-obfuscator_name-obfuscation/ --max_retry 1 --prompt oneshot --example name-obfuscation
def main(
    input_path: str,
    output_path: str = None, # default to {input_path}.{MODEL}.{prompt}.jsonl
    prompt: str = "zeroshot",
    example: str = None,
    max_retry: int = 1,
    overwrite: bool = False,
):
    tokenizer = AutoTokenizer.from_pretrained(TOKENIZER_PATH)
    fp,ext = os.path.splitext(input_path)
    if output_path is None:
        output_path = f"{fp}.{os.path.basename(MODEL)}.{prompt}{ext}"
    else:
        output_path = os.path.join(output_path,f"{os.path.basename(MODEL)}.{prompt}{ext}")
    log = output_path+".log"
    if not os.path.exists(os.path.dirname(output_path)):
        os.makedirs(os.path.dirname(output_path),exist_ok=True)
        
    dataset = read_dataset(input_path)

    if overwrite:
        print("[!] remove existing output file:",output_path)
        if os.path.exists(output_path):
            os.remove(output_path)
        if os.path.exists(log):
            os.remove(log)

    # checkpoint
    if os.path.exists(output_path):
        print("[-] load existing output file:",output_path)
        saved_dataset = read_dataset(output_path)
        saved_dataset = {d['obfuscated']:d for d in saved_dataset if 'obfuscated' in d and d['obfuscated']}
        new_dataset = []
        cnt = 0
        for d in dataset:
            if d['obfuscated'] in saved_dataset:
                new_dataset.append(saved_dataset[d['obfuscated']])
                cnt+=1
            else:
                new_dataset.append(d)
        print("[+] Find existing data:",cnt)
        dataset = new_dataset

    print("[-] Total Data Num:", len(dataset))
    
    start_time = time.time()
    input_out_of_context_cnt = 0
    output_out_of_context_cnt = 0
    empty_parsed_cnt = 0
    looper = tqdm(dataset,desc=f'deobfuscating {example}')
    for idx, data in enumerate(looper):
        if "raw_deobfuscated" in data and data["raw_deobfuscated"]:
            continue
        
        looper.set_postfix(input_out_of_context_cnt=input_out_of_context_cnt,
                           output_out_of_context_cnt=output_out_of_context_cnt,
                           empty_parsed_cnt=empty_parsed_cnt)
        input_text = generate_prompt(data["obfuscated"], template=prompt, example=example)
        
        if len(tokenizer.encode(input_text)) >= MAX_INPUT_TOKENS:
            input_out_of_context_cnt += 1
            continue
        
        try_cnt = 0
        while ("deobfuscated" not in data or not data["deobfuscated"]) and try_cnt<max_retry:
            try_cnt += 1
            output_out_of_context_flag = False
            empty_parsed_flag = False

            raw_output = call_model(input_text)

            # call model error
            if raw_output.startswith("<RequestException>"):
                print(colored(raw_output,'red'))
                continue
            
            # out of max output tokens
            if len(tokenizer.encode(raw_output)) >= MAX_NEW_TOKENS:
                output_out_of_context_flag = True
                print(colored(input_text,'blue'),'\n',colored(raw_output+f"\n[!] Out of context window: {MAX_NEW_TOKENS}",'yellow'),sep='')
                continue
            else:
                print(colored(input_text,'blue'),'\n',colored(raw_output,'green'),sep='')

            # fail to parse JS code from raw output
            output = parse_model_output(raw_output)
            data['raw_deobfuscated'] = raw_output
            data['deobfuscated'] = output
            if not output:
                empty_parsed_flag = True
                continue
            else:
                break
        
        if output_out_of_context_flag:
            output_out_of_context_cnt += 1
        if empty_parsed_flag:
            empty_parsed_cnt += 1

        print("[-] save data to:", output_path)
        with jsonlines.open(output_path,'a') as w:
            w.write(data)

    with jsonlines.open(output_path,'w') as w:
        w.write_all(dataset)
    elapsed_time = time.time() - start_time
    print(f"all time: {round(elapsed_time,2)}s average time: {round(elapsed_time/len(dataset),4)}s/it")
    print(f"save results to {output_path}")
    print(f"input_out_of_context_cnt: {input_out_of_context_cnt}")
    print(f"output_out_of_context_cnt: {output_out_of_context_cnt}")

    
    with open(log,'w') as f:
        f.write(f"input_out_of_context_cnt: {input_out_of_context_cnt}\n")
        f.write(f"output_out_of_context_cnt: {output_out_of_context_cnt}\n")
        f.write(f"empty_parsed_cnt: {empty_parsed_cnt}\n")
        f.write(f"all time: {round(elapsed_time,2)}s average time: {round(elapsed_time/len(dataset),4)}s/it\n")
        
if __name__ == "__main__":
    fire.Fire(main)
