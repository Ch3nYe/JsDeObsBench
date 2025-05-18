inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
l = inp.shift().split(' ')
x = l[0]
y = l[1]
console.log(x == y ? '=' : x.charCodeAt() < y.charCodeAt() ? '<' : '>')