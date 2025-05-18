'use strict';
var a0_0x2b675e = a0_0x1788;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b2919 = a0_0x1788;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b2919(0xd3)) / 0x1 + -parseInt(_0x5b2919(0xd5)) / 0x2 + parseInt(_0x5b2919(0xcf)) / 0x3 * (parseInt(_0x5b2919(0xd0)) / 0x4) + -parseInt(_0x5b2919(0xd9)) / 0x5 + -parseInt(_0x5b2919(0xdb)) / 0x6 * (-parseInt(_0x5b2919(0xd8)) / 0x7) + parseInt(_0x5b2919(0xd4)) / 0x8 * (parseInt(_0x5b2919(0xcd)) / 0x9) + -parseInt(_0x5b2919(0xda)) / 0xa * (parseInt(_0x5b2919(0xd7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d6a, 0xd9843));
var lines = require('fs')[a0_0x2b675e(0xd2)](0x0, a0_0x2b675e(0xce))['split']('\x0a');
function a0_0x1788(Oofrdx, key) {
    var stringArray = a0_0x5d6a();
    a0_0x1788 = function (index, key) {
        index = index - 0xcd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1788(Oofrdx, key);
}
var str = lines[0x0];
var n = str[a0_0x2b675e(0xd6)] - 0x1;
var dfs = (i, sum, order) => {
    if (i === n)
        return eval(order + str[n]) == 0x7 ? order + str[n] : '';
    var temp = dfs(i + 0x1, sum, order + str[i] + '+');
    return temp ? temp : dfs(i + 0x1, sum, order + str[i] + '-');
};
function a0_0x5d6a() {
    var _0x508683 = [
        '1647176eyWzIs',
        '8aLzCOx',
        '2777162oXSTSo',
        'length',
        '11kORRZe',
        '14UyVrRS',
        '6005175ZZqKht',
        '18897980jYwBCh',
        '5138106czozIk',
        '5349663fKgfxF',
        'utf8',
        '129cGcgYC',
        '131728tpiUZI',
        'log',
        'readFileSync'
    ];
    a0_0x5d6a = function () {
        return _0x508683;
    };
    return a0_0x5d6a();
}
var ans = dfs(0x0, 0x0, '');
console[a0_0x2b675e(0xd1)](ans ? ans + '=7' : '');