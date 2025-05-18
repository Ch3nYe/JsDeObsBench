inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
l = inp.shift().split(' ')
x = l[0] * 1
y = l[1] * 1 
cnt = 0
if (x == y) {
    
} else if (Math.abs(x) == Math.abs(y)) {
    cnt++
} else if (x == 0 || y == 0) {
    if (y < x) {
        cnt++
    }
    cnt += Math.abs(Math.abs(x) - Math.abs(y))
} else {
    if (x > y) {
        if (x > 0 && y > 0) {
            cnt += 2
        } else if (x > 0 && y < 0) {
            cnt += 1
        } else {
            cnt += 2
        }
    } else {
        if (x < 0 && y > 0) {
            cnt += 1
        }
    }
    cnt += Math.abs(Math.abs(x) - Math.abs(y))
}
console.log(cnt)