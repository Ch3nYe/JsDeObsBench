var plus = function(a, b)
{
  return a + b;
};

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
var sum=0;

console.log(Arr.reduce(plus));