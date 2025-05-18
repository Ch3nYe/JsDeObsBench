input = require('fs').readFileSync('/dev/stdin', 'utf8')
lines = input.split('\n')
N = lines.shift() * 1
b = lines.shift().split(' ')
a = []
for (i=N; i>0; i--) {
    found = false
    for (j=i; j>0; j--) {
        if (b[j-1] == j) {
            a.push(b.splice(j-1, 1))
            found = true
            break;
        }
    }
    if (!found) {
        a = [-1]
        break;
    }
}
console.log(a.reverse().join("\n"))