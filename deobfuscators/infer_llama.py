import os
import sys
import time
import json
import fire
import torch
import logging
import jsonlines
from tqdm import tqdm
from transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig
from build_dataset.data import read_dataset, save_solution
from utils import parse_model_output, chunks, generate_prompt, checkpoint, auto_judge_oneshot_example

torch.cuda.empty_cache() 
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

def sort_by_obfuscated_length(dataset):
    return sorted(dataset, key=lambda x: len(x["obfuscated"]))

def evaluate(
        prompts,
        tokenizer,
        model,
        max_length=1024*6,
        max_new_tokens=1024*2
):
    inputs = tokenizer(prompts, return_tensors="pt", max_length=max_length, truncation=True, padding=True).to(device)

    generation_config = GenerationConfig(
        max_new_tokens=max_new_tokens,
        do_sample=True,
        num_beams=1,
        top_k=1,
        top_p=1,
        temperature=0.1,
        #num_return_sequences=1,
        #use_cache=True,
        eos_token_id=tokenizer.eos_token_id,
        pad_token_id=tokenizer.pad_token_id
    )
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            generation_config=generation_config,
            # return_dict_in_generate=True,
            # output_scores=True,
        )
    
    decoded_outputs = tokenizer.batch_decode(outputs, skip_special_tokens=True)

    outputs = [parse_model_output(output, prompt) for output, prompt in zip(decoded_outputs, prompts)]
    return decoded_outputs, outputs


def main(
    input_path: str,
    output_path: str,
    prompt_template: str = "oneshot",
    oneshot_example: str = None,
    load_8bit: bool = False,
    batch_size: int = 1, 
    base_model_path: str = "/archive/LLMs/CodeLlama-7b-Instruct-hf",
):
    # --base_model_path "/archive/LLMs/CodeLlama-70b-Instruct-hf" 
    # input_path = "../build_dataset/codenet_dataset_control-flow-flattening/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_control-flow-flattening/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_name-obfuscation/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_deadcode-injection/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_deadcode-injection/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_debug-protection/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_debug-protection/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_self-defending/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_self-defending/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_string-obfuscation/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_string-obfuscation/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    # input_path = "../build_dataset/codenet_dataset_code-compact/Project_CodeNet_selected.jsonl"
    # output_path = "../results/codenet_javascript-obfuscator_code-compact/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl"
    
    if prompt_template == "oneshot" and oneshot_example is None:
        oneshot_example = auto_judge_oneshot_example(input_path)
        assert oneshot_example != None, "Need --oneshot_example when --prompt_template=oneshot"
    assert base_model_path, (
        "Please specify a --base_model, e.g. --base_model='bigcode/starcoder'"
    )
    if not os.path.exists(os.path.dirname(output_path)):
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    tokenizer = AutoTokenizer.from_pretrained(base_model_path)
    tokenizer.padding_side = 'left'
    tokenizer.pad_token_id = 0

    model = AutoModelForCausalLM.from_pretrained(
        base_model_path, 
        device_map="auto", 
        torch_dtype=torch.float16, 
        load_in_8bit=load_8bit,
    )
    model.eval()
    if torch.__version__ >= "2" and sys.platform != "win32":
        model = torch.compile(model)

    logging.info(f"read from {input_path}")
    if os.path.exists(output_path):
        dataset, breakpoint = checkpoint(output_path)
    else:
        dataset = read_dataset(input_path)
        dataset = sort_by_obfuscated_length(dataset)
        breakpoint = 0
    print(f"Total Num: {len(dataset)}, Remain Num: {len(dataset[breakpoint:])}")
    start_time = time.time()
    for chunk in tqdm(list(chunks(dataset[breakpoint:], batch_size))):
        prompt_text = [generate_prompt(sample["obfuscated"], template=prompt_template, example=oneshot_example) for sample in chunk]
        raw_outputs, outputs = evaluate(prompt_text, tokenizer, model)
        for sample, raw_output, output in zip(chunk, raw_outputs, outputs):
            sample['raw_deobfuscated'] = raw_output
            sample['deobfuscated'] = output

        save_solution(dataset, output_path)
    elapsed_time = time.time() - start_time
    logging.info(f"average time: {round(elapsed_time/len(dataset),4)}s/it")
    logging.info(f"save to {output_path}")

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    fire.Fire(main)
