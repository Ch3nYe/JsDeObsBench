var a0_0x4b590d = a0_0xef1d;
function a0_0x1800() {
    var _0x5a98c5 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'sort',
        'length',
        'keys',
        'log'
    ];
    a0_0x1800 = function () {
        return _0x5a98c5;
    };
    return a0_0x1800();
}
var input = require('fs')[a0_0x4b590d(0x0)]('/dev/stdin', a0_0x4b590d(0x1));
var arr = input[a0_0x4b590d(0x2)]()[a0_0x4b590d(0x3)]('\x0a');
var n = arr[a0_0x4b590d(0x4)]() - 0x0;
var a = arr[a0_0x4b590d(0x4)]()[a0_0x4b590d(0x3)]('\x20')[a0_0x4b590d(0x5)](Number);
var b = a['slice']()[a0_0x4b590d(0x6)]((x, y) => x - y);
var q = arr[a0_0x4b590d(0x4)]() - 0x0;
var xy = arr['map'](v => v[a0_0x4b590d(0x3)]('\x20')[a0_0x4b590d(0x5)](Number)[a0_0x4b590d(0x5)](v => v - 0x1));
xy['unshift']([
    0x0,
    0x0
]);
var A = {};
function a0_0xef1d(zUNczv, key) {
    var stringArray = a0_0x1800();
    a0_0xef1d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xef1d(zUNczv, key);
}
var B = {};
for (var i = 0x0; i < a[a0_0x4b590d(0x7)]; i++) {
    if (a[i] != b[i]) {
        A[i] = a[i];
        B[i] = b[i];
    }
}
var BB = '';
for (var k in B)
    BB += B[k];
var flag = ![];
for (var i = 0x0; i <= q; i++) {
    [A[xy[i][0x0]], A[xy[i][0x1]]] = [
        A[xy[i][0x1]],
        A[xy[i][0x0]]
    ];
    var AA = '';
    for (var k in A)
        AA += A[k];
    if (AA == BB) {
        flag = !![];
        break;
    }
}
if (Object[a0_0x4b590d(0x8)](A)[a0_0x4b590d(0x7)] == 0x0)
    console['log'](0x0);
else if (flag)
    console[a0_0x4b590d(0x9)](i);
else
    console[a0_0x4b590d(0x9)](-0x1);