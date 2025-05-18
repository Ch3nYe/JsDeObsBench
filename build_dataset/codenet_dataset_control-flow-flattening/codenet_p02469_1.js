function gcd(a, b) {
    if (b > a)
        return gcd(b, a);
    if (b == 0)
        return a;

    return gcd(b, a % b);
}
function lcm(a, b) {
    var d = gcd(a, b);
    return a * b / d;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

var n = +lines.shift();

var nums = lines.shift().split(' ').map(function(num){return +num;});
var p = 1;
for (var i = 0; i < n; i++) {
    p = lcm(p, nums[i]);
}

console.log(p);