var a0_0x38a240 = a0_0x1041;
var input = require('fs')[a0_0x38a240(0x0)](a0_0x38a240(0x1), a0_0x38a240(0x2));
var arr = input[a0_0x38a240(0x3)]()['split']('\x0a');
function a0_0x1041(ZttAJn, key) {
    var stringArray = a0_0x11b0();
    a0_0x1041 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1041(ZttAJn, key);
}
arr = arr[a0_0x38a240(0x4)](v => v['split']('\x20')[a0_0x38a240(0x4)](Number));
var n = arr[a0_0x38a240(0x5)]();
var c = arr['shift']();
function a0_0x11b0() {
    var _0x5d5040 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'shift',
        'length',
        'log'
    ];
    a0_0x11b0 = function () {
        return _0x5d5040;
    };
    return a0_0x11b0();
}
var q = arr[a0_0x38a240(0x5)]();
var apple = [];
for (var i = 0x0; i <= n; i++)
    apple[i] = 0x0;
var ans = 0x0;
for (var i = 0x0; i < arr[a0_0x38a240(0x6)]; i++) {
    var [t, x, d] = arr[i];
    if (t == 0x1) {
        apple[x] += d;
        if (c[x - 0x1] < apple[x]) {
            ans = x;
            break;
        }
    } else {
        if (apple[x] < d) {
            ans = x;
            break;
        } else {
            apple[x] -= d;
        }
    }
}
console[a0_0x38a240(0x7)](ans);