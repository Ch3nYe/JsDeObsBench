var a0_0x116ebb = a0_0x1158;
(function (stringArrayFunction, comparisonValue) {
    var _0x2f5b61 = a0_0x1158;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f5b61(0x138)) / 0x1 + -parseInt(_0x2f5b61(0x13f)) / 0x2 + parseInt(_0x2f5b61(0x139)) / 0x3 + parseInt(_0x2f5b61(0x137)) / 0x4 * (parseInt(_0x2f5b61(0x13a)) / 0x5) + -parseInt(_0x2f5b61(0x134)) / 0x6 + parseInt(_0x2f5b61(0x130)) / 0x7 * (-parseInt(_0x2f5b61(0x135)) / 0x8) + parseInt(_0x2f5b61(0x13e)) / 0x9 * (parseInt(_0x2f5b61(0x13b)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xbdb0, 0x82de0));
var input = require('fs')[a0_0x116ebb(0x12e)](a0_0x116ebb(0x13d), a0_0x116ebb(0x131));
function a0_0xbdb0() {
    var _0x301157 = [
        '6354996jjpfwK',
        '599528GbWPsb',
        'log',
        '188WPlRIx',
        '604212XQGMJG',
        '1905966PMEMtb',
        '96820qCoOyw',
        '10IZefRm',
        'trim',
        '/dev/stdin',
        '10051461mcUbcf',
        '775816qHzBjq',
        'readFileSync',
        'split',
        '7pMWuFd',
        'utf8',
        'join',
        'length'
    ];
    a0_0xbdb0 = function () {
        return _0x301157;
    };
    return a0_0xbdb0();
}
var arr = input[a0_0x116ebb(0x13c)]()[a0_0x116ebb(0x12f)]('\x0a');
var s = arr[0x0]['split']('');
function a0_0x1158(wiIAXI, key) {
    var stringArray = a0_0xbdb0();
    a0_0x1158 = function (index, key) {
        index = index - 0x12e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1158(wiIAXI, key);
}
for (var i = 0x0; i < s[a0_0x116ebb(0x133)]; i++) {
    for (var j = i + 0x1; j < s[a0_0x116ebb(0x133)]; j++) {
        if (s[i] == s[j]) {
            s[i] = '';
            s[j] = '';
            break;
        }
    }
}
var n = s[a0_0x116ebb(0x132)]('')[a0_0x116ebb(0x133)];
if (n == 0x0 || n == 0x1)
    console[a0_0x116ebb(0x136)](0x0);
else if (n % 0x2 == 0x0)
    console['log'](n / 0x2);
else
    console['log']((n - 0x1) / 0x2);