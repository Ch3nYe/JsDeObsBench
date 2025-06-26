# JsDeObsBench: Benchmarking Large Language Models for JavaScript Deobfuscation

JsDeObsBench is a dedicated benchmark designed to rigorously evaluate the effectiveness of LLMs in the context of JS deobfuscation. We here release the utils for building the test dataset and conducting evaluation, which also facilates the evaluation of new LLMs and summarize the results into a leaderboard format.

* [🔥] Paper: [arXiv:2506.20170](https://arxiv.org/abs/2506.20170)

* [🔥] Leaderboard: [jsdeobf.github.io](https://jsdeobf.github.io/)

## Environment Dependence

First of all, set PYTHONPATH: 
`export PYTHONPATH="${PYTHONPATH}:/path/to/this-project"`

### Python Packages

To install them, run command:
```bash
pip install -r requirements.txt
```

### Tool Dependencies
```
nodejs
npm
docker
escomplex
```
1. `nodejs` and `npm`

To install `nodejs` and `npm`, please follow the official installation instructions from: https://nodejs.org/en/download

2. `docker`

To install `docker`, please follow the instruction from: https://docs.docker.com/engine/install/

3. `escomplex`

`escomplex` is used in our evaluation, following this to install it:

In directory `evaluators/escomplex`: 

First of all, install dependencies with `npm install`.

Then, link the tool to one of your `$PATH` directory, such as `~/.local/bin/` and `/usr/bin/`. Here is an example of `~/.local/bin/`:

`ln -s <current_path>/evaluators/escomplex/src/cli.js ~/.local/bin/escomplex` 

`ln -s <current_path>/evaluators/escomplex/src/halstead.js ~/.local/bin/halstead` 

Make sure that you can use `escomplex` and `halstead` in your shell, which output JSON string by default.

### Obfuscator (Optional)

This is used in generating obfuscated dataset.

`npm install --global javascript-obfuscator`

### Baseline Deobfuscators (Optional)

This is used in evaluating the baseline tools.

1. Install javascript-deobfuscator (JS-deobfuscator):

In directory `deobfuscators`: 

`git clone https://github.com/ben-sb/javascript-deobfuscator.git`

`ln -s <current_path>/deobfuscators/javascript-deobfuscator/dist/run.js ~/.local/bin/js-deobfuscator` 

also, make sure `~/.local/bin/js-deobfuscator` is in your PATH.

2. Install Synchrony:

`npm install --global deobfuscator`


## Prepare Obfuscated Dataset

The dataset needed for benchmarking a LLM had been stored in `build_dataset` directory, you will have the test dataset obfuscated with 7 individual transformations and 1 combined transformation. 

We also provide the script (`obfuscators/obfuscate_codenet.py`) for building more obfuscated JS program with `javascript-obfuscator`. Please set the obfuscation config in the top of script, the supported configs are stored into JSON file in `obfuscators/javascript-obfuscator-configs/*.json`. And the `details.csv` details the particular transformations used in each config. 
Now, you can refer to the following command to execute obfuscation:

```bash
cd obfuscators && python obfuscate_codenet.py
```


## Deobfuscation Evaluation

In directory `deobfuscators`:

We use `query_vllm.py` to call a remote model with **openai-style API** for JS deobfuscation, all you need is to configure the right parameters, which has more detailed explains written in `query_vllm.py`. For instance, you can use the following cmd to run deobfuscation task on `name-obfuscation`:

```bash
API_KEY="EMPTY" \
API_URL="http://localhost:8000/v1" \
MODEL="Mistral-7B-Instruct-v0.3" \
TOKENIZER_PATH="mistralai/Mistral-7B-Instruct-v0.3" \
python query_vllm.py \
--input_path ../build_dataset/codenet_dataset_name-obfuscation/Project_CodeNet_selected.jsonl \
--output_path ../results/codenet_javascript-obfuscator_name-obfuscation/ \
--max_retry 1 \
--prompt oneshot \
--example name-obfuscation
```

The script will automatically load existed results file `Mistral-7B-Instruct-v0.3.oneshot.jsonl`, and perform unfished part. Add `--overwrite` parameters for re-deobfuscate the whole dataset. 

Make sure you have access to the model tokenizer. If you run into error of "Make sure to have access to it at https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3.", you can require the access on huggingface. Also, ensure you are logged in to huggingface CLI via command:

```
huggingface-cli login
```

If you need a huggingface token, use your access token or authenticate via the browser prompt. To generate a token manually:

* Go to https://huggingface.co/settings/tokens

* Create a **read access token**.

Heads up, it can take a few hours to deobfuscate the whole dataset. And the results will be saved into `output_path` with `<model-name>.<shot>.jsonl` name format.

We also have provided the batch deobfuscation script for conducting all experiments on all obfuscation configs. Please specify your parameters before running it:

```bash
./run_deobf.sh
```

## Evaluation

In main directory:

Specify the deobfuscation results path, then run the evaluation script. 

We here use the pre-produced results file for demonstration:

`python eval.py --results ./results/codenet_javascript-obfuscator_name-obfuscation/Mistral-7B-Instruct-v0.3.oneshot.jsonl`

The scores will be printed in the console, and the metrics file will be stored in the same directory with `results` file, adding the suffix ".metric".

Batch evaluation script is used to calculate the scores of the deobfuscation results against all configs, specify your parameters before running it:

```bash
./run_deobf.sh
```

## Release to Leaderboard

In main directory:

Add a new model card in the top of `main` function, for example:

```python
models_config = [
        { # new model
            "name": "Mistral-7B-Instruct-v0.3",
            "link": "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
            "open-data": "True", # if release the deobfuscation results file?
            "is-expert": False, # is expert model for JS deobfuscation
            "prompt": "oneshot",
            "size": 7 # model size (B)
        },
        ...
]
```

and then, run `python read_scores_for_leaderboard.py` to generate the `leaderboard.json` file (see the example file in the project directory).

Please submit a PR into our leaderboard repository for merging scores: [jsdeobf.github.io](https://jsdeobf.github.io).

## Acknowledgements

We gratefully acknowledge the following open-source projects, which were instrumental in the development of **JsDeObsBench**:

https://github.com/javascript-obfuscator/javascript-obfuscator

https://github.com/escomplex/escomplex

https://github.com/ben-sb/obfuscator-io-deobfuscator

https://github.com/ben-sb/javascript-deobfuscator

https://github.com/relative/synchrony

https://github.com/vllm-project/vllm

https://github.com/evalplus/evalplus

https://github.com/IBM/Project_CodeNet