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

def parse_model_output(output, prompt):
    '''
    @desc: return the code wrapped by ```
        exampl1:
        "```python\nprint('hello world')\n```"
        example2:
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

PROMPT_TEMPLATE_ONESHOT_EXAMPLE = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
const a0_0x16016f=a0_0x9b95;(function(_0x42f568,_0x65cc12){const _0x20be1d=a0_0x9b95,_0x3dd78e=_0x42f568();while(!![]){try{const _0x69d327=-parseInt(_0x20be1d(0x80))/0x1+-parseInt(_0x20be1d(0x75))/0x2+parseInt(_0x20be1d(0x7a))/0x3*(-parseInt(_0x20be1d(0x77))/0x4)+-parseInt(_0x20be1d(0x78))/0x5+-parseInt(_0x20be1d(0x7c))/0x6+-parseInt(_0x20be1d(0x7b))/0x7+parseInt(_0x20be1d(0x7f))/0x8;if(_0x69d327===_0x65cc12)break;else _0x3dd78e['push'](_0x3dd78e['shift']());}catch(_0x344458){_0x3dd78e['push'](_0x3dd78e['shift']());}}}(a0_0x4053,0x933b8));const lines=require('fs')[a0_0x16016f(0x7e)](a0_0x16016f(0x79),a0_0x16016f(0x76)),line=lines[a0_0x16016f(0x7d)]('\\x20'),A=+line[0x0],B=+line[0x1],N=+line[0x2],max=Math['floor'](A*N/B);console['log'](max);function a0_0x9b95(_0x2feece,_0xdfc768){const _0x4053c0=a0_0x4053();return a0_0x9b95=function(_0x9b953a,_0xc17025){_0x9b953a=_0x9b953a-0x75;let _0x45290e=_0x4053c0[_0x9b953a];return _0x45290e;},a0_0x9b95(_0x2feece,_0xdfc768);}function a0_0x4053(){const _0x386ce5=['1082336WUTiCo','utf8','677204mIbTYh','2589300MBrPtE','/dev/stdin','18HngRkh','1759695NcgGRb','143226ZURqYk','split','readFileSync','27946968nKZSaS','540217NQjEkQ'];a0_0x4053=function(){return _0x386ce5;};return a0_0x4053();}
```

Example deobfuscated JavaScript code:
```javascript
const lines = require('fs').readFileSync('/dev/stdin', 'utf8')\nconst line = lines.split(' ')\nconst A = +line[0]\nconst B = +line[1]\nconst N = +line[2]\n\nconst max = Math.floor((A * N) / B);\nconsole.log(max)
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_rename_only = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function a0_0x3c77ba(_0x4be0bc) {\n    var _0x519a84 = 0x0;\n    for (var _0xa73ec1 = 0x0; _0xa73ec1 < _0x4be0bc['length']; _0xa73ec1++) {\n        if (parseInt(_0x4be0bc[_0xa73ec1]) != _0xa73ec1 % 0x2)\n            _0x519a84++;\n    }\n    console['log'](parseInt(Math['min'](_0x519a84, _0x4be0bc['length'] - _0x519a84)));\n}\na0_0x3c77ba(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n  var cnt = 0;\n  for(var i=0; i<input.length; i++){\n  \tif(parseInt(input[i])!=i%2)cnt++;\n  }\n  console.log(parseInt(Math.min(cnt, input.length-cnt)));\n}\nMain(require("fs").readFileSync("/dev/stdin", "utf8"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_code_compact = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(input){input=input['split']('\\x0a');t=input[0x0]['split']('');s=input[0x1]['split']('');var result=0x0;for(var i=0x0;i<s['length'];i++){if(s[i]!=t[i]){result=result+0x1;}else{}}console['log'](result);}Main(require('fs')['readFileSync']('/dev/stdin','utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_control_flow_flattening = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(input) {\n    const VZAZFJ = {\n        'zEbtC': function (x, y) {\n            return x === y;\n        }\n    };\n    input = input['split']('\\x0a');\n    input = input[0x0];\n    const last = input['slice'](-0x1);\n    const sufix = VZAZFJ['zEbtC'](last, 's') ? 'es' : 's';\n    console['log']('' + input + sufix);\n}\nMain(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n  input = input.split(\"\\n\");\n    input = input[0];\n    const last = input.slice(-1) ;\n    const sufix = last === \"s\" ? \"es\" : \"s\";\n\t\tconsole.log(`${input}${sufix}`);\n}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_deadcode_injection = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
var a0_0x502a6d = a0_0x3b92;\nfunction a0_0x3b92(MfXItP, key) {\n    var stringArray = a0_0x28dc();\n    a0_0x3b92 = function (index, key) {\n        index = index - 0x0;\n        var value = stringArray[index];\n        return value;\n    };\n    return a0_0x3b92(MfXItP, key);\n}\nfunction a0_0x28dc() {\n    var _0x5a960c = [\n        'replace',\n        'log',\n        'Yes',\n        'readFileSync',\n        '/dev/stdin',\n        'utf8'\n    ];\n    a0_0x28dc = function () {\n        return _0x5a960c;\n    };\n    return a0_0x28dc();\n}\nfunction Main(input) {\n    var _0x3847a6 = a0_0x3b92;\n    input = input[_0x3847a6(0x0)](/\\n/g, '\\x20');\n    input = input['split']('\\x20');\n    var A = Number(input[0x0]);\n    var B = Number(input[0x1]);\n    input = input['slice'](0x2);\n    for (var i = 0x0; i < input['length'] - B; i++) {\n        if (Number(input[i]) < Number(input[i + B])) {\n            console[_0x3847a6(0x1)](_0x3847a6(0x2));\n        } else {\n            console['log']('No');\n        }\n    }\n}\nMain(require('fs')[a0_0x502a6d(0x3)](a0_0x502a6d(0x4), a0_0x502a6d(0x5)));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n  input = input.replace(/\\n/g, ' ');\n  input = input.split(\" \");\n  var A = Number(input[0]);\n  var B = Number(input[1]);\n  input = input.slice(2)\n  for(var i=0;i<input.length-B;i++){\n    if(Number(input[i])<Number(input[i+B])){\n      console.log(\"Yes\");\n    }else{\n      console.log(\"No\");\n    }\n  }\n}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_self_defending = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(input){var _0x2c9549=(function(){var firstCall=!![];return function(context,fn){var rfn=firstCall?function(){if(fn){var res=fn['apply'](context,arguments);fn=null;return res;}}:function(){};firstCall=![];return rfn;};}());var _0x5cfedc=_0x2c9549(this,function(){return _0x5cfedc['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x5cfedc)['search']('(((.+)+)+)+$');});_0x5cfedc();input=input['split']('\\x0a');t=input[0x0]['split']('');s=input[0x1]['split']('');var result=0x0;for(var i=0x0;i<s['length'];i++){if(s[i]!=t[i]){result=result+0x1;}else{}}console['log'](result);}Main(require('fs')['readFileSync']('/dev/stdin','utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_debug_protection = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(input) {\n    var _0x9e9a8 = (function () {\n        var firstCall = !![];\n        return function (context, fn) {\n            var rfn = firstCall ? function () {\n                if (fn) {\n                    var res = fn['apply'](context, arguments);\n                    fn = null;\n                    return res;\n                }\n            } : function () {\n            };\n            firstCall = ![];\n            return rfn;\n        };\n    }());\n    (function () {\n        _0x9e9a8(this, function () {\n            var regExp1 = new RegExp('function\\x20*\\x5c(\\x20*\\x5c)');\n            var regExp2 = new RegExp('\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');\n            var result = _0x12708e('init');\n            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {\n                result('0');\n            } else {\n                _0x12708e();\n            }\n        })();\n    }());\n    input = input['split']('\\x0a');\n    t = input[0x0]['split']('');\n    s = input[0x1]['split']('');\n    var result = 0x0;\n    for (var i = 0x0; i < s['length']; i++) {\n        if (s[i] != t[i]) {\n            result = result + 0x1;\n        } else {\n        }\n    }\n    console['log'](result);\n}\nMain(require('fs')['readFileSync']('/dev/stdin', 'utf8'));\nfunction _0x12708e(ret) {\n    function debuggerProtection(counter) {\n        if (typeof counter === 'string') {\n            return function (arg) {\n            }['constructor']('while\\x20(true)\\x20{}')['apply']('counter');\n        } else {\n            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {\n                (function () {\n                    return !![];\n                }['constructor']('debu' + 'gger')['call']('action'));\n            } else {\n                (function () {\n                    return ![];\n                }['constructor']('debu' + 'gger')['apply']('stateObject'));\n            }\n        }\n        debuggerProtection(++counter);\n    }\n    try {\n        if (ret) {\n            return debuggerProtection;\n        } else {\n            debuggerProtection(0x0);\n        }\n    } catch (y) {\n    }\n}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_name_obfuscation = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(_0x59ab4b) {\n    _0x59ab4b = _0x59ab4b['split']('\\x0a');\n    t = _0x59ab4b[0x0]['split']('');\n    s = _0x59ab4b[0x1]['split']('');\n    var _0x17d948 = 0x0;\n    for (var _0x358cd9 = 0x0; _0x358cd9 < s['length']; _0x358cd9++) {\n        if (s[_0x358cd9] != t[_0x358cd9]) {\n            _0x17d948 = _0x17d948 + 0x1;\n        } else {\n        }\n    }\n    console['log'](_0x17d948);\n}\nMain(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_string_obfuscation = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
var a0_0x3693a9 = a0_0x3d07;\n(function (stringArrayFunction, comparisonValue) {\n    var _0x37d420 = a0_0x3d07;\n    var stringArray = stringArrayFunction();\n    while (!![]) {\n        try {\n            var expression = -parseInt(_0x37d420(0x146)) / 0x1 * (-parseInt(_0x37d420(0x144)) / 0x2) + -parseInt(_0x37d420(0x140)) / 0x3 * (parseInt(_0x37d420(0x147)) / 0x4) + -parseInt(_0x37d420(0x14a)) / 0x5 + -parseInt(_0x37d420(0x141)) / 0x6 + parseInt(_0x37d420(0x143)) / 0x7 + parseInt(_0x37d420(0x142)) / 0x8 * (parseInt(_0x37d420(0x13d)) / 0x9) + parseInt(_0x37d420(0x13c)) / 0xa;\n            if (expression === comparisonValue) {\n                break;\n            } else {\n                stringArray['push'](stringArray['shift']());\n            }\n        } catch (e) {\n            stringArray['push'](stringArray['shift']());\n        }\n    }\n}(a0_0x1877, 0x82333));\nfunction a0_0x3d07(aXnbkn, key) {\n    var stringArray = a0_0x1877();\n    a0_0x3d07 = function (index, key) {\n        index = index - 0x13c;\n        var value = stringArray[index];\n        return value;\n    };\n    return a0_0x3d07(aXnbkn, key);\n}\nfunction a0_0x1877() {\n    var _0x245e39 = [\n        '3099540impIfk',\n        '6704leyWgM',\n        '5393857zLuYeY',\n        '415198wXWgrz',\n        'split',\n        '5kqWwvd',\n        '4hCXAGX',\n        'length',\n        'readFileSync',\n        '4476660rTLYBG',\n        '2261210xtiYGc',\n        '9UkBhRZ',\n        '/dev/stdin',\n        'log',\n        '270852MQYiih'\n    ];\n    a0_0x1877 = function () {\n        return _0x245e39;\n    };\n    return a0_0x1877();\n}\nfunction Main(input) {\n    var _0x45e0b9 = a0_0x3d07;\n    input = input[_0x45e0b9(0x145)]('\\x0a');\n    t = input[0x0]['split']('');\n    s = input[0x1][_0x45e0b9(0x145)]('');\n    var result = 0x0;\n    for (var i = 0x0; i < s[_0x45e0b9(0x148)]; i++) {\n        if (s[i] != t[i]) {\n            result = result + 0x1;\n        } else {\n        }\n    }\n    console[_0x45e0b9(0x13f)](result);\n}\nMain(require('fs')[a0_0x3693a9(0x149)](a0_0x3693a9(0x13e), 'utf8'));
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_2 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(input){var _0x1faa14=(function(){var firstCall=!![];return function(context,fn){var rfn=firstCall?function(){if(fn){var res=fn['apply'](context,arguments);fn=null;return res;}}:function(){};firstCall=![];return rfn;};}());(function(){_0x1faa14(this,function(){var regExp1=new RegExp('function\\x20*\\x5c(\\x20*\\x5c)');var regExp2=new RegExp('\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i');var result=_0x484495('init');if(!regExp1['test'](result+'chain')||!regExp2['test'](result+'input')){result('0');}else{_0x484495();}})();}());input=input['split']('\\x0a');t=input[0x0]['split']('');s=input[0x1]['split']('');var result=0x0;for(var i=0x0;i<s['length'];i++){if(s[i]!=t[i]){result=result+0x1;}else{}}console['log'](result);}Main(require('fs')['readFileSync']('/dev/stdin','utf8'));function _0x484495(ret){function debuggerProtection(counter){if(typeof counter==='string'){return function(arg){}['constructor']('while\\x20(true)\\x20{}')['apply']('counter');}else{if((''+counter/counter)['length']!==0x1||counter%0x14===0x0){(function(){return!![];}['constructor']('debu'+'gger')['call']('action'));}else{(function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject'));}}debuggerProtection(++counter);}try{if(ret){return debuggerProtection;}else{debuggerProtection(0x0);}}catch(y){}}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_3 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function main(_0x2de70c){const _0x18ca36=(function(){let _0x2813c8=!![];return function(_0x534012,_0x4a793a){const _0x3dba2a=_0x2813c8?function(){if(_0x4a793a){const _0x141247=_0x4a793a['apply'](_0x534012,arguments);_0x4a793a=null;return _0x141247;}}:function(){};_0x2813c8=![];return _0x3dba2a;};}());(function(){_0x18ca36(this,function(){const _0x2e0ec3=new RegExp('function\\x20*\\x5c(\\x20*\\x5c)');const _0x16ec0e=new RegExp('\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i');const _0x35f114=_0x1da5e9('init');if(!_0x2e0ec3['test'](_0x35f114+'chain')||!_0x16ec0e['test'](_0x35f114+'input')){_0x35f114('0');}else{_0x1da5e9();}})();}());let [_0x2e63c9,_0x44233d]=_0x2de70c['split']('\\x0a')['map'](_0xf12dc0=>_0xf12dc0['split'](''));let _0x42f439=0x0;for(let _0x5f5a99=0x0;_0x5f5a99<_0x2e63c9['length'];_0x5f5a99++){if(_0x2e63c9[_0x5f5a99]!==_0x44233d[_0x5f5a99])_0x42f439++;}console['log'](_0x42f439);}main(require('fs')['readFileSync']('/dev/stdin','utf8'));function _0x1da5e9(_0x40cb68){function _0x59b195(_0x514f55){if(typeof _0x514f55==='string'){return function(_0x60aa5c){}['constructor']('while\\x20(true)\\x20{}')['apply']('counter');}else{if((''+_0x514f55/_0x514f55)['length']!==0x1||_0x514f55%0x14===0x0){(function(){return!![];}['constructor']('debu'+'gger')['call']('action'));}else{(function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject'));}}_0x59b195(++_0x514f55);}try{if(_0x40cb68){return _0x59b195;}else{_0x59b195(0x0);}}catch(_0x3587bf){}}
```

Example deobfuscated JavaScript code:
```javascript
function main(input){\n  let [s, t] = input.split('\\n').map(v=>v.split(''));\n  let count = 0\n  for(let i=0; i< s.length; i++){\n    if(s[i] !== t[i]) count++;\n  }\n\n  console.log(count);\n}\n\nmain(require('fs').readFileSync('/dev/stdin', 'utf8'));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_4 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(_0x2581dd){var _0x19cb5f=(function(){var _0x203ce3=!![];return function(_0x4c31fa,_0xbacee9){var _0x41100f=_0x203ce3?function(){if(_0xbacee9){var _0x3c17fd=_0xbacee9['apply'](_0x4c31fa,arguments);_0xbacee9=null;return _0x3c17fd;}}:function(){};_0x203ce3=![];return _0x41100f;};}());var _0xe7bd84=_0x19cb5f(this,function(){return _0xe7bd84['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0xe7bd84)['search']('(((.+)+)+)+$');});_0xe7bd84();var _0x14af9e=(function(){var _0x25f393=!![];return function(_0xa62095,_0xdf22b){var _0x27868d=_0x25f393?function(){if(_0xdf22b){var _0x100c20=_0xdf22b['apply'](_0xa62095,arguments);_0xdf22b=null;return _0x100c20;}}:function(){};_0x25f393=![];return _0x27868d;};}());(function(){_0x14af9e(this,function(){var _0x48c24f=new RegExp('function\\x20*\\x5c(\\x20*\\x5c)');var _0x337422=new RegExp('\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i');var _0x3e38d4=_0x2898ff('init');if(!_0x48c24f['test'](_0x3e38d4+'chain')||!_0x337422['test'](_0x3e38d4+'input')){_0x3e38d4('0');}else{_0x2898ff();}})();}());_0x2581dd=_0x2581dd['replace'](/\\n/g,'\\x20');_0x2581dd=_0x2581dd['split']('\\x20');var _0x29c2=Number(_0x2581dd[0x0]);var _0x23dfa0=Number(_0x2581dd[0x1]);_0x2581dd=_0x2581dd['slice'](0x2);for(var _0x45bd3e=0x0;_0x45bd3e<_0x2581dd['length']-_0x23dfa0;_0x45bd3e++){if(Number(_0x2581dd[_0x45bd3e])<Number(_0x2581dd[_0x45bd3e+_0x23dfa0])){console['log']('Yes');}else{console['log']('No');}}}Main(require('fs')['readFileSync']('/dev/stdin','utf8'));function _0x2898ff(_0x51ec5c){function _0x20b988(_0x4cbd08){if(typeof _0x4cbd08==='string'){return function(_0x247167){}['constructor']('while\\x20(true)\\x20{}')['apply']('counter');}else{if((''+_0x4cbd08/_0x4cbd08)['length']!==0x1||_0x4cbd08%0x14===0x0){(function(){return!![];}['constructor']('debu'+'gger')['call']('action'));}else{(function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject'));}}_0x20b988(++_0x4cbd08);}try{if(_0x51ec5c){return _0x20b988;}else{_0x20b988(0x0);}}catch(_0x386c5b){}}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n  input = input.replace(/\\n/g, ' ');\n  input = input.split(\" \");\n  var A = Number(input[0]);\n  var B = Number(input[1]);\n  input = input.slice(2)\n  for(var i=0;i<input.length-B;i++){\n    if(Number(input[i])<Number(input[i+B])){\n      console.log(\"Yes\");\n    }else{\n      console.log(\"No\");\n    }\n  }\n}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_5 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function Main(_0x3850ac){var _0x337ae4={'qxOLL':'(((.+)+)+)+$','vvXil':'function\\x20*\\x5c(\\x20*\\x5c)','JqQFp':'\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','qgYJa':function(_0x3141b3,_0x54f498){return _0x3141b3(_0x54f498);},'CNFlo':function(_0x1ba524,_0x590b94){return _0x1ba524+_0x590b94;},'vPtJB':'chain','PlQcb':function(_0x1d0cd3,_0x3ffcd0){return _0x1d0cd3+_0x3ffcd0;},'oeqli':'input','aGynX':function(_0x185db9,_0x2992da){return _0x185db9(_0x2992da);},'wKyFS':function(_0x21753b){return _0x21753b();},'qOfXS':function(_0x423114){return _0x423114();},'ZUdNj':function(_0x227266,_0x5b2537){return _0x227266<_0x5b2537;}};var _0x10960c=(function(){var _0x34007d=!![];return function(_0x513b8e,_0x50c38e){var _0x42fc45=_0x34007d?function(){if(_0x50c38e){var _0x1a84b3=_0x50c38e['apply'](_0x513b8e,arguments);_0x50c38e=null;return _0x1a84b3;}}:function(){};_0x34007d=![];return _0x42fc45;};}());var _0x165a09=_0x10960c(this,function(){return _0x165a09['toString']()['search'](_0x337ae4['qxOLL'])['toString']()['constructor'](_0x165a09)['search'](_0x337ae4['qxOLL']);});_0x337ae4['qOfXS'](_0x165a09);var _0xd350fd=(function(){var _0x39b48f=!![];return function(_0x1c5b6e,_0xfb67a5){var _0x42d2c7=_0x39b48f?function(){if(_0xfb67a5){var _0x566102=_0xfb67a5['apply'](_0x1c5b6e,arguments);_0xfb67a5=null;return _0x566102;}}:function(){};_0x39b48f=![];return _0x42d2c7;};}());(function(){_0xd350fd(this,function(){var _0x57c26c=new RegExp(_0x337ae4['vvXil']);var _0xdbeb83=new RegExp(_0x337ae4['JqQFp'],'i');var _0x33f5f5=_0x337ae4['qgYJa'](_0x1dacc5,'init');if(!_0x57c26c['test'](_0x337ae4['CNFlo'](_0x33f5f5,_0x337ae4['vPtJB']))||!_0xdbeb83['test'](_0x337ae4['PlQcb'](_0x33f5f5,_0x337ae4['oeqli']))){_0x337ae4['aGynX'](_0x33f5f5,'0');}else{_0x337ae4['wKyFS'](_0x1dacc5);}})();}());_0x3850ac=_0x3850ac['split']('\\x0a');t=_0x3850ac[0x0]['split']('');s=_0x3850ac[0x1]['split']('');var _0x4e4c22=0x0;for(var _0x48a677=0x0;_0x337ae4['ZUdNj'](_0x48a677,s['length']);_0x48a677++){if(s[_0x48a677]!=t[_0x48a677]){_0x4e4c22=_0x4e4c22+0x1;}else{}}console['log'](_0x4e4c22);}Main(require('fs')['readFileSync']('/dev/stdin','utf8'));function _0x1dacc5(_0x4655b5){var _0x47d4f3={'DNGes':'string','GKrJp':'while\\x20(true)\\x20{}','qpObz':'counter','tpRJL':function(_0x5ed46b,_0x39f2df){return _0x5ed46b+_0x39f2df;},'FrNDs':function(_0xcee67f,_0x11a248){return _0xcee67f===_0x11a248;},'vTfMC':function(_0x213d5b,_0x561ade){return _0x213d5b%_0x561ade;},'VWkAu':'debu','bGMMH':'gger','cAuGL':'action','UeRUt':'stateObject','HXqRG':function(_0x2c7b95,_0x3709eb){return _0x2c7b95(_0x3709eb);}};function _0x474e8b(_0x444773){if(typeof _0x444773===_0x47d4f3['DNGes']){return function(_0x1b49d1){}['constructor'](_0x47d4f3['GKrJp'])['apply'](_0x47d4f3['qpObz']);}else{if(_0x47d4f3['tpRJL']('',_0x444773/_0x444773)['length']!==0x1||_0x47d4f3['FrNDs'](_0x47d4f3['vTfMC'](_0x444773,0x14),0x0)){(function(){return!![];}['constructor'](_0x47d4f3['VWkAu']+_0x47d4f3['bGMMH'])['call'](_0x47d4f3['cAuGL']));}else{(function(){return![];}['constructor'](_0x47d4f3['tpRJL'](_0x47d4f3['VWkAu'],_0x47d4f3['bGMMH']))['apply'](_0x47d4f3['UeRUt']));}}_0x474e8b(++_0x444773);}try{if(_0x4655b5){return _0x474e8b;}else{_0x47d4f3['HXqRG'](_0x474e8b,0x0);}}catch(_0x360068){}}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_6 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
function a0_0x3c6f(_0x2c787b,_0x291a8e){var _0x3866f4=a0_0x18a9();a0_0x3c6f=function(_0x401b18,_0x69c43d){_0x401b18=_0x401b18-0x0;var _0x325b73=_0x3866f4[_0x401b18];return _0x325b73;};return a0_0x3c6f(_0x2c787b,_0x291a8e);}function a0_0x18a9(){var _0x51e27f=['sWMmA','HHJOv','yNtcq','vLbvU','ETCXJ','maBqW','NMvsr','cPfkw','function\\x20*\\x5c(\\x20*\\x5c)','\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','init','input','BeWso','chain','pKDvn','durWr','YsDqU','mcobk','hAZfG','rBbvD','apply','SYpyg','EFfVG','gpYMe','YBtFG','toString','search','(((.+)+)+)+$','ZqBFi','PZeLh','qkDZk','AidHQ','GgOnP','IqOWE','dixOT','ajvQr','ptGZn','UwEaC','LXVhx','KYqRV','vVfdE','OKyfj','test','aqaXQ','XOhOz','fIqIe','xyiUu','Kfpdy','IDviN','YxDpR','TfRrd','UzmXR','xdBTz','xRUrR','split','EGzwy','Irmzb','xKTIN','kwFlg','log','readFileSync','/dev/stdin','oRWyV','dMcFv','while\\x20(true)\\x20{}','counter','length','action','ryCis','PemES','QUBse','Ezmas','constructor','srdZA','XVdnm','Jxbhu','eKRZn','ULqEF','PzYeU','mdzeg','ojyxe','COErt','haibi','call','qdVER','stateObject','YotLT','gifXE'];a0_0x18a9=function(){return _0x51e27f;};return a0_0x18a9();}var a0_0x2623a7=a0_0x3c6f;function Main(_0xde9d59){var _0x28e842=a0_0x3c6f;var _0x1fd524={'hAZfG':_0x28e842(0x0),'cvvBC':_0x28e842(0x1),'YsDqU':function(_0x3ea4cf,_0x185b82){return _0x3ea4cf+_0x185b82;},'UkJEl':function(_0x5b64b9,_0x5d9ee1){return _0x5b64b9===_0x5d9ee1;},'gpYMe':_0x28e842(0x2),'YBtFG':_0x28e842(0x3),'cBSZn':'(((.+)+)+)+$','PZeLh':_0x28e842(0x4),'qkDZk':_0x28e842(0x5),'AidHQ':'ezryC','RirNN':_0x28e842(0x6),'ptGZn':function(_0x53942f,_0x51793e){return _0x53942f!==_0x51793e;},'UwEaC':_0x28e842(0x7),'LXVhx':_0x28e842(0x8),'KYqRV':_0x28e842(0x9),'vVfdE':function(_0x40eff3,_0x409118){return _0x40eff3(_0x409118);},'OKyfj':_0x28e842(0xa),'aqaXQ':_0x28e842(0xb),'fIqIe':'HIvKJ','LTDRJ':function(_0x506dd5,_0x24d858){return _0x506dd5(_0x24d858);},'UzmXR':function(_0x3fbde6,_0x5b6c76){return _0x3fbde6!==_0x5b6c76;},'xdBTz':_0x28e842(0xc),'ZqBFi':function(_0x23c45b){return _0x23c45b();},'STIYU':function(_0x4b3a49,_0x4f05bb){return _0x4b3a49+_0x4f05bb;},'ajvQr':_0x28e842(0xd),'YYfkr':function(_0x3030f0,_0x185966){return _0x3030f0+_0x185966;},'EFfVG':function(_0x4a0014,_0xd09cdc,_0x31441b){return _0x4a0014(_0xd09cdc,_0x31441b);},'EGzwy':function(_0x14e183,_0x5b7d27){return _0x14e183<_0x5b7d27;},'Irmzb':function(_0x472cdf,_0x10c696){return _0x472cdf!==_0x10c696;},'hDQZL':_0x28e842(0xe),'xKTIN':function(_0x5471cf,_0x10cec6){return _0x5471cf!=_0x10cec6;},'kwFlg':_0x28e842(0xf)};var _0x9ba5cb=(function(){var _0x455a7c=a0_0x3c6f;var _0x58e02f={'SYpyg':function(_0x33c4fb,_0x1e0570){var _0x138d6b=a0_0x3c6f;return _0x1fd524[_0x138d6b(0x10)](_0x33c4fb,_0x1e0570);}};if(_0x1fd524['UkJEl'](_0x455a7c(0x11),'mcobk')){var _0x53dee0=!![];return function(_0xfad335,_0xc97c0b){var _0x992f65=a0_0x3c6f;var _0x3471f1={'rBbvD':function(_0x33fa27,_0x261c52){return _0x33fa27!==_0x261c52;},'mLbjH':_0x1fd524[_0x992f65(0x12)],'WvseG':_0x1fd524['cvvBC']};var _0x3eb57f=_0x53dee0?function(){var _0x400e94=a0_0x3c6f;if(_0x3471f1[_0x400e94(0x13)](_0x3471f1['mLbjH'],_0x3471f1['WvseG'])){if(_0xc97c0b){var _0x3d8395=_0xc97c0b[_0x400e94(0x14)](_0xfad335,arguments);_0xc97c0b=null;return _0x3d8395;}}else{return _0x3c57ca;}}:function(){};_0x53dee0=![];return _0x3eb57f;};}else{if(_0x4a470d[_0x5b4c2d]!=_0x77ce80[_0xab6215]){_0x2b5b06=_0x58e02f[_0x455a7c(0x15)](_0x55d45e,0x1);}else{}}}());var _0x4ff190=_0x1fd524[_0x28e842(0x16)](_0x9ba5cb,this,function(){var _0xa774dd=a0_0x3c6f;if(_0x1fd524[_0xa774dd(0x17)]!==_0x1fd524[_0xa774dd(0x18)]){return _0x4ff190[_0xa774dd(0x19)]()[_0xa774dd(0x1a)](_0x1fd524['cBSZn'])[_0xa774dd(0x19)]()['constructor'](_0x4ff190)[_0xa774dd(0x1a)](_0xa774dd(0x1b));}else{return![];}});_0x1fd524[_0x28e842(0x1c)](_0x4ff190);var _0xa8639d=(function(){var _0x3df624=a0_0x3c6f;var _0x2d20fb={'IqOWE':_0x1fd524[_0x3df624(0x1d)],'dixOT':_0x1fd524[_0x3df624(0x1e)],'GgOnP':_0x1fd524[_0x3df624(0x1f)],'ZBfiJ':_0x1fd524['RirNN']};var _0x3a5c84=!![];return function(_0x5c298d,_0x14a8ef){var _0x35b418=a0_0x3c6f;if(_0x2d20fb[_0x35b418(0x20)]===_0x2d20fb['ZBfiJ']){_0x2cb556=_0xc6e527+0x1;}else{var _0x2d6bec=_0x3a5c84?function(){var _0x4c1cf2=a0_0x3c6f;if(_0x14a8ef){if(_0x2d20fb[_0x4c1cf2(0x21)]!==_0x2d20fb[_0x4c1cf2(0x22)]){var _0x580599=_0x14a8ef['apply'](_0x5c298d,arguments);_0x14a8ef=null;return _0x580599;}else{if(_0x5ac040){var _0x1c7bf2=_0x26263c[_0x4c1cf2(0x14)](_0x509be2,arguments);_0x222854=null;return _0x1c7bf2;}}}}:function(){};_0x3a5c84=![];return _0x2d6bec;}};}());(function(){var _0x551fdc=a0_0x3c6f;var _0x25afd2={'cGmnG':function(_0x1fb45a,_0x4e9193){return _0x1fb45a(_0x4e9193);},'xyiUu':_0x1fd524['OKyfj'],'Kfpdy':function(_0x28117d,_0x4ad497){return _0x1fd524['STIYU'](_0x28117d,_0x4ad497);},'IDviN':_0x1fd524[_0x551fdc(0x23)],'YxDpR':function(_0x3fa8ab,_0x22a148){return _0x1fd524['YYfkr'](_0x3fa8ab,_0x22a148);},'TfRrd':_0x1fd524['aqaXQ'],'rxnWt':function(_0x3e3260){return _0x3e3260();}};_0x1fd524[_0x551fdc(0x16)](_0xa8639d,this,function(){var _0x377b58=a0_0x3c6f;if(_0x1fd524[_0x377b58(0x24)]('cPfkw',_0x1fd524[_0x377b58(0x25)])){if(_0x4caee1){return _0x3591a0;}else{_0x483580(0x0);}}else{var _0x3f643a=new RegExp(_0x1fd524[_0x377b58(0x26)]);var _0x590328=new RegExp(_0x1fd524[_0x377b58(0x27)],'i');var _0xdb926e=_0x1fd524[_0x377b58(0x28)](_0x291a8e,_0x1fd524[_0x377b58(0x29)]);if(!_0x3f643a[_0x377b58(0x2a)](_0xdb926e+_0x377b58(0xd))||!_0x590328[_0x377b58(0x2a)](_0x1fd524[_0x377b58(0x10)](_0xdb926e,_0x1fd524[_0x377b58(0x2b)]))){if(_0x1fd524[_0x377b58(0x24)](_0x377b58(0x2c),_0x1fd524[_0x377b58(0x2d)])){_0x1fd524['LTDRJ'](_0xdb926e,'0');}else{var _0x540fb8=new _0x206301(_0x377b58(0x8));var _0x200078=new _0x78873c(_0x377b58(0x9),'i');var _0x1112a7=GmtcpA['cGmnG'](_0x3efb1b,GmtcpA[_0x377b58(0x2e)]);if(!_0x540fb8[_0x377b58(0x2a)](GmtcpA[_0x377b58(0x2f)](_0x1112a7,GmtcpA[_0x377b58(0x30)]))||!_0x200078[_0x377b58(0x2a)](GmtcpA[_0x377b58(0x31)](_0x1112a7,GmtcpA[_0x377b58(0x32)]))){_0x1112a7('0');}else{GmtcpA['rxnWt'](_0x2b7d05);}}}else{if(_0x1fd524[_0x377b58(0x33)](_0x1fd524[_0x377b58(0x34)],_0x377b58(0x35))){_0x1fd524[_0x377b58(0x1c)](_0x291a8e);}else{var _0xa0bbb7=_0x34d34c[_0x377b58(0x14)](_0x21f6c1,arguments);_0x24088f=null;return _0xa0bbb7;}}}})();}());_0xde9d59=_0xde9d59[_0x28e842(0x36)]('\\x0a');t=_0xde9d59[0x0][_0x28e842(0x36)]('');s=_0xde9d59[0x1][_0x28e842(0x36)]('');var _0x12e3e8=0x0;for(var _0x13e08a=0x0;_0x1fd524[_0x28e842(0x37)](_0x13e08a,s['length']);_0x13e08a++){if(_0x1fd524[_0x28e842(0x38)]('pKDvn',_0x1fd524['hDQZL'])){var _0x5c3ae0=_0x540c1a[_0x28e842(0x14)](_0x376dcd,arguments);_0x2c039b=null;return _0x5c3ae0;}else{if(_0x1fd524[_0x28e842(0x39)](s[_0x13e08a],t[_0x13e08a])){if(_0x1fd524[_0x28e842(0x3a)]!==_0x1fd524[_0x28e842(0x3a)]){return!![];}else{_0x12e3e8=_0x12e3e8+0x1;}}else{}}}console[_0x28e842(0x3b)](_0x12e3e8);}Main(require('fs')[a0_0x2623a7(0x3c)](a0_0x2623a7(0x3d),'utf8'));function _0x291a8e(_0x456c1d){var _0x46ab9e=a0_0x3c6f;var _0x11857f={'eKRZn':function(_0x4c5797,_0x4101f6){return _0x4c5797!==_0x4101f6;},'feEEN':_0x46ab9e(0x3e),'ryCis':function(_0x188a36){return _0x188a36();},'PemES':_0x46ab9e(0x3f),'uBEzo':_0x46ab9e(0x1b),'QUBse':function(_0x4c6317,_0x47c3b3){return _0x4c6317===_0x47c3b3;},'UFVfu':'string','srdZA':_0x46ab9e(0x40),'XVdnm':_0x46ab9e(0x41),'Jxbhu':'WYxoV','qdVER':function(_0x449407,_0x2c1cf7){return _0x449407+_0x2c1cf7;},'XchTd':_0x46ab9e(0x42),'ULqEF':function(_0x5dae45,_0x3c787a){return _0x5dae45%_0x3c787a;},'COErt':'debu','haibi':'gger','DKBBk':_0x46ab9e(0x43),'gifXE':function(_0x1deca8,_0x4866fd){return _0x1deca8(_0x4866fd);}};function _0x2ff487(_0x1bbcfb){var _0x513f99=a0_0x3c6f;var _0x106a1b={'ojyxe':function(_0x19485d){var _0xa5e026=a0_0x3c6f;return _0x11857f[_0xa5e026(0x44)](_0x19485d);},'PzYeU':function(_0x383510,_0x1a9191){return _0x383510!==_0x1a9191;},'mdzeg':_0x11857f[_0x513f99(0x45)],'YotLT':_0x11857f['uBEzo']};if(_0x11857f[_0x513f99(0x46)](typeof _0x1bbcfb,_0x11857f['UFVfu'])){if('Ezmas'===_0x513f99(0x47)){return function(_0x3c415c){}[_0x513f99(0x48)](_0x11857f[_0x513f99(0x49)])[_0x513f99(0x14)](_0x11857f[_0x513f99(0x4a)]);}else{_0x5fac4e(0x0);}}else{if(_0x11857f[_0x513f99(0x4b)]===_0x11857f[_0x513f99(0x4b)]){if(_0x11857f[_0x513f99(0x4c)](_0x11857f['qdVER']('',_0x1bbcfb/_0x1bbcfb)[_0x11857f['XchTd']],0x1)||_0x11857f[_0x513f99(0x46)](_0x11857f[_0x513f99(0x4d)](_0x1bbcfb,0x14),0x0)){(function(){var _0x51a2ab=a0_0x3c6f;if(_0x106a1b[_0x51a2ab(0x4e)](_0x106a1b[_0x51a2ab(0x4f)],'dMcFv')){_0x106a1b[_0x51a2ab(0x50)](_0x1fe82d);}else{return!![];}}['constructor'](_0x11857f[_0x513f99(0x51)]+_0x11857f[_0x513f99(0x52)])[_0x513f99(0x53)](_0x11857f['DKBBk']));}else{(function(){var _0x5ea3c8=a0_0x3c6f;if(_0x11857f[_0x5ea3c8(0x4c)](_0x11857f['feEEN'],_0x5ea3c8(0x3e))){var _0x10c557=_0x347661?function(){var _0x34a1fa=a0_0x3c6f;if(_0x565a43){var _0x4da60b=_0x25a614[_0x34a1fa(0x14)](_0x4b6c9b,arguments);_0x4c9ab1=null;return _0x4da60b;}}:function(){};_0x3d050a=![];return _0x10c557;}else{return![];}}[_0x513f99(0x48)](_0x11857f[_0x513f99(0x54)](_0x11857f[_0x513f99(0x51)],_0x11857f['haibi']))[_0x513f99(0x14)](_0x513f99(0x55)));}}else{return _0x3ff8e5[_0x513f99(0x19)]()[_0x513f99(0x1a)](_0x106a1b[_0x513f99(0x56)])[_0x513f99(0x19)]()['constructor'](_0x2bead7)[_0x513f99(0x1a)](_0x106a1b['YotLT']);}}_0x11857f['gifXE'](_0x2ff487,++_0x1bbcfb);}try{if(_0x456c1d){return _0x2ff487;}else{_0x11857f[_0x46ab9e(0x57)](_0x2ff487,0x0);}}catch(_0x5a63e7){}}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_7 = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Example obfuscated JavaScript code:
```javascript
var a0_0x4bf474=a0_0x4522;function a0_0x4522(_0x3689f8,_0x5460d6){var _0x58c734=a0_0x5c41();a0_0x4522=function(_0x423e9b,_0x9f0dd6){_0x423e9b=_0x423e9b-0x171;var _0x1f541d=_0x58c734[_0x423e9b];return _0x1f541d;};return a0_0x4522(_0x3689f8,_0x5460d6);}(function(_0x154f85,_0x47e517){var _0x1ff76b=a0_0x4522;var _0xff058d=_0x154f85();while(!![]){try{var _0x3015f7=-parseInt(_0x1ff76b(0x193))/0x1+-parseInt(_0x1ff76b(0x183))/0x2*(-parseInt(_0x1ff76b(0x18d))/0x3)+parseInt(_0x1ff76b(0x171))/0x4+parseInt(_0x1ff76b(0x18b))/0x5+-parseInt(_0x1ff76b(0x1a7))/0x6*(parseInt(_0x1ff76b(0x1d5))/0x7)+-parseInt(_0x1ff76b(0x194))/0x8+parseInt(_0x1ff76b(0x191))/0x9;if(_0x3015f7===_0x47e517){break;}else{_0xff058d['push'](_0xff058d['shift']());}}catch(_0x30ef1b){_0xff058d['push'](_0xff058d['shift']());}}}(a0_0x5c41,0x5e8d4));function Main(_0x31e1a9){var _0x5ec6e1=a0_0x4522;var _0x3038dc={'lIdaJ':function(_0x33bd27,_0x47b09a){return _0x33bd27+_0x47b09a;},'TFlJB':_0x5ec6e1(0x17e),'ANtrE':'vQove','iBYEZ':'(((.+)+)+)+$','YLVja':function(_0x5e9123,_0x2e4103){return _0x5e9123+_0x2e4103;},'ruMSC':function(_0x13eda9){return _0x13eda9();},'ngkyg':'vthnb','prykT':_0x5ec6e1(0x178),'WdZkj':function(_0x4a49fe,_0x12e2e5){return _0x4a49fe(_0x12e2e5);},'HiynQ':function(_0x4121b6,_0x4483e3){return _0x4121b6+_0x4483e3;},'Orhwo':_0x5ec6e1(0x1c4),'SvgXL':_0x5ec6e1(0x1b8),'QiAiA':function(_0x5a70d3,_0x2b4906){return _0x5a70d3!==_0x2b4906;},'cRSxQ':_0x5ec6e1(0x1d9),'Rszqj':function(_0x4b0c75,_0xfc1513,_0x489e1b){return _0x4b0c75(_0xfc1513,_0x489e1b);},'YBolQ':function(_0x23183e,_0x1afffe,_0xad9716){return _0x23183e(_0x1afffe,_0xad9716);},'wLKPV':function(_0x36f9db,_0x3bf726){return _0x36f9db<_0x3bf726;},'eprrT':function(_0x249c40,_0x3fd8ad){return _0x249c40!=_0x3fd8ad;}};var _0x1ffa0f=(function(){var _0xe682d9=_0x5ec6e1;var _0x3f3e64={'ofqzT':function(_0x42e98a,_0x5397b7){return _0x42e98a!==_0x5397b7;},'EPcMA':_0x3038dc[_0xe682d9(0x1d6)],'ruPmK':_0x3038dc[_0xe682d9(0x1d1)],'RWuYk':_0xe682d9(0x1c9)};var _0x4a45f8=!![];return function(_0x296f5a,_0x27e2c2){var _0x14587d={'VQuRk':function(_0x11462a,_0x13eed8){var _0x147a2e=a0_0x4522;return _0x3038dc[_0x147a2e(0x1d7)](_0x11462a,_0x13eed8);}};var _0x28468c=_0x4a45f8?function(){var _0x5578ae=a0_0x4522;if(_0x3f3e64[_0x5578ae(0x17b)](_0x3f3e64['EPcMA'],_0x3f3e64[_0x5578ae(0x17a)])){if(_0x27e2c2){if(_0x3f3e64[_0x5578ae(0x17b)](_0x3f3e64['RWuYk'],_0x3f3e64[_0x5578ae(0x18c)])){_0x4d6e1f=_0x14587d[_0x5578ae(0x1da)](_0x50ee96,0x1);}else{var _0x393e9c=_0x27e2c2[_0x5578ae(0x1d2)](_0x296f5a,arguments);_0x27e2c2=null;return _0x393e9c;}}}else{return _0x104e75;}}:function(){};_0x4a45f8=![];return _0x28468c;};}());var _0x3191e3=_0x3038dc[_0x5ec6e1(0x1cd)](_0x1ffa0f,this,function(){var _0x43e3cf=_0x5ec6e1;return _0x3191e3[_0x43e3cf(0x176)]()['search'](_0x3038dc[_0x43e3cf(0x1be)])[_0x43e3cf(0x176)]()[_0x43e3cf(0x18e)](_0x3191e3)['search'](_0x3038dc[_0x43e3cf(0x1be)]);});_0x3038dc['ruMSC'](_0x3191e3);var _0x2cb36f=(function(){var _0x183fa4=!![];return function(_0x4ba2a3,_0x500a44){var _0x8ebe48=_0x183fa4?function(){if(_0x500a44){var _0x3f4dd1=_0x500a44['apply'](_0x4ba2a3,arguments);_0x500a44=null;return _0x3f4dd1;}}:function(){};_0x183fa4=![];return _0x8ebe48;};}());(function(){var _0x19b74c=_0x5ec6e1;var _0x1875ff={'QqeOQ':function(_0x4d59ac,_0x451a51){return _0x4d59ac!=_0x451a51;},'qBFXn':function(_0x2e60dd,_0x5ecacd){var _0x4e8724=a0_0x4522;return _0x3038dc[_0x4e8724(0x1b4)](_0x2e60dd,_0x5ecacd);},'NvldZ':function(_0x560849){return _0x3038dc['ruMSC'](_0x560849);},'ZqbqS':function(_0x3827db,_0x223fdc){return _0x3827db===_0x223fdc;},'NyfMH':_0x3038dc[_0x19b74c(0x1b5)],'ZLxkc':'jjsdH','upjOc':_0x3038dc[_0x19b74c(0x1ae)],'ARVXw':function(_0x579a08,_0x4ea8d2){var _0x53a321=_0x19b74c;return _0x3038dc[_0x53a321(0x186)](_0x579a08,_0x4ea8d2);},'ctLYW':'init','Aliwv':function(_0x33cf8a,_0x2caa2b){var _0x160806=_0x19b74c;return _0x3038dc[_0x160806(0x19b)](_0x33cf8a,_0x2caa2b);},'TIOiO':_0x3038dc[_0x19b74c(0x1cf)],'kEWDx':_0x3038dc[_0x19b74c(0x19f)],'HOlnF':function(_0x589b16,_0x143ae6){var _0xf6b90d=_0x19b74c;return _0x3038dc[_0xf6b90d(0x199)](_0x589b16,_0x143ae6);},'sfCun':function(_0xc2491a,_0x3c1df3){return _0xc2491a===_0x3c1df3;},'FZdlM':_0x3038dc[_0x19b74c(0x190)]};_0x3038dc[_0x19b74c(0x181)](_0x2cb36f,this,function(){var _0x2f605f=_0x19b74c;var _0x513b3b={'Rraeg':function(_0x2e8fc9,_0x3bb98a){return _0x1875ff['QqeOQ'](_0x2e8fc9,_0x3bb98a);},'jPbxN':function(_0x41f5c0,_0x1c5a22){var _0x45d7e3=a0_0x4522;return _0x1875ff[_0x45d7e3(0x198)](_0x41f5c0,_0x1c5a22);},'dgxuM':function(_0x426927){var _0x38aa3f=a0_0x4522;return _0x1875ff[_0x38aa3f(0x174)](_0x426927);}};if(_0x1875ff[_0x2f605f(0x1a9)](_0x1875ff[_0x2f605f(0x189)],_0x1875ff[_0x2f605f(0x19d)])){if(_0x513b3b['Rraeg'](_0x3c9930[_0xac0d91],_0x5afcea[_0xc5914c])){_0x7a424f=_0x513b3b[_0x2f605f(0x1a3)](_0x4b871e,0x1);}else{}}else{var _0x4b1507=new RegExp(_0x2f605f(0x1a8));var _0x1372d8=new RegExp(_0x1875ff[_0x2f605f(0x1ac)],'i');var _0x49f7bf=_0x1875ff[_0x2f605f(0x1ce)](_0x423e9b,_0x1875ff[_0x2f605f(0x17d)]);if(!_0x4b1507[_0x2f605f(0x18a)](_0x1875ff[_0x2f605f(0x19a)](_0x49f7bf,_0x1875ff[_0x2f605f(0x17c)]))||!_0x1372d8[_0x2f605f(0x18a)](_0x1875ff[_0x2f605f(0x198)](_0x49f7bf,_0x1875ff[_0x2f605f(0x1a1)]))){if(_0x1875ff[_0x2f605f(0x1b6)]('jtVuX',_0x2f605f(0x1c0))){_0x1875ff[_0x2f605f(0x1ce)](_0x49f7bf,'0');}else{return!![];}}else{if(_0x1875ff[_0x2f605f(0x1b0)](_0x1875ff[_0x2f605f(0x19c)],'hsnwO')){_0x423e9b();}else{gXrHpC['dgxuM'](_0x25ac23);}}}})();}());_0x31e1a9=_0x31e1a9['split']('\\x0a');t=_0x31e1a9[0x0]['split']('');s=_0x31e1a9[0x1][_0x5ec6e1(0x1d0)]('');var _0x8706d3=0x0;for(var _0x5381f7=0x0;_0x3038dc['wLKPV'](_0x5381f7,s[_0x5ec6e1(0x1ca)]);_0x5381f7++){if(_0x3038dc[_0x5ec6e1(0x1b9)](s[_0x5381f7],t[_0x5381f7])){_0x8706d3=_0x8706d3+0x1;}else{}}console['log'](_0x8706d3);}Main(require('fs')['readFileSync'](a0_0x4bf474(0x1c5),'utf8'));function _0x423e9b(_0x3727ea){var _0x430b85=a0_0x4bf474;var _0x19ae7a={'VXoqQ':_0x430b85(0x1c8),'VcbOi':_0x430b85(0x1c1),'qvSAD':function(_0x43484e,_0x3c88b4){return _0x43484e===_0x3c88b4;},'ZEKjv':'WmYnf','MGegL':_0x430b85(0x1af),'NCeJH':_0x430b85(0x178),'QQImQ':function(_0xcaadf9,_0x4e83fe){return _0xcaadf9(_0x4e83fe);},'XhqZt':_0x430b85(0x1a0),'ThGaY':function(_0x4c1ae3,_0x2798fd){return _0x4c1ae3+_0x2798fd;},'jwxrS':_0x430b85(0x1c4),'RXzXN':function(_0x242df3,_0x33952c,_0x1cb836){return _0x242df3(_0x33952c,_0x1cb836);},'kdoBG':_0x430b85(0x195),'IAAQJ':function(_0x125c88,_0x2b5c71){return _0x125c88!==_0x2b5c71;},'qcmOB':'XWoEF','LYdtG':_0x430b85(0x179),'sSirF':_0x430b85(0x1db),'keXyQ':function(_0x57ddb4,_0x3ca9ed){return _0x57ddb4/_0x3ca9ed;},'vNtRf':'length','THlKr':function(_0x1cac9a,_0x38e1e1){return _0x1cac9a===_0x38e1e1;},'UpUHr':function(_0x24a7e2,_0x2e65cb){return _0x24a7e2%_0x2e65cb;},'aIKOj':_0x430b85(0x1ba),'oGjnJ':function(_0x4d1840,_0x221ee4){return _0x4d1840+_0x221ee4;},'Zeqag':_0x430b85(0x180),'QLKcV':_0x430b85(0x1b7),'DJJBI':_0x430b85(0x173),'OKuXM':function(_0x511aac,_0x34a212){return _0x511aac(_0x34a212);},'Gpqne':_0x430b85(0x1bb),'rhnhZ':function(_0x2df520,_0x16893d){return _0x2df520!==_0x16893d;},'vwkaQ':_0x430b85(0x1c6),'GrXtp':_0x430b85(0x1dc)};function _0x5be1c5(_0x1a313e){var _0x1d7513=_0x430b85;var _0x397d36={'kUeee':_0x19ae7a[_0x1d7513(0x1c7)],'mTvvq':function(_0x145787,_0x48b5d1){var _0x337ec2=_0x1d7513;return _0x19ae7a[_0x337ec2(0x1a5)](_0x145787,_0x48b5d1);},'MSSJp':_0x19ae7a['XhqZt'],'iqSNz':function(_0x17b3a5,_0x4bcbce){var _0x1eb05a=_0x1d7513;return _0x19ae7a[_0x1eb05a(0x1c2)](_0x17b3a5,_0x4bcbce);},'wCIUH':_0x19ae7a[_0x1d7513(0x188)],'cvAal':'input','hrHFt':function(_0x3e9d4f){return _0x3e9d4f();},'oPzkw':function(_0x58c422,_0x262784,_0x3c880e){var _0x234292=_0x1d7513;return _0x19ae7a[_0x234292(0x1b3)](_0x58c422,_0x262784,_0x3c880e);},'qaFjW':_0x19ae7a[_0x1d7513(0x197)]};if(_0x19ae7a['IAAQJ'](_0x19ae7a[_0x1d7513(0x177)],_0x19ae7a[_0x1d7513(0x177)])){_0x486220(0x0);}else{if(_0x19ae7a[_0x1d7513(0x1aa)](typeof _0x1a313e,_0x19ae7a[_0x1d7513(0x17f)])){if(_0x19ae7a[_0x1d7513(0x1d8)]!==_0x19ae7a[_0x1d7513(0x1d8)]){_0x397d36['oPzkw'](_0x574b93,this,function(){var _0x7c699f=_0x1d7513;var _0x149304=new _0x2cadc6('function\\x20*\\x5c(\\x20*\\x5c)');var _0x31b7c1=new _0x36fb6a(_0x397d36[_0x7c699f(0x184)],'i');var _0x9f6864=_0x397d36[_0x7c699f(0x192)](_0x5e5f17,_0x397d36[_0x7c699f(0x19e)]);if(!_0x149304[_0x7c699f(0x18a)](_0x397d36[_0x7c699f(0x1ab)](_0x9f6864,_0x397d36[_0x7c699f(0x1d4)]))||!_0x31b7c1[_0x7c699f(0x18a)](_0x9f6864+_0x397d36['cvAal'])){_0x397d36[_0x7c699f(0x192)](_0x9f6864,'0');}else{_0x397d36[_0x7c699f(0x1cc)](_0x95e101);}})();}else{return function(_0x5e2c85){}[_0x1d7513(0x18e)](_0x1d7513(0x1c8))[_0x1d7513(0x1d2)](_0x1d7513(0x1c1));}}else{if(_0x19ae7a['IAAQJ']('XuIQg',_0x1d7513(0x196))){return function(_0x43104b){}['constructor'](_0x19ae7a[_0x1d7513(0x1d3)])['apply'](_0x19ae7a['VcbOi']);}else{if(_0x19ae7a[_0x1d7513(0x1ad)](_0x19ae7a[_0x1d7513(0x1c2)]('',_0x19ae7a[_0x1d7513(0x1a4)](_0x1a313e,_0x1a313e))[_0x19ae7a[_0x1d7513(0x172)]],0x1)||_0x19ae7a['THlKr'](_0x19ae7a[_0x1d7513(0x1bc)](_0x1a313e,0x14),0x0)){if(_0x19ae7a[_0x1d7513(0x1ad)](_0x19ae7a[_0x1d7513(0x1bd)],_0x19ae7a[_0x1d7513(0x1bd)])){var _0x3652ad=_0x1feb82?function(){var _0x5d12e2=_0x1d7513;if(_0x21b547){var _0x1dbd9b=_0x479c87[_0x5d12e2(0x1d2)](_0xad72b1,arguments);_0x5578ab=null;return _0x1dbd9b;}}:function(){};_0x5c7921=![];return _0x3652ad;}else{(function(){var _0x2c6c14=_0x1d7513;if(_0x19ae7a[_0x2c6c14(0x1aa)](_0x19ae7a[_0x2c6c14(0x185)],_0x19ae7a[_0x2c6c14(0x1c3)])){var _0xc84d31=_0x46b7f9[_0x2c6c14(0x1d2)](_0x190398,arguments);_0x1e6a3c=null;return _0xc84d31;}else{return!![];}}[_0x1d7513(0x18e)](_0x19ae7a[_0x1d7513(0x1b1)]('debu',_0x19ae7a[_0x1d7513(0x187)]))[_0x1d7513(0x1a6)](_0x19ae7a[_0x1d7513(0x182)]));}}else{(function(){var _0x2bc13a=_0x1d7513;if(_0x2bc13a(0x195)!==_0x397d36[_0x2bc13a(0x1b2)]){return![];}else{return![];}}[_0x1d7513(0x18e)](_0x1d7513(0x1bb)+_0x19ae7a[_0x1d7513(0x187)])[_0x1d7513(0x1d2)](_0x19ae7a[_0x1d7513(0x1a2)]));}}}_0x19ae7a[_0x1d7513(0x1bf)](_0x5be1c5,++_0x1a313e);}}try{if(_0x19ae7a['rhnhZ'](_0x19ae7a[_0x430b85(0x18f)],_0x19ae7a[_0x430b85(0x1cb)])){if(_0x3727ea){return _0x5be1c5;}else{_0x19ae7a['QQImQ'](_0x5be1c5,0x0);}}else{(function(){return!![];}[_0x430b85(0x18e)](_0x19ae7a['oGjnJ'](_0x19ae7a[_0x430b85(0x175)],_0x19ae7a[_0x430b85(0x187)]))['call'](_0x430b85(0x1b7)));}}catch(_0xe5c7fd){}}function a0_0x5c41(){var _0x741f93=['ruPmK','ofqzT','TIOiO','ctLYW','bBLCt','LYdtG','gger','Rszqj','QLKcV','99742MzfOfY','kUeee','ZEKjv','WdZkj','Zeqag','jwxrS','NyfMH','test','521840rVbLpN','RWuYk','15vaeTyu','constructor','vwkaQ','cRSxQ','7640883VDoRYt','mTvvq','324409dPbmpL','4902400nNBSlU','MLOGP','XuIQg','kdoBG','qBFXn','QiAiA','Aliwv','HiynQ','FZdlM','ZLxkc','MSSJp','SvgXL','init','kEWDx','DJJBI','jPbxN','keXyQ','QQImQ','call','12IGWtQo','function\\x20*\\x5c(\\x20*\\x5c)','ZqbqS','qvSAD','iqSNz','upjOc','IAAQJ','prykT','RyuJd','sfCun','oGjnJ','qaFjW','RXzXN','YLVja','ngkyg','HOlnF','action','input','eprrT','wtdqb','debu','UpUHr','aIKOj','iBYEZ','OKuXM','ixPgG','counter','ThGaY','MGegL','chain','/dev/stdin','mPKCX','NCeJH','while\\x20(true)\\x20{}','AOSTf','length','GrXtp','hrHFt','YBolQ','ARVXw','Orhwo','split','ANtrE','apply','VXoqQ','wCIUH','515263aVMBJV','TFlJB','lIdaJ','sSirF','hsnwO','VQuRk','EpfgM','yZopC','1076004ymYqOn','vNtRf','stateObject','NvldZ','Gpqne','toString','qcmOB','\\x5c+\\x5c+\\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','string'];a0_0x5c41=function(){return _0x741f93;};return a0_0x5c41();}
```

Example deobfuscated JavaScript code:
```javascript
function Main(input) {\n\tinput = input.split(\"\\n\");\n\tt = input[0].split(\"\");\n\ts = input[1].split(\"\");\n\t\n\tvar result = 0\n\tfor (var i = 0; i < s.length; i++) {\n\tif  (s[i] != t[i]) {\n\tresult = result + 1;\n\t} else {\n\t}\n\t}\n\t\n\tconsole.log(result);\n\t}\nMain(require(\"fs\").readFileSync(\"/dev/stdin\", \"utf8\"));
```
"""

PROMPT_TEMPLATE_ZEROSHOT = """Imagine you are a skilled JavaScript developer, skilled in code obfuscation and reverse engineering. I will provide you with an obfuscated JavaScript code, and your task is to output the deobfuscated code, wrapped in three backticks (```)

Input obfuscated JavaScript code:
```javascript
{obfuscated_code}
```

Output deobfuscated JavaScript code:
"""

PROMPT_TEMPLATE_ONESHOT = """
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

PROMPT_TEMPLATE_ONESHOT_EXAMPLES = {
    "code-compact": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_code_compact,
    "debug-protection": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_debug_protection,
    "name-obfuscation": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_name_obfuscation,
    "string-obfuscation": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_string_obfuscation,
    "self-defending": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_self_defending,
    "control-flow-flattening": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_control_flow_flattening,
    "deadcode-injection": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_deadcode_injection,
    "1-2": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_2,
    "1-3": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_3,
    "1-4": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_4,
    "1-5": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_5,
    "1-6": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_6,
    "1-7": PROMPT_TEMPLATE_ONESHOT_EXAMPLE_1_7,
}

def generate_prompt(obfuscated_code, template="oneshot", example=None):
    prompt_template = template_dict[template]
    if template=="oneshot":
        assert example in PROMPT_TEMPLATE_ONESHOT_EXAMPLES, "[!] In oneshot mode, example must be one of {}".format(PROMPT_TEMPLATE_ONESHOT_EXAMPLES.keys())
        return PROMPT_TEMPLATE_ONESHOT_EXAMPLES[example] + prompt_template.format(obfuscated_code=obfuscated_code)
    return prompt_template.format(obfuscated_code=obfuscated_code)