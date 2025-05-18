function a0_0x4711(LeBTQr, key) {
    var stringArray = a0_0x4750();
    a0_0x4711 = function (index, key) {
        index = index - 0x112;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4711(LeBTQr, key);
}
var a0_0x3d9da1 = a0_0x4711;
function a0_0x4750() {
    var _0x496bf4 = [
        'log',
        '1321824lbgEkx',
        'replace',
        'shift',
        'forEach',
        '/dev/stdin',
        '5284905BSYmAs',
        '6350FYRGtv',
        'utf8',
        '35jMucWN',
        '3134370UhHKiN',
        '450CzoMgy',
        'push',
        '27720504wveJaI',
        '1893352FoVuZv',
        'length',
        '1023730mpbRIE',
        'trim',
        'readFileSync',
        'split'
    ];
    a0_0x4750 = function () {
        return _0x496bf4;
    };
    return a0_0x4750();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1dbf05 = a0_0x4711;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1dbf05(0x120)) / 0x1 + parseInt(_0x1dbf05(0x117)) / 0x2 * (-parseInt(_0x1dbf05(0x11b)) / 0x3) + -parseInt(_0x1dbf05(0x125)) / 0x4 + parseInt(_0x1dbf05(0x116)) / 0x5 + -parseInt(_0x1dbf05(0x11a)) / 0x6 + parseInt(_0x1dbf05(0x119)) / 0x7 * (-parseInt(_0x1dbf05(0x11e)) / 0x8) + parseInt(_0x1dbf05(0x11d)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4750, 0x92b1d));
var input = require('fs')[a0_0x3d9da1(0x122)](a0_0x3d9da1(0x115), a0_0x3d9da1(0x118));
var Arr = input[a0_0x3d9da1(0x121)]()[a0_0x3d9da1(0x123)]('\x0a');
var L = Arr[a0_0x3d9da1(0x113)]();
for (var i = 0x0; i < L; i++) {
    var str = Arr[i];
    str = str['replace'](/\-\>/g, 'A');
    str = str[a0_0x3d9da1(0x112)](/\<\-/g, 'Z');
    var m = str[a0_0x3d9da1(0x123)]('');
    var arr = [m[0x0]];
    var n = 0x1;
    m[a0_0x3d9da1(0x114)](function (v) {
        var _0x56312d = a0_0x3d9da1;
        if (v == 'A')
            n++;
        else if (v == 'Z')
            n--;
        else {
            if (n == 0x0) {
                arr['unshift'](v);
                n = 0x1;
            }
            if (n > arr[_0x56312d(0x11f)])
                arr[_0x56312d(0x11c)](v);
        }
    });
    console[a0_0x3d9da1(0x124)](arr['join'](''));
}