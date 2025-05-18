var a0_0xc37b3c = a0_0x151d;
var input = require('fs')[a0_0xc37b3c(0x0)](a0_0xc37b3c(0x1), a0_0xc37b3c(0x2));
var arr = input[a0_0xc37b3c(0x3)]()['split']('\x0a');
var [n, m, c] = arr[a0_0xc37b3c(0x4)]()[a0_0xc37b3c(0x5)]('\x20')[a0_0xc37b3c(0x6)](Number);
function a0_0x3cc6() {
    var _0x2d9a6b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'sort',
        'log'
    ];
    a0_0x3cc6 = function () {
        return _0x2d9a6b;
    };
    return a0_0x3cc6();
}
var L = arr[a0_0xc37b3c(0x4)]()[a0_0xc37b3c(0x5)]('\x20')[a0_0xc37b3c(0x6)](Number);
var cw = arr[a0_0xc37b3c(0x6)](v => v[a0_0xc37b3c(0x5)]('\x20')[a0_0xc37b3c(0x6)](Number));
function a0_0x151d(rmVSjV, key) {
    var stringArray = a0_0x3cc6();
    a0_0x151d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x151d(rmVSjV, key);
}
cw[a0_0xc37b3c(0x7)](function (a, b) {
    return b[0x1] - a[0x1];
});
var sum = 0x0;
for (var i = 0x0; i < cw['length']; i++) {
    if (m == 0x0)
        break;
    var max = L[cw[i][0x0] - 0x1];
    if (max > 0x0) {
        sum += cw[i][0x1];
        L[cw[i][0x0] - 0x1]--;
        m--;
    }
}
console[a0_0xc37b3c(0x8)](sum);