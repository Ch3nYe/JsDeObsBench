input = require('fs').readFileSync('/dev/stdin', 'utf8')
lines = input.split('\n')
S = lines.shift()
max = 0
cnt = 0
for(i=0;i < S.length; i++) {
    if (/[AGCT]/.test(S[i])) {
       cnt++ 
    } else {
        if (max < cnt) {
            max = cnt
        }
        cnt = 0
    }
}
console.log(max)