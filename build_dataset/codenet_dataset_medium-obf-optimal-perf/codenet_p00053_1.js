var m = [-1, 2, 3, 5, 7, 11, 13];
function p(n) {
    if (m[n])
        return m[n];

    var found = m.length - 1;
    var foundP = m[found];
    for (var i = foundP + 2;; i += 2) {
        if (isPrime(i)) {
            found++;
            m[found] = i;
            if (found == n)
                return i;
        }
    }
}

function isPrime(num) {
    if (num % 3 == 0) return false;
    var limit = Math.round(Math.sqrt(num));
    var i = 1;
    while(i * 6 - 1 <= limit) {
        if (num % (i * 6 - 1) == 0 || num % (i * 6 + 1) == 0) return false;
        i++;
    }
    return true;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
var line;
while (line = lines.shift()) {
    var num = +line;
    if (num == 0)
        break;

    var s = 0;
    for (var i = num; i > 0; i--) {
        s += p(i);
    }
    console.log(s);
}