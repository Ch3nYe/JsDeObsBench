inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
l = inp.shift().split(' ')
A = l[0] * 1 - 1
B = l[1] * 1 - 1
console.log(A * B)