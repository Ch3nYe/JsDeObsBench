function a0_0x27a4() {
    var _0x2f5b82 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push',
        'forEach',
        'sort',
        'map',
        'log',
        'join'
    ];
    a0_0x27a4 = function () {
        return _0x2f5b82;
    };
    return a0_0x27a4();
}
function a0_0x191b(pwHliS, key) {
    var stringArray = a0_0x27a4();
    a0_0x191b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x191b(pwHliS, key);
}
var a0_0x162179 = a0_0x191b;
var input = require('fs')['readFileSync'](a0_0x162179(0x0), a0_0x162179(0x1));
var arr = input[a0_0x162179(0x2)]()[a0_0x162179(0x3)]('\x0a');
var n = arr[a0_0x162179(0x4)]()[a0_0x162179(0x3)]('\x20')[0x0] - 0x0;
var x = [];
for (var i = 0x1; i <= n; i++)
    x[a0_0x162179(0x5)]([
        i,
        -0x1 * i
    ]);
arr[a0_0x162179(0x6)](function (v, i) {
    x[v - 0x0 - 0x1][0x1] = i;
});
x[a0_0x162179(0x7)](function (a, b) {
    return b[0x1] - a[0x1];
});
x = x[a0_0x162179(0x8)](function (v) {
    return v[0x0];
});
console[a0_0x162179(0x9)](x[a0_0x162179(0xa)]('\x0a'));