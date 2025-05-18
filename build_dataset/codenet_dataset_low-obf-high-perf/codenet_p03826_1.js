var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var inputArray = input.split(' ');
var a = inputArray[0];
var b = inputArray[1];
var c = inputArray[2];
var d = inputArray[3];

var result = (a * b > c * d) ? a * b : c * d;
console.log(result);