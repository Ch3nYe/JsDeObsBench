inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
l = inp.shift().split(' ')
N = l[0]
K = l[1]
A = inp.shift().split(' ')
o = {}
a = []
for (i=0; i<N; i++) {
    a[A[i]] = (a[A[i]] || 0) + 1
    o[A[i]] = 1
}
keys = Object.keys(o)
c = keys.length - K
if (c > 0) {
    a.sort()
    cnt = 0
    for (k of a) {
        cnt += k
        c--
        if (c===0) {
            break;
        }
    }
    console.log(cnt)    
} else {
    console.log(0)
}
