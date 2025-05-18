var a0_0xf37f4d = a0_0x7e2f;
function a0_0x7e2f(wTZovO, key) {
    var stringArray = a0_0x17dc();
    a0_0x7e2f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7e2f(wTZovO, key);
}
function divisor(n) {
    var _0xbe192e = a0_0x7e2f;
    var ret = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            ret['push'](i);
            if (i * i != n)
                ret[_0xbe192e(0x0)](n / i);
        }
    }
    return ret;
}
function f(a, b) {
    var _0x49a8ac = a0_0x7e2f;
    return Math[_0x49a8ac(0x1)](('' + a)[_0x49a8ac(0x2)], ('' + b)[_0x49a8ac(0x2)]);
}
function a0_0x17dc() {
    var _0xcbb761 = [
        'push',
        'max',
        'length',
        'split',
        'floor',
        'min',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x17dc = function () {
        return _0xcbb761;
    };
    return a0_0x17dc();
}
function main(input) {
    var _0x514869 = a0_0x7e2f;
    var inputs = input[_0x514869(0x3)]('\x0a');
    var n = parseInt(inputs[0x0], 0xa);
    var divisors = divisor(n)['sort']((a, b) => a - b);
    var surplus = divisors[_0x514869(0x2)] % 0x2;
    var lastIndex = divisors[_0x514869(0x2)] - 0x1;
    var halfLen = Math[_0x514869(0x4)](divisors[_0x514869(0x2)] / 0x2);
    var minF = ('' + n)['length'];
    for (var i = 0x0; i < halfLen - surplus; i++) {
        minF = Math[_0x514869(0x5)](minF, f(divisors[i], divisors[lastIndex - i]));
    }
    if (surplus == 0x1)
        minF = Math[_0x514869(0x5)](minF, ('' + divisors[halfLen])[_0x514869(0x2)]);
    console[_0x514869(0x6)](minF);
}
main(require('fs')[a0_0xf37f4d(0x7)]('/dev/stdin', a0_0xf37f4d(0x8)));