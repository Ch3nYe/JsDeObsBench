var a0_0x5b27b0 = a0_0x381e;
function a0_0x381e(OIItmE, key) {
    var stringArray = a0_0x332a();
    a0_0x381e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x381e(OIItmE, key);
}
var count = 0x0;
function isPrime(num) {
    if (num < 0x2)
        return ![];
    for (var i = 0x2; i < num; i++) {
        if (num % i == 0x0)
            return ![];
    }
    count++;
    return !![];
}
function a0_0x332a() {
    var _0x25f120 = [
        'split',
        'length',
        'log'
    ];
    a0_0x332a = function () {
        return _0x25f120;
    };
    return a0_0x332a();
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var p = input[a0_0x5b27b0(0x0)]('\x0a');
for (var i = 0x0; i < p[a0_0x5b27b0(0x1)]; i++) {
    count = 0x0;
    for (var j = 0x2; j <= p[i]; j++) {
        isPrime(j);
    }
    console[a0_0x5b27b0(0x2)](count);
}