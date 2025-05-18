let inputString = '';

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    selectionSort(inputString[1].split(' ').map(str => Number(str)));
});

const selectionSort = (arr) => {
  let swap = 0;

  for (let i=0; i<arr.length; i++) {
    let minj = i;
    for (let j=i; j<arr.length; j++) {
      if (arr[j] < arr[minj]) { minj = j; }
    }
    const a = arr[i];
    const b = arr[minj];
    if (a !== b) {
      arr[minj] = a;
      arr[i] = b;
      swap++;
    }
  }

  console.log(arr.join(' '));
  console.log(swap);
};
