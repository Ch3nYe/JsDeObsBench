'use strict';
function a0_0x117e(pnxhZA, key) {
    var stringArray = a0_0x8d61();
    a0_0x117e = function (index, key) {
        index = index - 0x1e2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x117e(pnxhZA, key);
}
var a0_0x459acb = a0_0x117e;
(function (stringArrayFunction, comparisonValue) {
    var _0x3765ed = a0_0x117e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3765ed(0x1e2)) / 0x1 + -parseInt(_0x3765ed(0x1f1)) / 0x2 + -parseInt(_0x3765ed(0x1e5)) / 0x3 * (parseInt(_0x3765ed(0x1ed)) / 0x4) + -parseInt(_0x3765ed(0x1e3)) / 0x5 * (parseInt(_0x3765ed(0x1e6)) / 0x6) + -parseInt(_0x3765ed(0x1e4)) / 0x7 * (-parseInt(_0x3765ed(0x1ea)) / 0x8) + parseInt(_0x3765ed(0x1eb)) / 0x9 * (parseInt(_0x3765ed(0x1e7)) / 0xa) + -parseInt(_0x3765ed(0x1ee)) / 0xb * (-parseInt(_0x3765ed(0x1f0)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8d61, 0xe2f71));
function Main(input) {
    var _0x77c60b = a0_0x117e;
    input = input['trim']();
    input = input[_0x77c60b(0x1ec)](/\s+/, '')['split']('');
    var height = input[_0x77c60b(0x1e8)];
    var one = 0x0;
    var zero = 0x0;
    while (input[_0x77c60b(0x1e8)]) {
        if (input['pop']() === '0')
            zero++;
        else
            one++;
    }
    console['log'](Math['min'](zero, one) * 0x2);
}
function a0_0x8d61() {
    var _0x2e9918 = [
        'replace',
        '4qKnGqm',
        '11eJyNkx',
        'utf8',
        '13958268TjZTPM',
        '129084oOCMUM',
        '736150hMBNuW',
        '835865dyBFec',
        '316946rFFCCv',
        '3750969tEmeCw',
        '30RcQVkw',
        '1310FrUVEL',
        'length',
        '/dev/stdin',
        '184jZpvAP',
        '9594HcEpHL'
    ];
    a0_0x8d61 = function () {
        return _0x2e9918;
    };
    return a0_0x8d61();
}
Main(require('fs')['readFileSync'](a0_0x459acb(0x1e9), a0_0x459acb(0x1ef)));