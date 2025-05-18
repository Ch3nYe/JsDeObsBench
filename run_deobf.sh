#!/bin/bash

obf_configs=(
    "code-compact"
    "control-flow-flattening"
    "deadcode-injection"
    "debug-protection"
    "self-defending"
    "string-obfuscation"
    "name-obfuscation"
    "combinations/C77-0"
)

cd deobfuscators

export API_KEY="EMPTY" # api key to access the remote model
export API_URL="http://localhost:8000/v1" # api url to access the remote model
export MODEL="Mistral-7B-Instruct-v0.3" # remote model name
export TOKENIZER_PATH="mistralai/Mistral-7B-Instruct-v0.3" # huggingface repo id or local path

parallel -j 8 --progress --ungroup python query_vllm.py --input_path build_dataset/codenet_dataset_{}/Project_CodeNet_selected.jsonl --output_path results/codenet_javascript-obfuscator_{}/ --max_retry 1 --prompt oneshot --example {} ::: "${obf_configs[@]}"

# --overwrite