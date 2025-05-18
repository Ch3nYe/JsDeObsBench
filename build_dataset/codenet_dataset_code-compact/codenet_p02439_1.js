var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c]=input.trim().split(" ").map(Number);
console.log(Math.min(a,b,c)+" "+Math.max(a,b,c));
