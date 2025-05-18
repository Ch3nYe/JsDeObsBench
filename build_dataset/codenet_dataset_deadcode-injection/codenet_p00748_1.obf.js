var a0_0x32925d = a0_0x410b;
var a = [0x1];
for (var i = 0x1; i < 0x186a0; i++)
    a[i] = a[i - 0x1] + i + 0x1;
var b = [0x1];
function a0_0x410b(cBSARy, key) {
    var stringArray = a0_0x5997();
    a0_0x410b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x410b(cBSARy, key);
}
function a0_0x5997() {
    var _0x2121b7 = [
        'min',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'shift'
    ];
    a0_0x5997 = function () {
        return _0x2121b7;
    };
    return a0_0x5997();
}
var i = 0x1;
while (!![]) {
    b[i] = b[i - 0x1] + a[i];
    if (b[i] > 0x186a0)
        break;
    i++;
}
var dpA = [];
var dpB = [];
for (var i = 0x0; i < 0x186a0; i++)
    dpA[i] = Infinity;
for (var i = 0x0; i < 0x186a0; i++)
    dpB[i] = Infinity;
dpA[0x0] = 0x0;
dpB[0x0] = 0x0;
for (var i = 0x0; i < 0x186a0; i++) {
    for (var j = 0x0; j < b['length']; j++) {
        if (i - b[j] >= 0x0)
            dpA[i] = Math[a0_0x32925d(0x0)](dpA[i - b[j]] + 0x1, dpA[i]);
        if (b[j] % 0x2 == 0x1 && i - b[j] >= 0x0)
            dpB[i] = Math[a0_0x32925d(0x0)](dpB[i - b[j]] + 0x1, dpB[i]);
    }
}
var input = require('fs')[a0_0x32925d(0x1)](a0_0x32925d(0x2), a0_0x32925d(0x3));
var arr = input[a0_0x32925d(0x4)]()[a0_0x32925d(0x5)]('\x0a')[a0_0x32925d(0x6)](Number);
while (!![]) {
    var n = arr[a0_0x32925d(0x7)]();
    if (n == 0x0)
        break;
    console['log'](dpA[n] + '\x20' + dpB[n]);
}