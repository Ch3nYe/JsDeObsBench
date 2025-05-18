var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var x =input.trim() - 0;
var w = ["thu","fri","sat","sun","mon","tue","wed"];
console.log(w[x%7]);
