(function main(){
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  lines.shift();
  const arr = lines.shift().split(' ').map(Number);
  buildMaxHeap(arr);
  console.log(arr.reduce((s, e) => s += ` ${e}`, ''));
})();

function buildMaxHeap(arr) {
  const n = arr.length;
  const maxHeapify = (i) => {
    let left, right, largest;
    left = 2 * i + 1;
    right = 2 * i + 2;
    largest = left < n && arr[left] > arr[i] ? left : i;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest != i) {
      arr[largest] = [arr[i], arr[i] = arr[largest]][0];
      maxHeapify(largest);
    }
  };

  for (let i = Math.floor(arr.length / 2); i >= 0; i--) maxHeapify(i);
}

