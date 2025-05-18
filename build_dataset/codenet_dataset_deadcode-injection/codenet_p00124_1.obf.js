var a0_0x42627d = a0_0x5246;
var input = require('fs')[a0_0x42627d(0x0)](a0_0x42627d(0x1), a0_0x42627d(0x2));
function a0_0x2981() {
    var _0xdaa642 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'log',
        'push',
        'sort',
        'forEach',
        'floor'
    ];
    a0_0x2981 = function () {
        return _0xdaa642;
    };
    return a0_0x2981();
}
var Arr = input[a0_0x42627d(0x3)]()[a0_0x42627d(0x4)]('\x0a');
function a0_0x5246(OtfxEu, key) {
    var stringArray = a0_0x2981();
    a0_0x5246 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5246(OtfxEu, key);
}
var I = 0x0;
while (!![]) {
    var n = Arr[a0_0x42627d(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    if (I != 0x0)
        console[a0_0x42627d(0x6)]('');
    I++;
    var rank = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x42627d(0x5)]()[a0_0x42627d(0x4)]('\x20');
        var score = 0x3 * (arr[0x1] - 0x0) + (arr[0x3] - 0x0) + (0xa - i) * 0.01;
        rank[a0_0x42627d(0x7)]([
            arr[0x0],
            score
        ]);
    }
    rank[a0_0x42627d(0x8)](function (a, b) {
        a = a[0x1];
        b = b[0x1];
        return b - a;
    });
    rank[a0_0x42627d(0x9)](function (v) {
        var _0x549cc2 = a0_0x5246;
        console['log'](v[0x0] + ',' + Math[_0x549cc2(0xa)](v[0x1]));
    });
}