var x = require('fs').readFileSync('/dev/stdin', 'utf8');
x = parseInt(x, 10)
var h = Math.floor(x / 3600)
var m = Math.floor((x % 3600) / 60)
var s = x % 3600 % 60;
console.log(h + ":" + m + ":" + s);
