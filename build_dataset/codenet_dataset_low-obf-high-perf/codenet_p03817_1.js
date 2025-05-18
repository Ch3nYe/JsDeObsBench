input = require('fs').readFileSync('/dev/stdin', 'utf8')
lines = input.split('\n')
N = lines.shift() * 1
ans = Math.floor(N / 11) * 2
m = N % 11
if (m == 0) {
} else if (m <= 6) {
    ans += 1
} else {
    ans += 2
} 
console.log(ans)