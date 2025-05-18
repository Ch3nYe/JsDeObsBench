var abc = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').map(Number);
var a = abc[0];
var b = abc[1];
var c = abc[2];

var i;
var result = 0;
for (i = a; i <= b; i++) {
  if (c % i === 0) {
    result++;
  }
}
console.log(result);