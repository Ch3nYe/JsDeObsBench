'use strict';
const a0_0x539b43 = a0_0x2f03;
(function (stringArrayFunction, comparisonValue) {
    const _0x35ff4b = a0_0x2f03;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x35ff4b(0x159)) / 0x1 + -parseInt(_0x35ff4b(0x153)) / 0x2 + parseInt(_0x35ff4b(0x15b)) / 0x3 * (parseInt(_0x35ff4b(0x14f)) / 0x4) + parseInt(_0x35ff4b(0x151)) / 0x5 + parseInt(_0x35ff4b(0x157)) / 0x6 * (-parseInt(_0x35ff4b(0x15c)) / 0x7) + parseInt(_0x35ff4b(0x158)) / 0x8 * (-parseInt(_0x35ff4b(0x14e)) / 0x9) + parseInt(_0x35ff4b(0x156)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c6c, 0x25ed6));
const input = require('fs')[a0_0x539b43(0x155)](a0_0x539b43(0x150), 'utf8')[a0_0x539b43(0x154)]()[a0_0x539b43(0x15a)]('\x20')['map'](x => x * 0x1);
let ans = 0x0;
function a0_0x2c6c() {
    const _0x581ac1 = [
        'readFileSync',
        '1466820IpTggM',
        '30IAkvBZ',
        '375272sVKMWU',
        '89486zkoCTu',
        'split',
        '63UDizko',
        '295435qvqCMv',
        '9YjFldI',
        '24816YjEdmj',
        '/dev/stdin',
        '1222380HXUHdE',
        'log',
        '395288YsMLsu',
        'trim'
    ];
    a0_0x2c6c = function () {
        return _0x581ac1;
    };
    return a0_0x2c6c();
}
let max = input[0x1];
let div = input[0x0];
let tmpNum = div;
while (tmpNum < max + 0x1) {
    tmpNum *= 0x2;
    ans++;
}
function a0_0x2f03(NKjdkq, key) {
    const stringArray = a0_0x2c6c();
    a0_0x2f03 = function (index, key) {
        index = index - 0x14e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2f03(NKjdkq, key);
}
console[a0_0x539b43(0x152)](ans);