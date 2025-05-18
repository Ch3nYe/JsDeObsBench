log = console['log'];
var stdin = require('fs')['readFileSync']('/dev/stdin', 'UTF-8');
var lines = stdin['split']('\x0a');
var N = lines[0x0]['split']('\x20')['map'](Number)[0x0];
var T = lines['slice'](0x1)['filter'](v => v !== '')['map'](Number);
function gcd(a, b) {
    if (b === 0x0)
        return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    var yOCxDd = {
        'OeHCI': function (x, y) {
            return x / y;
        },
        'RudVX': function (x, y) {
            return x * y;
        },
        'eYYdE': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return yOCxDd['OeHCI'](yOCxDd['RudVX'](a, b), yOCxDd['eYYdE'](gcd, a, b));
}
for (var i = 0x1; i < N; i++) {
    T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);