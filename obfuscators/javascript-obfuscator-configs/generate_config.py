import os
import json
from itertools import combinations

default_config_template = {
    'compact': False,
    'controlFlowFlattening': False,
    'controlFlowFlatteningThreshold': 0.75,
    'deadCodeInjection': False,
    'deadCodeInjectionThreshold': 0.4,
    'debugProtection': False,
    'debugProtectionInterval': 0,
    'disableConsoleOutput': False,
    'domainLock': [],
    'domainLockRedirectUrl': 'about:blank',
    'forceTransformStrings': [],
    'identifierNamesCache': None,
    'identifierNamesGenerator': 'keep-original',
    'identifiersDictionary': [],
    'identifiersPrefix': '',
    'ignoreImports': False,
    'inputFileName': '',
    'log': False,
    'numbersToExpressions': False,
    'optionsPreset': 'default',
    'renameGlobals': False,
    'renameProperties': False,
    'renamePropertiesMode': 'safe',
    'reservedNames': [],
    'reservedStrings': [],
    'seed': 0,
    'selfDefending': False,
    'simplify': False,
    'sourceMap': False,
    'sourceMapBaseUrl': '',
    'sourceMapFileName': '',
    'sourceMapMode': 'separate',
    'sourceMapSourcesMode': 'sources-content',
    'splitStrings': False,
    'splitStringsChunkLength': 10,
    'stringArray': False,
    'stringArrayCallsTransform': False,
    'stringArrayCallsTransformThreshold': 0.5,
    'stringArrayEncoding': [],
    'stringArrayIndexesType': ['hexadecimal-number'],
    'stringArrayIndexShift': False,
    'stringArrayRotate': False,
    'stringArrayShuffle': False,
    'stringArrayWrappersCount': 1,
    'stringArrayWrappersChainedCalls': False,
    'stringArrayWrappersParametersMaxCount': 2,
    'stringArrayWrappersType': 'variable',
    'stringArrayThreshold': 0.75,
    'target': 'node',
    'transformObjectKeys': False,
    'unicodeEscapeSequence': False
}

code_compact = {
    "compact": True,
}
dubug_protection = {
    "debugProtection": True,
}
name_obfuscation = {
    "identifierNamesGenerator": "hexadecimal",
}
self_defending = {
    "selfDefending": True,
}
control_flow_flattening = {
    "controlFlowFlattening": True,
}
deadcode_injection = {
    "deadCodeInjection": True,
}
string_obfuscation = {
    "stringArray": True,
    "stringArrayIndexShift": True,
    "stringArrayRotate": True,
    "stringArrayShuffle": True,
    "stringArrayWrappersChainedCalls": True,
}

NAMES = {
    1: "code_compact",
    2: "dubug_protection",
    3: "name_obfuscation",
    4: "self_defending",
    5: "control_flow_flattening",
    6: "deadcode_injection",
    7: "string_obfuscation",
}

CHOICES = {
    1: code_compact,
    2: dubug_protection,
    3: name_obfuscation,
    4: self_defending,
    5: control_flow_flattening,
    6: deadcode_injection,
    7: string_obfuscation,
}

# generate single transformation configs
for n in range(1,8):
    name = NAMES[n].replace('_','-')
    real_options = default_config_template.copy()
    real_options.update(CHOICES[n])
    save_to = f"./{name}.json"
    print(save_to)
    with open(save_to,"w") as f:
        json.dump(real_options,f,indent=4)

details_csv = "./details.csv"
if os.path.exists(details_csv):
    if input(f"[?] {details_csv} exists, delete it? Y/n: ").strip().lower() in ["y",""]:
        print(f"delete {details_csv}")
        os.remove(details_csv)
    else:
        print(f"Do not delete {details_csv}, continue write into it.")

# generate 1-x configs
for n in range(1,8):
    real_options = default_config_template.copy()
    for opt in range(1,n+1):
        real_options.update(CHOICES[opt])
    real_options_str = '-'.join([NAMES[opt] for opt in range(1,n+1)])
    save_to = f"./1-{n}.json"
    print(save_to)
    with open(save_to,"w") as f:
        json.dump(real_options,f,indent=4)
    with open(details_csv,"a") as f:
        f.write(f"{save_to}, {real_options_str}\n")

# generate combined transformation configs
for n in range(1,8):
    for idx, item in enumerate(combinations(list(range(1,8)), n)):
        real_options = default_config_template.copy()
        for opt in item:
            real_options.update(CHOICES[opt])
        real_options_str = "-".join([NAMES[opt] for opt in item])
        save_to = f"./combinations/C7{n}-{idx}.json"
        print(save_to)
        with open(save_to,"w") as f:
            json.dump(real_options,f,indent=4)
        with open(details_csv,"a") as f:
            f.write(f"{save_to}, {real_options_str}\n")
