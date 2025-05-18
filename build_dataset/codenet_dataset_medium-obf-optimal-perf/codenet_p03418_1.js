function Main(input) {
  input = input.split(' ').map(num => Number(num));
  n = input[0];
  k = input[1];
  count = 0;
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if ((i % j) >= k) count++;
    }
  }
  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));