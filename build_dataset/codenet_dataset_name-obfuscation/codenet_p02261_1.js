'use strict';

const main = input => {
  input = input.split('\n');
  const N = Number(input[0]);
  const A1 = input[1].split(' ');
  const A2 = A1.concat();
  bubbleSort(A1, N);
  console.log(A1.join(' '));
  console.log('Stable');
  selectionSort(A2, N);
  console.log(A2.join(' '));
  console.log(A2.every((v, i) => v === A1[i]) ? 'Stable' : 'Not stable');
};

function bubbleSort(A, N) {
  for (let i = 0; i < N - 1; ++i) {
    for (let j = N - 1; j >= i + 1; --j) {
      if (Number(A[j - 1][1]) > Number(A[j][1])) {
        const tmp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = tmp;
      }
    }
  }
}

function selectionSort(A, N) {
  for (let i = 0; i < N - 1; ++i) {
    let minj = i;
    for (let j = i; j < N; ++j) {
      if (Number(A[j][1]) < Number(A[minj][1])) {
        minj = j;
      }
    }
    if (i !== minj) {
      const tmp = A[i];
      A[i] = A[minj];
      A[minj] = tmp;
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

