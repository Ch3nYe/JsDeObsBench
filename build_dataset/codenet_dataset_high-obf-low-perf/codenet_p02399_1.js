var x = require('fs').readFileSync('/dev/stdin', 'utf8');

var array = x.split(" ").map(Number);

var a = array[0];
var b = array[1];
var d = Math.floor( a / b);
var r = a % b;
var f = ( a / b ).toFixed(5);

console.log(d + " " + r + " " + f);

