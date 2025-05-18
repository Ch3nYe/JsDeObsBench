input = require('fs').readFileSync('/dev/stdin', 'utf8')
lines = input.split('\n')
N = lines.shift() * 1
A = lines.shift().split(' ')

h = 0
cnt = 0
for (i=0; i<N; i++) {
    if (h<=A[i]) {
        cnt++
        h = A[i]
    }
}
console.log(cnt)