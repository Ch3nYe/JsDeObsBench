function Main(input) {
    input = input.split('\n').map(n => parseInt(n, 10));
    console.log((Math.pow(input[0], 2)) - input[1]);
 }
  Main(require('fs').readFileSync('/dev/stdin', 'utf8'));