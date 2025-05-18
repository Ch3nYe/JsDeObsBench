var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr = (input.trim()).split("\n");

const binarySearch = (key, arr, N) => {
  let mid;
  let left = 0;
  let right = N;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (key < arr[mid]) right = mid;
    else if (key > arr[mid]) left = mid + 1;
    else return 1;
  }
  return 0;
}


(function() {
  const N1 = Number(Arr[0]);
  const arr1 = Arr[1].split(" ").map(Number);
  // const N2 = Number(Arr[2]);
  const arr2 = Arr[3].split(" ").map(Number);
  console.log(arr2.map(e => binarySearch(e, arr1, N1)).reduce((a, b) => a + b, 0));
})();

