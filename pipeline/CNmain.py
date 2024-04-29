
import os
import fire
import logging
from evaluators.evaluators import evaluate_deobfuscation
os.environ['TOKENIZERS_PARALLELISM'] = "true"
logging.basicConfig(level=logging.INFO, format='%(asctime)s | %(levelname)s | %(message)s', datefmt='%m-%d %H:%M:%S')

def main(
        results: str,
        contrainer_name: str = "eval_js_container1",
        ):
    # contrainer_name must be used exclusively

    logging.info(f"load deobfuscation results: {results}")
    evaluate_deobfuscation(results,contrainer_name=contrainer_name,save_with_metrics=True)

if __name__ == "__main__":
    fire.Fire(main)