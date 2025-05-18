var a0_0x5b5f23 = a0_0x3b7f;
function a0_0x6d3c() {
    var _0x16b31f = [
        '214jaaYTJ',
        '1291199xwHWzq',
        '477536mJycEY',
        '274990VDFsmF',
        '190MXcNSq',
        '80739TpXgIM',
        'readFileSync',
        '2922ToNaVP',
        '24ZijujQ',
        '8ySBAYJ',
        '3281894pnDuop',
        '90947YobVge',
        'pow'
    ];
    a0_0x6d3c = function () {
        return _0x16b31f;
    };
    return a0_0x6d3c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x216d76 = a0_0x3b7f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x216d76(0xf0)) / 0x1 + -parseInt(_0x216d76(0xf2)) / 0x2 * (-parseInt(_0x216d76(0xf9)) / 0x3) + parseInt(_0x216d76(0xf4)) / 0x4 + parseInt(_0x216d76(0xf5)) / 0x5 * (-parseInt(_0x216d76(0xfa)) / 0x6) + parseInt(_0x216d76(0xf3)) / 0x7 * (parseInt(_0x216d76(0xfb)) / 0x8) + -parseInt(_0x216d76(0xf7)) / 0x9 * (-parseInt(_0x216d76(0xf6)) / 0xa) + -parseInt(_0x216d76(0xef)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6d3c, 0x24e45));
var fs = require('fs');
var inn = parseInt(fs[a0_0x5b5f23(0xf8)](0x0)['toString']());
function isPrime(n) {
    var _0xed2416 = a0_0x5b5f23;
    if (n <= 0x3)
        return n > 0x1;
    else if (n % 0x2 === 0x0 || n % 0x3 === 0x0)
        return ![];
    var i = 0x5;
    while (Math[_0xed2416(0xf1)](i, 0x2) <= n) {
        if (n % i === 0x0 || n % (i + 0x2) === 0x0)
            return ![];
        i += 0x6;
    }
    return !![];
}
function a0_0x3b7f(mUFZKR, key) {
    var stringArray = a0_0x6d3c();
    a0_0x3b7f = function (index, key) {
        index = index - 0xef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b7f(mUFZKR, key);
}
while (!isPrime(inn)) {
    inn++;
}
console['log'](inn);