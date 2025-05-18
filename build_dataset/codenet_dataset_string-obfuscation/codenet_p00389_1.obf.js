var a0_0x2495cc = a0_0x7169;
(function (stringArrayFunction, comparisonValue) {
    var _0x3dacdb = a0_0x7169;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3dacdb(0x1eb)) / 0x1 * (parseInt(_0x3dacdb(0x1f9)) / 0x2) + parseInt(_0x3dacdb(0x1f8)) / 0x3 * (parseInt(_0x3dacdb(0x1ed)) / 0x4) + -parseInt(_0x3dacdb(0x1f3)) / 0x5 * (-parseInt(_0x3dacdb(0x1f0)) / 0x6) + -parseInt(_0x3dacdb(0x1fa)) / 0x7 + parseInt(_0x3dacdb(0x1f7)) / 0x8 + parseInt(_0x3dacdb(0x1f2)) / 0x9 * (parseInt(_0x3dacdb(0x1ec)) / 0xa) + parseInt(_0x3dacdb(0x1f5)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x318f, 0x195b4));
var input = require('fs')[a0_0x2495cc(0x1f4)](a0_0x2495cc(0x1ef), a0_0x2495cc(0x1f1));
function a0_0x318f() {
    var _0x42c495 = [
        '7225JLrudt',
        'readFileSync',
        '1494361zdwmDz',
        'split',
        '771456RVgBaP',
        '324681QWwWOO',
        '7064tHrZFF',
        '1328565zvCfZs',
        '58CxcuqD',
        '80wpfwUH',
        '4PJffwx',
        'map',
        '/dev/stdin',
        '270jxswQn',
        'utf8',
        '104598YdSZGa'
    ];
    a0_0x318f = function () {
        return _0x42c495;
    };
    return a0_0x318f();
}
var [n, k] = input['trim']()[a0_0x2495cc(0x1f6)]('\x20')[a0_0x2495cc(0x1ee)](Number);
function a0_0x7169(UmSqmK, key) {
    var stringArray = a0_0x318f();
    a0_0x7169 = function (index, key) {
        index = index - 0x1eb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7169(UmSqmK, key);
}
var takasa = 0x0;
var w = 0x0;
var cnt = 0x0;
while (!![]) {
    if (n == 0x0)
        break;
    n--;
    cnt++;
    if (w <= k * cnt) {
        takasa++;
        w += cnt;
        cnt = 0x0;
    }
}
console['log'](takasa);