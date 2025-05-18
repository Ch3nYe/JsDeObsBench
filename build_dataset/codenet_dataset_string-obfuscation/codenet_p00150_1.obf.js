function a0_0x1b57(BhTbFc, key) {
    var stringArray = a0_0x45a5();
    a0_0x1b57 = function (index, key) {
        index = index - 0xb0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b57(BhTbFc, key);
}
var a0_0x349a67 = a0_0x1b57;
(function (stringArrayFunction, comparisonValue) {
    var _0x3bf557 = a0_0x1b57;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3bf557(0xbd)) / 0x1 * (-parseInt(_0x3bf557(0xbb)) / 0x2) + -parseInt(_0x3bf557(0xb8)) / 0x3 * (-parseInt(_0x3bf557(0xb6)) / 0x4) + -parseInt(_0x3bf557(0xb5)) / 0x5 * (parseInt(_0x3bf557(0xb2)) / 0x6) + parseInt(_0x3bf557(0xc2)) / 0x7 * (parseInt(_0x3bf557(0xb9)) / 0x8) + parseInt(_0x3bf557(0xbc)) / 0x9 * (-parseInt(_0x3bf557(0xbf)) / 0xa) + parseInt(_0x3bf557(0xb3)) / 0xb * (parseInt(_0x3bf557(0xc0)) / 0xc) + parseInt(_0x3bf557(0xb0)) / 0xd * (-parseInt(_0x3bf557(0xb4)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x45a5, 0x4e942));
function prime(max) {
    var _0x290fa4 = a0_0x1b57;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x290fa4(0xc3)](Math['sqrt'](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[_0x290fa4(0xc5)](arr[i]);
    }
    return result;
}
var p = prime(0xf423f);
function a0_0x45a5() {
    var _0x4ea0ba = [
        'push',
        '299jLoiwS',
        'length',
        '201276NKcyAB',
        '10142oksVor',
        '32410WsjLdd',
        '10TLSzRG',
        '4uCCipP',
        'trim',
        '48861hzIRlc',
        '8oTgdwU',
        'utf8',
        '83894fdodut',
        '333cDBjBl',
        '1zShFbm',
        'split',
        '15410eItjhn',
        '2148IpZDrO',
        '/dev/stdin',
        '2518838tKzVdX',
        'floor',
        'log'
    ];
    a0_0x45a5 = function () {
        return _0x4ea0ba;
    };
    return a0_0x45a5();
}
var input = require('fs')['readFileSync'](a0_0x349a67(0xc1), a0_0x349a67(0xba));
var Arr = input[a0_0x349a67(0xb7)]()[a0_0x349a67(0xbe)]('\x0a')['map'](Number);
for (var i = 0x0; i < Arr[a0_0x349a67(0xb1)]; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    var twin = '';
    for (var j = 0x1; j < p[a0_0x349a67(0xb1)]; j++) {
        if (p[j] > a)
            break;
        if (p[j] - p[j - 0x1] == 0x2)
            twin = p[j - 0x1] + '\x20' + p[j];
    }
    console[a0_0x349a67(0xc4)](twin);
}