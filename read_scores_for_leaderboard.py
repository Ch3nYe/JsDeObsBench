from collections import defaultdict
import os
import json
import jsonlines
import numpy as np

'''final score item for a model
{
    "name": "OpenCoder-8B-Instruct",
    "link": "https://huggingface.co/infly/OpenCoder-8B-Instruct",
    "open-data": "None", # "None" for default, "Partial", "Full"
    "scores": {
        "single": {
            "syntax":81.7,
            "exec":81.7,
            "decomplexity":81.7,
            "similarity":81.7,
            "overall":81.7,
        },
        "combination": {
            "syntax": 77.4,
            "exec": 77.4,
            "decomplexity": 77.4,
            "similarity": 77.4,
            "overall": 77.4,
        }
    },
    "is-expert": true, # if the model of method is expert for JS deobfuscation
    "prompt": "None", # "None" for default, "oneshot", "zeroshot"
    "size": 8.0 # >= 0.0
}
'''

'''single score use the following transformations
./results/code-compact/<model_name>.oneshot.jsonl
./results/control-flow-flattening/<model_name>.oneshot.jsonl
./results/deadcode-injection/<model_name>.oneshot.jsonl
./results/debug-protection/<model_name>.oneshot.jsonl
./results/self-defending/<model_name>.oneshot.jsonl
./results/string-obfuscation/<model_name>.oneshot.jsonl
./results/name-obfuscation/<model_name>.oneshot.jsonl
'''

''' combination score use the following combinations
./results/codenet_javascript-obfuscator_combinations/C77-0/<model_name>.oneshot.jsonl
'''


def read_json(file_path):
    if file_path.endswith('.jsonl'):
        with jsonlines.open(file_path, 'r') as reader:
            return list(reader)
    elif file_path.endswith('.json'):
        with open(file_path, 'r') as f:
            return json.load(f)
    else:
        raise NotImplementedError

def read_scores(res_file_path) -> np.ndarray:
    if not os.path.exists(res_file_path):
        print(f"[!] Not found file: {res_file_path}")
        return None
    dataset = read_json(res_file_path)
    syntax_pass = [data['syntax_pass'] if 'syntax_pass' in data else 0 for data in dataset]
    exe_pass = [int(data['exe_pass']) if 'exe_pass' in data else 0 for data in dataset]
    codebleu = [data['code_bleu']['codebleu'] for data in dataset if 'code_bleu' in data]
    decomplexity = [data['code_complexity']['new_decrease_halstead_len'] for data in dataset if 'code_complexity' in data]
    
    return {
        "syntax": np.array(syntax_pass),
        "exe": np.array(exe_pass),
        "decomplexity": np.array(decomplexity),
        "codebleu": np.array(codebleu),
    }

def read_scores_by_transformation(model_name, transformation, shot="oneshot"):
    """read score for a single transformation"""
    if model_name in ["js-deobfuscator", "synchrony"]: # baseline tools
        file_path = f"results/codenet_javascript-obfuscator_{transformation}/{model_name}.metrics.jsonl"
    else: # LLMs
        file_path = f"results/codenet_javascript-obfuscator_{transformation}/{model_name}.{shot}.metrics.jsonl"
    return read_scores(file_path)

def read_combination_scores(model_name, combination="C77-0", shot="oneshot"):
    """read score for combination of transformations"""
    if model_name in ["js-deobfuscator", "synchrony"]: # baseline tools
        file_path = f"results/codenet_javascript-obfuscator_combinations/{combination}/{model_name}.metrics.jsonl"
    else: # LLMs
        file_path = f"results/codenet_javascript-obfuscator_combinations/{combination}/{model_name}.{shot}.metrics.jsonl"
    return read_scores(file_path)

def get_model_scores(model_name, shot="oneshot", is_expert=False, model_size=0.0, model_link="", open_data="None"):
    """read all score for the model and return the final score"""
    transformations = ["code-compact", "debug-protection", "name-obfuscation", 
                      "self-defending", "control-flow-flattening", "deadcode-injection", 
                      "string-obfuscation"]
    
    # collect single transformation scores
    single_scores = defaultdict(list)
    for transformation in transformations:
        scores = read_scores_by_transformation(model_name, transformation, shot)
        if scores is not None:
            for metric, values in scores.items():
                single_scores[metric].append(values)
    
    # calc average score for each metric
    single_avg_scores = {}
    for metric, values_list in single_scores.items():
        all_values = np.concatenate(values_list)
        single_avg_scores[metric] = float(np.mean(all_values) * 100)
    
    # calc overall score for single transformation
    single_avg_scores["overall"] = float(np.mean(list(single_avg_scores.values())))
    
    # collect combination deobfuscation scores
    combination_scores = read_combination_scores(model_name, "C77-0", shot)
    
    # calc average score for each metric
    combination_avg_scores = {}
    if combination_scores is not None:
        for metric, values in combination_scores.items():
            combination_avg_scores[metric] = float(np.mean(values) * 100)
        
        # calc overall score for combination
        combination_avg_scores["overall"] = float(np.mean(list(combination_avg_scores.values())))
    
    # final score
    result = {
        "name": model_name,
        "link": model_link,
        "open-data": open_data,
        "scores": {
            "single": single_avg_scores,
            "combination": combination_avg_scores
        },
        "is-expert": is_expert,
        "prompt": shot,
        "size": model_size
    }
    
    return result


def main():
    # model cards
    models_config = [
        { # new model
            "name": "Mistral-7B-Instruct-v0.3",
            "link": "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
            "open-data": "True", # if release the deobfuscation results file?
            "is-expert": False, # is expert model for JS deobfuscation
            "prompt": "oneshot",
            "size": 7 # model size (B)
        },
        # {
        #     "name": "gpt-4o",
        #     "link": "https://openai.com/gpt-4o",
        #     "open-data": "None",
        #     "is-expert": False,
        #     "prompt": "oneshot",
        #     "size": 0.0
        # },
        # {
        #     "name": "js-deobfuscator",
        #     "link": "https://github.com/js-deobfuscator/deobfuscator",
        #     "open-data": "None",
        #     "is-expert": True,
        #     "prompt": "None",
        #     "size": 0.0
        # },
        # {
        #     "name": "synchrony",
        #     "link": "https://github.com/relative/synchrony",
        #     "open-data": "None",
        #     "is-expert": True,
        #     "prompt": "None",
        #     "size": 0.0
        # }
    ]
    
    output_file = "leaderboard.json"
    # generate model card with scores
    models_scores = []
    for model_config in models_config:
        model_score = get_model_scores(
            model_config["name"],
            model_config["prompt"],
            model_config["is-expert"],
            model_config["size"],
            model_config["link"],
            model_config["open-data"]
        )
        models_scores.append(model_score)
        print(f"[!] successfully read score for {model_config['name']}")
    
    # 保存结果
    with open(output_file, 'w') as f:
        json.dump(models_scores, f, indent=2)
    print(f"[+] save all score into {output_file}")

if __name__ == "__main__":
    main()

