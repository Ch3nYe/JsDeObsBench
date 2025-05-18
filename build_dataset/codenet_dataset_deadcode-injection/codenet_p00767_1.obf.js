var a0_0x51c01e = a0_0xe1c9;
function a0_0xe1c9(QsUgKT, key) {
    var stringArray = a0_0x4220();
    a0_0xe1c9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe1c9(QsUgKT, key);
}
function HW() {
    var _0xba3bf9 = a0_0xe1c9;
    var arr = [];
    for (var i = 0x1; i < 0x96; i++) {
        for (var j = i + 0x1; j <= 0x96; j++) {
            arr[_0xba3bf9(0x0)]([
                i,
                j,
                i * i + j * j
            ]);
        }
    }
    arr['sort'](function (a, b) {
        if (a[0x2] == b[0x2])
            return a[0x0] - b[0x0];
        else
            return a[0x2] - b[0x2];
    });
    return arr;
}
var Rectangles = HW();
function a0_0x4220() {
    var _0xed62b = [
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'length',
        'log'
    ];
    a0_0x4220 = function () {
        return _0xed62b;
    };
    return a0_0x4220();
}
var input = require('fs')[a0_0x51c01e(0x1)](a0_0x51c01e(0x2), a0_0x51c01e(0x3));
var Arr = input[a0_0x51c01e(0x4)]()['split']('\x0a');
while (!![]) {
    var hw = Arr[a0_0x51c01e(0x5)]()[a0_0x51c01e(0x6)]('\x20')[a0_0x51c01e(0x7)](Number);
    var h = hw[0x0];
    var w = hw[0x1];
    if (h == 0x0 && w == 0x0)
        break;
    var num = h * h + w * w;
    for (var i = 0x0; i < Rectangles[a0_0x51c01e(0x8)]; i++) {
        if (Rectangles[i][0x0] == h && Rectangles[i][0x1] == w)
            break;
    }
    console[a0_0x51c01e(0x9)](Rectangles[i + 0x1][0x0] + '\x20' + Rectangles[i + 0x1][0x1]);
}