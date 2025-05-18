var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input = input.trim().split("\n")
arr = input[1].split(" ").map(Number);
arr = arr.filter(v=> v%2==0);
console.log(arr.length);
