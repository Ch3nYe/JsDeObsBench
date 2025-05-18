var a0_0x1359b9 = a0_0x3b9a;
var input = require('fs')[a0_0x1359b9(0x0)]('/dev/stdin', 'utf8');
var arr = input[a0_0x1359b9(0x1)]()[a0_0x1359b9(0x2)]('\x0a');
var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
var yx = [];
for (var i = 0x0; i < h; i++) {
    yx[i] = arr[a0_0x1359b9(0x3)]()[a0_0x1359b9(0x2)]('\x20')['map'](v => 0x1 - (v - 0x0));
}
function a0_0x3b9a(SAPupE, key) {
    var stringArray = a0_0xe5a5();
    a0_0x3b9a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b9a(SAPupE, key);
}
for (var y = 0x1; y < h; y++) {
    for (var x = 0x1; x < w; x++) {
        if (yx[y][x] == 0x1)
            yx[y][x] = Math[a0_0x1359b9(0x4)](yx[y - 0x1][x], yx[y][x - 0x1], yx[y - 0x1][x - 0x1]) + 0x1;
    }
}
function a0_0xe5a5() {
    var _0x58cebf = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'min',
        'max',
        'log'
    ];
    a0_0xe5a5 = function () {
        return _0x58cebf;
    };
    return a0_0xe5a5();
}
var max = 0x0;
for (var y = 0x0; y < h; y++) {
    for (var x = 0x0; x < w; x++) {
        max = Math[a0_0x1359b9(0x5)](max, yx[y][x]);
    }
}
console[a0_0x1359b9(0x6)](max * max);