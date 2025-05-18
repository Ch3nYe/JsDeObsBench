inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
l = inp.shift().split(' ')
a = l.shift() * 1
b = l.shift() * 1 
c = l.shift() * 1 
console.log(Math.sqrt(a)+Math.sqrt(b)<Math.sqrt(c) ? "Yes": "No")