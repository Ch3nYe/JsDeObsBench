var a0_0x1e1d3f = a0_0x1540;
(function (stringArrayFunction, comparisonValue) {
    var _0x10cb64 = a0_0x1540;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10cb64(0x125)) / 0x1 + -parseInt(_0x10cb64(0x124)) / 0x2 + parseInt(_0x10cb64(0x11f)) / 0x3 * (-parseInt(_0x10cb64(0x128)) / 0x4) + parseInt(_0x10cb64(0x120)) / 0x5 * (parseInt(_0x10cb64(0x12a)) / 0x6) + -parseInt(_0x10cb64(0x121)) / 0x7 * (parseInt(_0x10cb64(0x126)) / 0x8) + -parseInt(_0x10cb64(0x11c)) / 0x9 + -parseInt(_0x10cb64(0x127)) / 0xa * (-parseInt(_0x10cb64(0x11d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e59, 0xc8d64));
function a0_0x1e59() {
    var _0x41f46e = [
        '1316596wcuQVM',
        '1928pPRrhA',
        '33699910ClNzxT',
        '2644sPdCbw',
        'min',
        '24DPsYTO',
        'readFileSync',
        'split',
        'map',
        '3133557wvPcFM',
        '11XUpjRB',
        'shift',
        '246gpyhrF',
        '77710bpZmCN',
        '2569DZFxDC',
        '/dev/stdin',
        'utf8',
        '1604226BWrbpF'
    ];
    a0_0x1e59 = function () {
        return _0x41f46e;
    };
    return a0_0x1e59();
}
var input = require('fs')[a0_0x1e1d3f(0x119)](a0_0x1e1d3f(0x122), a0_0x1e1d3f(0x123));
var arr = input['trim']()[a0_0x1e1d3f(0x11a)]('\x0a');
var [h, w] = arr[a0_0x1e1d3f(0x11e)]()['split']('\x20')[a0_0x1e1d3f(0x11b)](Number);
function a0_0x1540(djWbxG, key) {
    var stringArray = a0_0x1e59();
    a0_0x1540 = function (index, key) {
        index = index - 0x119;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1540(djWbxG, key);
}
var yx = [];
for (var i = 0x0; i < h; i++) {
    yx[i] = arr[a0_0x1e1d3f(0x11e)]()['split']('\x20')[a0_0x1e1d3f(0x11b)](v => 0x1 - (v - 0x0));
}
for (var y = 0x1; y < h; y++) {
    for (var x = 0x1; x < w; x++) {
        if (yx[y][x] == 0x1)
            yx[y][x] = Math[a0_0x1e1d3f(0x129)](yx[y - 0x1][x], yx[y][x - 0x1], yx[y - 0x1][x - 0x1]) + 0x1;
    }
}
var max = 0x0;
for (var y = 0x0; y < h; y++) {
    for (var x = 0x0; x < w; x++) {
        max = Math['max'](max, yx[y][x]);
    }
}
console['log'](max * max);