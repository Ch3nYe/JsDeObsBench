var a0_0x38986f = a0_0x50c2;
var fs = require('fs');
function a0_0x50c2(upygsj, key) {
    var stringArray = a0_0x2d34();
    a0_0x50c2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50c2(upygsj, key);
}
var inn = parseInt(fs['readFileSync'](0x0)[a0_0x38986f(0x0)]());
function isPrime(n) {
    var _0x3da153 = a0_0x50c2;
    if (n <= 0x3)
        return n > 0x1;
    else if (n % 0x2 === 0x0 || n % 0x3 === 0x0)
        return ![];
    var i = 0x5;
    while (Math[_0x3da153(0x1)](i, 0x2) <= n) {
        if (n % i === 0x0 || n % (i + 0x2) === 0x0)
            return ![];
        i += 0x6;
    }
    return !![];
}
while (!isPrime(inn)) {
    inn++;
}
console[a0_0x38986f(0x2)](inn);
function a0_0x2d34() {
    var _0x15f590 = [
        'toString',
        'pow',
        'log'
    ];
    a0_0x2d34 = function () {
        return _0x15f590;
    };
    return a0_0x2d34();
}