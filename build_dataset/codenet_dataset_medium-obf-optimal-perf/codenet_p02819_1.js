var fs = require('fs');
var inn = parseInt(fs.readFileSync(0).toString());
function isPrime(n) {
    if(n <= 3) return n > 1;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    var i = 5;
    while (Math.pow(i, 2) <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
while (!isPrime(inn)) {
inn++;
}
console.log(inn);