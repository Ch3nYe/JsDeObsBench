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

models=(
    "Mistral-7B-Instruct-v0.3"
    # "more-model"
)

prompts=(
    "oneshot"
)

commands=()
for model in "${models[@]}"; do
    for config in "${obf_configs[@]}"; do
        for prompt in "${prompts[@]}"; do
            results="results/codenet_javascript-obfuscator_${config}/${model}.${prompt}.jsonl"
            if [ -f ${results} ]; then
                config_name=$(echo $config | sed 's/\//-/g')
                commands+=("python eval.py --results ${results} --contrainer_name ${model}-${config_name}-${prompt}")
            fi
        done
    done
done

# print commands
for command in "${commands[@]}"; do
    echo $command
done

if [ -z "$commands" ]; then
    echo "No commands to run"
    exit 0
fi

parallel -j 8 --progress --ungroup ::: "${commands[@]}"
