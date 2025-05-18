function a0_0x2994(SweHaK, key) {
    var stringArray = a0_0x277d();
    a0_0x2994 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2994(SweHaK, key);
}
var a0_0x1de81d = a0_0x2994;
var input = require('fs')[a0_0x1de81d(0x0)](a0_0x1de81d(0x1), 'utf8');
var arr = input[a0_0x1de81d(0x2)]()[a0_0x1de81d(0x3)]('\x0a');
function a0_0x277d() {
    var _0x54b195 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        '0\x200',
        'shift',
        'map',
        'forEach',
        'max',
        'log'
    ];
    a0_0x277d = function () {
        return _0x54b195;
    };
    return a0_0x277d();
}
while (!![]) {
    if (arr[0x0] == a0_0x1de81d(0x4))
        break;
    var nm = arr['shift']()[a0_0x1de81d(0x3)]('\x20')['map'](Number);
    var point = [];
    for (var i = 0x0; i < nm[0x0]; i++)
        point[i] = [
            0x0,
            0x0
        ];
    for (var i = 0x0; i < nm[0x1]; i++) {
        var c = arr[a0_0x1de81d(0x5)]()['split']('\x20')[a0_0x1de81d(0x6)](Number);
        var s = c[a0_0x1de81d(0x5)]();
        var k = c[a0_0x1de81d(0x5)]();
        if (k == 0x1)
            point[c[0x0] - 0x1][0x0] += s;
        c[a0_0x1de81d(0x7)](function (v, i) {
            point[v - 0x1][0x1] += s;
        });
    }
    var max = 0x0;
    for (var i = 0x0; i < nm[0x0]; i++) {
        for (var j = 0x0; j < nm[0x0]; j++) {
            if (i == j)
                continue;
            max = Math[a0_0x1de81d(0x8)](max, point[i][0x1] - point[j][0x0]);
        }
    }
    console[a0_0x1de81d(0x9)](max + 0x1);
}