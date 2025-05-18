var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [n,a,b,c]= input.trim().split(" ").map(Number);
console.log(n-a-b+c);
