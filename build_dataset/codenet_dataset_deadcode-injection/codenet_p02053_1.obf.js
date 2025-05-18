var a0_0x560f65 = a0_0x2605;
function a0_0x2141() {
    var _0x2bc067 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'forEach',
        'push',
        'length',
        'abs',
        'max',
        'log'
    ];
    a0_0x2141 = function () {
        return _0x2bc067;
    };
    return a0_0x2141();
}
var input = require('fs')[a0_0x560f65(0x0)](a0_0x560f65(0x1), a0_0x560f65(0x2));
var arr = input[a0_0x560f65(0x3)]()[a0_0x560f65(0x4)]('\x0a');
var [h, w] = arr[a0_0x560f65(0x5)]()[a0_0x560f65(0x4)]('\x20')[a0_0x560f65(0x6)](Number);
function a0_0x2605(xWhNph, key) {
    var stringArray = a0_0x2141();
    a0_0x2605 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2605(xWhNph, key);
}
var b = [];
for (var i = 0x0; i < h; i++) {
    var two = [];
    arr[i][a0_0x560f65(0x4)]('')[a0_0x560f65(0x7)]((v, j) => {
        var _0x1a8c60 = a0_0x2605;
        if (v == 'B')
            two[_0x1a8c60(0x8)]([
                i,
                j
            ]);
    });
    if (two[a0_0x560f65(0x9)] == 0x1)
        b[a0_0x560f65(0x8)](two[0x0]);
    else if (two[a0_0x560f65(0x9)] >= 0x2)
        b[a0_0x560f65(0x8)](two[0x0], two[two['length'] - 0x1]);
}
var max = 0x0;
for (var i = 0x0; i < b[a0_0x560f65(0x9)]; i++) {
    for (var j = i + 0x1; j < b[a0_0x560f65(0x9)]; j++) {
        var d = Math[a0_0x560f65(0xa)](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
        max = Math[a0_0x560f65(0xb)](max, d);
    }
}
console[a0_0x560f65(0xc)](max);