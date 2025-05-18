const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\n/);
let num = input[1].split(' ').map(Number);
num.reverse();

console.log(num.join(' '));
