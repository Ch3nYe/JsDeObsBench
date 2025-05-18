var a0_0x46ea93 = a0_0x29a0;
var input = require('fs')[a0_0x46ea93(0x0)]('/dev/stdin', a0_0x46ea93(0x1));
var arr = input[a0_0x46ea93(0x2)]()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()[a0_0x46ea93(0x3)]('\x20')[a0_0x46ea93(0x4)](Number);
function a0_0x41f9() {
    var _0x35f834 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'max',
        'log'
    ];
    a0_0x41f9 = function () {
        return _0x35f834;
    };
    return a0_0x41f9();
}
var q = arr['shift']() - 0x0;
function a0_0x29a0(YwOxNE, key) {
    var stringArray = a0_0x41f9();
    a0_0x29a0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x29a0(YwOxNE, key);
}
var s = '';
for (var i = 0x0; i < q; i++) {
    var [c, b, e] = arr[i][a0_0x46ea93(0x3)]('\x20')[a0_0x46ea93(0x4)](Number);
    var m = a[b];
    if (c == 0x0) {
        for (var j = b; j < e; j++)
            m = Math['min'](m, a[j]);
    } else {
        for (var j = b; j < e; j++)
            m = Math[a0_0x46ea93(0x5)](m, a[j]);
    }
    s += m + '\x0a';
}
console[a0_0x46ea93(0x6)](s['trim']());