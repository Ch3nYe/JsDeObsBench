var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b]= input.trim().split(" ").map(Number);
console.log(Math.ceil(b/a));
