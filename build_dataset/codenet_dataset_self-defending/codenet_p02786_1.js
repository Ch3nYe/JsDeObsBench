inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
H = inp.shift() * 1
c=1
h=2
while(H>=h) {
    h *= 2
    c++
}
console.log(Math.pow(2,c)-1)

