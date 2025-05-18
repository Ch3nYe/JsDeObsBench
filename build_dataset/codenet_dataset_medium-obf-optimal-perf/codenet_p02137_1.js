var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var p= input.trim()-0;
console.log(p-(p%500));
