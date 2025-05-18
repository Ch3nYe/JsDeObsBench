function a0_0x3b1b(htIMei, key) {
    var stringArray = a0_0x4c43();
    a0_0x3b1b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b1b(htIMei, key);
}
var a0_0x1b3d87 = a0_0x3b1b;
var input = require('fs')[a0_0x1b3d87(0x0)](a0_0x1b3d87(0x1), a0_0x1b3d87(0x2));
function a0_0x4c43() {
    var _0x3e4ce4 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'forEach',
        'split',
        'map',
        'filter',
        'log',
        'YES'
    ];
    a0_0x4c43 = function () {
        return _0x3e4ce4;
    };
    return a0_0x4c43();
}
var Arr = input[a0_0x1b3d87(0x3)]()['split']('\x0a');
Arr[a0_0x1b3d87(0x4)](function (v) {
    var _0x10df1d = a0_0x3b1b;
    var arr = v[_0x10df1d(0x5)]('\x20')[_0x10df1d(0x6)](Number);
    var m = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7,
        0x8,
        0x9,
        0xa
    ];
    m = m[_0x10df1d(0x7)](function (v) {
        return v != arr[0x0] || v != arr[0x1] || v != arr[0x2];
    });
    var y = 0x0;
    var n = 0x0;
    m[_0x10df1d(0x4)](function (v) {
        arr[0x0] + arr[0x1] + v <= 0x14 ? y++ : n++;
    });
    console[_0x10df1d(0x8)](y >= n ? _0x10df1d(0x9) : 'NO');
});