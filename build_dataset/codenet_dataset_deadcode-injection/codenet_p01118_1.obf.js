function a0_0x5071(RRXEAq, key) {
    var stringArray = a0_0x2046();
    a0_0x5071 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5071(RRXEAq, key);
}
var a0_0x2b3a21 = a0_0x5071;
var input = require('fs')[a0_0x2b3a21(0x0)](a0_0x2b3a21(0x1), a0_0x2b3a21(0x2));
function a0_0x2046() {
    var _0x2130aa = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'shift',
        'forEach',
        'abs',
        'log'
    ];
    a0_0x2046 = function () {
        return _0x2130aa;
    };
    return a0_0x2046();
}
var arr = input['trim']()[a0_0x2b3a21(0x3)]('\x0a');
while (!![]) {
    var [h, w] = arr['shift']()[a0_0x2b3a21(0x3)]('\x20')[a0_0x2b3a21(0x4)](Number);
    if (h == 0x0 && w == 0x0)
        break;
    var k = {};
    for (var i = 0x0; i < h; i++) {
        var r = arr['shift']()[a0_0x2b3a21(0x3)]('');
        for (var j = 0x0; j < w; j++) {
            k[r[j]] = [
                i,
                j
            ];
        }
    }
    var [s, sum, y, x] = [
        arr[a0_0x2b3a21(0x5)]()[a0_0x2b3a21(0x3)](''),
        0x0,
        0x0,
        0x0
    ];
    s[a0_0x2b3a21(0x6)](v => {
        var _0x2e4984 = a0_0x5071;
        sum += Math[_0x2e4984(0x7)](y - k[v][0x0]) + Math['abs'](x - k[v][0x1]) + 0x1;
        [y, x] = [
            k[v][0x0],
            k[v][0x1]
        ];
    });
    console[a0_0x2b3a21(0x8)](sum);
}