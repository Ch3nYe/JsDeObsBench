'use strict';
function a0_0x147e(qsIKeS, key) {
    var stringArray = a0_0x4b55();
    a0_0x147e = function (index, key) {
        index = index - 0x182;
        var value = stringArray[index];
        return value;
    };
    return a0_0x147e(qsIKeS, key);
}
function a0_0x4b55() {
    var _0x64c46c = [
        'readFileSync',
        'log',
        'utf8',
        '470170rkibjV',
        'split',
        '1220478tHHqMf',
        '680esaqOW',
        '3868997jIKrfH',
        '223506HPuYdp',
        '8874IYKiAE',
        '12775kFTTiC',
        '1jRqZTL',
        '/dev/stdin',
        '330698QoTIdL',
        '770OdzpGp',
        '12hPWNGD',
        '8KjzkWP'
    ];
    a0_0x4b55 = function () {
        return _0x64c46c;
    };
    return a0_0x4b55();
}
var a0_0x242ff5 = a0_0x147e;
(function (stringArrayFunction, comparisonValue) {
    var _0x106b24 = a0_0x147e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x106b24(0x185)) / 0x1 * (-parseInt(_0x106b24(0x187)) / 0x2) + parseInt(_0x106b24(0x182)) / 0x3 * (-parseInt(_0x106b24(0x18a)) / 0x4) + parseInt(_0x106b24(0x18e)) / 0x5 + parseInt(_0x106b24(0x190)) / 0x6 + -parseInt(_0x106b24(0x184)) / 0x7 * (parseInt(_0x106b24(0x191)) / 0x8) + parseInt(_0x106b24(0x183)) / 0x9 * (-parseInt(_0x106b24(0x188)) / 0xa) + -parseInt(_0x106b24(0x192)) / 0xb * (-parseInt(_0x106b24(0x189)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b55, 0x1955e));
function Main(input) {
    var _0x295f50 = a0_0x147e;
    input = input[_0x295f50(0x18f)]('\x0a');
    var input0 = input[0x0][_0x295f50(0x18f)]('\x20');
    var N = parseInt(input0[0x0]);
    var T = parseInt(input0[0x1]);
    var t = input[0x1][_0x295f50(0x18f)]('\x20');
    for (var i = 0x0; i < N; i++) {
        t[i] = parseInt(t[i]);
    }
    var count = 0x0;
    var t_i;
    for (var i = 0x1; i < N; i++) {
        t_i = t[i] - t[i - 0x1];
        if (t_i < T) {
            count += t_i;
        } else {
            count += T;
        }
    }
    console[_0x295f50(0x18c)](count + T);
}
Main(require('fs')[a0_0x242ff5(0x18b)](a0_0x242ff5(0x186), a0_0x242ff5(0x18d)));