var a0_0x2fd75c = a0_0x5745;
var input = require('fs')[a0_0x2fd75c(0x0)](a0_0x2fd75c(0x1), a0_0x2fd75c(0x2));
function a0_0x5745(lQQTgF, key) {
    var stringArray = a0_0x4140();
    a0_0x5745 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5745(lQQTgF, key);
}
function a0_0x4140() {
    var _0x25b20f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'map',
        'toFixed',
        'YES',
        'apply'
    ];
    a0_0x4140 = function () {
        return _0x25b20f;
    };
    return a0_0x4140();
}
var Arr = input[a0_0x2fd75c(0x3)]()[a0_0x2fd75c(0x4)]('\x0a');
for (i = 0x0; i < Arr[a0_0x2fd75c(0x5)]; i++) {
    var arr = Arr[i][a0_0x2fd75c(0x4)]('\x20')[a0_0x2fd75c(0x6)](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var _0x512cfc = a0_0x5745;
        var k1;
        var k2;
        if (x2 - x1 !== 0x0)
            k1 = ((y2 - y1) / (x2 - x1))[_0x512cfc(0x7)](0xb);
        else
            k1 = Infinity;
        if (x4 - x3 !== 0x0)
            k2 = (y4 - y3) / (x4 - x3)[_0x512cfc(0x7)](0xb);
        else
            k2 = Infinity;
        var ans = 'NO';
        if (k1 == 0x0 && k2 == Infinity)
            ans = _0x512cfc(0x8);
        if (k2 == 0x0 && k1 == Infinity)
            ans = _0x512cfc(0x8);
        if (k1 == -0x1 * k2 && (k1 != 0x0 && k2 != 0x0))
            ans = _0x512cfc(0x8);
        console['log'](ans);
    }[a0_0x2fd75c(0x9)](null, arr));
}