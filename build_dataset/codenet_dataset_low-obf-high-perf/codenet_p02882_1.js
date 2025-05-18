inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
l = inp.shift().split(' ')
a = l.shift() * 1
b = l.shift() * 1 
x = l.shift() * 1
l = 0
r = 90
mid = 45
c = 0
S = a * a * b
if (S / 2 < x) {
    while (l<r) {
        s = S - (a * a * Math.tan(mid / 180 * Math.PI)) / 2 * a
        if (x < s) {
            l = mid
        } else {
            r = mid
        }
        mid = (l + r) / 2
        c++
        if (c>200) {
            break;
        }
    }    
    console.log(mid.toFixed(10))
} else {
    while (l<r) {
        s = (b * b * Math.tan(mid / 180 * Math.PI)) / 2 * a
        if (x < s) {
            r = mid
        } else {
            l = mid
        }
        mid = (l + r) / 2
        c++
        if (c>200) {
            break;
        }
    }  
    console.log((90 - mid).toFixed(10))
}