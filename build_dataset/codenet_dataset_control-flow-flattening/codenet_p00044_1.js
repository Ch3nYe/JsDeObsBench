function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num < 2 || num % 2 == 0 || num % 3 == 0) return false;
    var limit = Math.round(Math.sqrt(num));
 
    var i = 1;
    while(i * 6 - 1 <= limit) {
        if (num % (i * 6 - 1) == 0 || num % (i * 6 + 1) == 0) return false;
        i++;
    }
    return true;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');
 
var line;
while (line = lines.shift()) {
    var num = +line;

    var mp;
    var lp;

    if (num == 3)
        mp = 2;

    var i = 3;
    while (true) {
        if (isPrime(i) && i < num) {
            mp = i;
        }
        if (isPrime(i) && i > num) {
            lp = i;
            break;
        }
        i += 2;
    }
    console.log(mp, lp);
}