import os
import json
import logging
import jsonlines

def _read_file(path):
    if path.endswith('.jsonl'):
        with jsonlines.open(path, 'r') as reader:
            return list(reader)
    elif path.endswith('.json'):
        with open(path, 'r') as reader:
            return json.load(reader)
    else:
        raise NotImplementedError("[!] Unsupported file format. Please use .json or .jsonl file.")

def _write_file(dataset, path):
    if path.endswith('.jsonl'):
        with jsonlines.open(path, 'w') as writer:
            for data in dataset:
                writer.write(data)
    elif path.endswith('.json'):
        with open(path, 'w') as writer:
            json.dump(dataset, writer, indent=4)
    else:
        raise NotImplementedError("[!] Unsupported file format. Please use .json or .jsonl file.")


def save_solution(dataset: list, path: str):
    return _write_file(dataset, path)

def read_solution(prediction_path):
    return _read_file(prediction_path)

def get_codenet_problem_ids(codenet_jsonl_path):
    return [data['filename'] for data in _read_file(codenet_jsonl_path)]

def read_dataset(data_path):
    codenet_dataset = collect_codenet_dataset(data_path)
    # other datasets
    final_dataset = []
    tid = 0
    for data in codenet_dataset:
        data['task_type'] = "deobfuscation"
        data['task_id'] = tid
        tid += 1
        final_dataset.append(data)
    return final_dataset

def collect_codenet_dataset(codenet_jsonl_path):
    logging.info(f'[+] read codenet dataset: {codenet_jsonl_path}')
    return _read_file(codenet_jsonl_path)

