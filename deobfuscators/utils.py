import re
import os
import time
import json
import jsonlines

def read_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def read_jsonline_file(file_path):
    with jsonlines.open(file_path) as reader:
        data = [d for d in reader]
    return data

def checkpoint(save_file_path):
    if save_file_path.endswith('.json'):
        done_data = read_json_file(save_file_path)
    elif save_file_path.endswith('.jsonl'):
        done_data = read_jsonline_file(save_file_path)
    else:
        raise NotImplementedError
    
    finish_num = 0
    for item in done_data:
        if "deobfuscated" in item:
            finish_num += 1
        else:
            break
    print(f'[+] checkpoint: {finish_num}/{len(done_data)} data has been done.')
    time.sleep(3)
    return done_data, finish_num

def find_whole_word(word, text):
    pattern = r'\b{}\b'.format(re.escape(word))
    match = re.search(pattern, text)
    if match:
        return match.group()
    else:
        return None

def auto_judge_oneshot_example(input_path):
    if "name-obfuscation" in input_path:
        return "name-obfuscation"
    elif "control-flow-flattening" in input_path:
        return "control-flow-flattening"
    elif "deadcode-injection" in input_path:
        return "deadcode-injection"
    elif "debug-protection" in input_path:
        return "debug-protection"
    elif "self-defending" in input_path:
        return "self-defending"
    elif "string-obfuscation" in input_path:
        return "string-obfuscation"
    elif "code-compact" in input_path:
        return "code-compact"
    else:
        return None

def parse_model_output(output):
    '''
    @desc: return the code wrapped by ```
        exampl 1:
        "```python\nprint('hello world')\n```"
        example 2:
        "the code:\n```JavsScript\nconsole.log('hello world')\nconsole.log('hello world')\n```"
    
    '''
    if "Output deobfuscated JavaScript code:" in output:
        output = output.split("Output deobfuscated JavaScript code:")[1].strip()
    else:
        output = "[!] not found \"Output deobfuscated JavaScript code:\""
        print(output)
    pattern = r'```[a-zA-Z]+\n(.+?)\n```'
    match = re.search(pattern, output, re.DOTALL)
    if match:
        return match.group(1)
    else:
        return None

def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


PROMPT_TEMPLATE_ALPACA = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
You are an experienced JavaScript developer who is also well versed in code obfuscation and reverse engineering. Now, please deobfuscate the given obfuscated JavaScript code and follow the below rules.
1. First, analyze the functionality and semantics of the obfuscated JavaScript code
2. Second, output only the deobfuscated code and wrap it with triple backticks (```)

### Input:
```javascript
{obfuscated_code}
```

### Response:
"""

PROMPT_TEMPLATE_ZEROSHOT = """Imagine you are a skilled JavaScript developer, also skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```). Do not explain further, just deobfuscate it.

Input obfuscated JavaScript code:
```javascript
{obfuscated_code}
```

Output deobfuscated JavaScript code:
"""

PROMPT_TEMPLATE_ONESHOT = """
Imagine you are a skilled JavaScript developer, also skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```). Do not explain further, just deobfuscate it.

The following are some examples of JS code deobfuscation:
{example}

Input obfuscated JavaScript code:
```javascript
{obfuscated_code}
```

Output deobfuscated JavaScript code:
"""

template_dict = {
    "alpaca": PROMPT_TEMPLATE_ALPACA,
    "oneshot": PROMPT_TEMPLATE_ONESHOT,
    "zeroshot": PROMPT_TEMPLATE_ZEROSHOT,
} 


example_path = os.path.join(os.path.dirname(__file__),"examples.json")
with open(example_path, 'r') as f:
    FEWSHOT_EXAMPLES = json.load(f)

def build_example_prompt(examples, num_examples=1):
    template = """
Input obfuscated JavaScript code:
```javascript
{obfuscated_code}
```

Output deobfuscated JavaScript code:
```javascript
{original_code}
```
"""
    res = ""
    for ex in examples[:num_examples]:
        res += template.format(obfuscated_code=ex['obfuscated'],original_code=ex['original'])
    return res

def generate_prompt(obfuscated_code, template="zeroshot", example=None):
    prompt_template = template_dict[template]

    if template == "oneshot":
        assert example in FEWSHOT_EXAMPLES, "[!] In oneshot mode, example must be one of {}".format(FEWSHOT_EXAMPLES.keys())
        
        example = build_example_prompt(FEWSHOT_EXAMPLES[example])
        return prompt_template.format(example=example, obfuscated_code=obfuscated_code)
    
    elif template == "zeroshot":
        return prompt_template.format(obfuscated_code=obfuscated_code)
    elif template == "alpaca":
        return prompt_template.format(obfuscated_code=obfuscated_code)