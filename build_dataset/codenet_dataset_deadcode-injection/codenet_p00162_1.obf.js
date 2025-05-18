function a0_0x32bd(RQcaKk, key) {
    var stringArray = a0_0x30d2();
    a0_0x32bd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x32bd(RQcaKk, key);
}
function a0_0x30d2() {
    var _0x5d3e5c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift'
    ];
    a0_0x30d2 = function () {
        return _0x5d3e5c;
    };
    return a0_0x30d2();
}
var a0_0x33fef2 = a0_0x32bd;
function hamming() {
    var obj = {};
    for (var i = 0x1; i <= 0xf4240; i++) {
        var h = i;
        while (h % 0x2 == 0x0)
            h /= 0x2;
        while (h % 0x3 == 0x0)
            h /= 0x3;
        while (h % 0x5 == 0x0)
            h /= 0x5;
        if (h == 0x1)
            obj[i] = !![];
    }
    return obj;
}
var Numbers = hamming();
var input = require('fs')[a0_0x33fef2(0x0)](a0_0x33fef2(0x1), a0_0x33fef2(0x2));
var Arr = input[a0_0x33fef2(0x3)](/\n$/, '')[a0_0x33fef2(0x4)]('\x0a');
while (!![]) {
    var mn = Arr[a0_0x33fef2(0x5)]()[a0_0x33fef2(0x4)]('\x20')['map'](Number);
    if (mn[0x0] == 0x0)
        break;
    var cnt = 0x0;
    for (var i = mn[0x0]; i <= mn[0x1]; i++) {
        if (Numbers[i])
            cnt++;
    }
    console['log'](cnt);
}