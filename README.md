# JsDeObsBench: Benchmarking Large Language Models for JavaScript Deobfuscation

## Environment Dependence

### Pypi Deps
```
torch==2.1.2
transformers==4.36.2
accelerate==0.25.0
deepspeed==0.12.6
evaluate==0.4.1
jsonlines==4.0.0
fire==0.5.0
codebleu==0.4.0
rouge_score==0.1.2
code-bert-score==0.4.1
esprima==4.0.1
```

### Tool Deps
```
git
nodejs
npm
docker
```

### Obfuscator Deps (Needed for Obfuscating Dataset)

`npm install --global javascript-obfuscator`

### Deobfuscators (Baselines) Deps

In directory `deobfuscators`: 

Install javascript-deobfuscator (JS-deobfuscator):

`git clone https://github.com/ben-sb/javascript-deobfuscator.git`

`ln -s <current_path>/deobfuscators/javascript-deobfuscator/dist/run.js ~/.local/bin/js-deobfuscator` 

also, make sure `~/.local/bin/js-deobfuscator` is in your PATH.

Install Synchrony:

`npm install --global deobfuscator`


### Escomplex (Needed for Evaluation)

In directory `evaluators`: 

`git clone https://github.com/escomplex/escomplex.git`

`ln -s <current_path>/evaluators/escomplex/src/cli.js ~/.local/bin/escomplex` 

## Prepare Obfuscated Dataset

Unzip the `dataset.7z` stored in `build_dataset` directory, you will have the test dataset obfuscated with 7 individual transformations. 

`7z x dataset.7z`

Set PYTHONPATH: 

`export PYTHONPATH="${PYTHONPATH}:/path/to/thisproject"`

## Deobfuscation

In directory `deobfuscators`:

Specifiy the parameters needed, then run the script.
For example, we use CodeLlama-7b stored in `<MODEL_PATH>` to deobfuscate the test dataset with CodeLlama:

```bash
CUDA_VISIBLE_DEVICES=0
python infer_llama.py \
--input_path ../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl \
--output_path ../results/codenet_javascript-obfuscator_name-obfuscation/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl \
--prompt_template oneshot \
--oneshot_example name-obfuscation \
--base_model_path <MODEL_PATH>
```

It will take a few hours to deobfuscate the whole dataset. 

However, we here have provided the pre-produced results file, the script will check the existence of the results file and skip the deobfuscation process.

## Evaluation

In directory `pipline`:

Specify the deobfuscated results path, then run the script. 

We here use the pre-produced results file for demonstration:

`python CNmain.py --results ../results/codenet_javascript-obfuscator_name-obfuscation/CodeLlama-7b-Instruct-hf_prediction_oneshot.jsonl`

The evaluation results will be printed in the console, and the metrics file will be stored in the same directory, adding the suffix ".metric".

## Acks

We thanks to the following projects:

https://github.com/javascript-obfuscator/javascript-obfuscator

https://github.com/escomplex/escomplex

https://github.com/ben-sb/obfuscator-io-deobfuscator

https://github.com/ben-sb/javascript-deobfuscator

https://github.com/relative/synchrony

