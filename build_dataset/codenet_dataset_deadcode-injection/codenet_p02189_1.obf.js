var a0_0x136db8 = a0_0x4455;
function a0_0x4455(lCRePX, key) {
    var stringArray = a0_0x2e25();
    a0_0x4455 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4455(lCRePX, key);
}
var input = require('fs')[a0_0x136db8(0x0)](a0_0x136db8(0x1), 'utf8');
var arr = input[a0_0x136db8(0x2)]()[a0_0x136db8(0x3)]('\x0a');
var n = arr[a0_0x136db8(0x4)]() - 0x0;
var a = arr[a0_0x136db8(0x4)]()[a0_0x136db8(0x3)]('\x20')[a0_0x136db8(0x5)](Number);
var min = Infinity;
var ans = -0x1;
for (var i = 0x0; i < n; i++) {
    if (min > a[i]) {
        ans = i;
        min = a[i];
    }
}
function a0_0x2e25() {
    var _0x4782b2 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x2e25 = function () {
        return _0x4782b2;
    };
    return a0_0x2e25();
}
console[a0_0x136db8(0x6)](ans + 0x1);