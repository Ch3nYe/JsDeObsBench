var a0_0x1673f2 = a0_0x15f4;
function a0_0x28ab() {
    var _0x3ed221 = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'map',
        'min',
        'log'
    ];
    a0_0x28ab = function () {
        return _0x3ed221;
    };
    return a0_0x28ab();
}
var input = require('fs')[a0_0x1673f2(0x0)]('/dev/stdin', a0_0x1673f2(0x1));
var arr = input['trim']()[a0_0x1673f2(0x2)]('\x0a');
var n = arr['shift']() - 0x0;
var p = arr[a0_0x1673f2(0x3)]()[a0_0x1673f2(0x2)]('\x20')['map'](Number);
var t = arr[a0_0x1673f2(0x3)]()[a0_0x1673f2(0x2)]('\x20')[a0_0x1673f2(0x4)](Number);
var s = [];
for (var i = 0x0; i <= 0xc8; i++)
    s[i] = Infinity;
s[0x0] = 0x0;
for (var i = 0x0; i <= 0x64; i++) {
    if (s[i] == Infinity)
        continue;
    s[i + t[0x0]] = Math['min'](s[i] + p[0x0], s[i + t[0x0]]);
    s[i + t[0x1]] = Math[a0_0x1673f2(0x5)](s[i] + p[0x1], s[i + t[0x1]]);
    s[i + t[0x2]] = Math[a0_0x1673f2(0x5)](s[i] + p[0x2], s[i + t[0x2]]);
    s[i + t[0x3]] = Math[a0_0x1673f2(0x5)](s[i] + p[0x3], s[i + t[0x3]]);
}
var min = Infinity;
function a0_0x15f4(ADhJfK, key) {
    var stringArray = a0_0x28ab();
    a0_0x15f4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15f4(ADhJfK, key);
}
for (var i = n; i <= 0xc8; i++)
    min = Math[a0_0x1673f2(0x5)](min, s[i]);
console[a0_0x1673f2(0x6)](min);