var a0_0x19a758 = a0_0x1b7b;
var input = require('fs')[a0_0x19a758(0x0)](a0_0x19a758(0x1), a0_0x19a758(0x2));
var arr = input[a0_0x19a758(0x3)]()[a0_0x19a758(0x4)]('\x0a');
function a0_0x59e6() {
    var _0x97f05d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'forEach',
        'log'
    ];
    a0_0x59e6 = function () {
        return _0x97f05d;
    };
    return a0_0x59e6();
}
var n = arr['shift']() - 0x0;
var p = arr[a0_0x19a758(0x5)]()[a0_0x19a758(0x4)]('\x20')[a0_0x19a758(0x6)](Number);
var ans = 0x0;
function a0_0x1b7b(PNefZR, key) {
    var stringArray = a0_0x59e6();
    a0_0x1b7b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b7b(PNefZR, key);
}
for (var i = 0x1; i <= 0x64; i++) {
    var cnt = 0x0;
    p[a0_0x19a758(0x7)](v => {
        if (v >= i)
            cnt++;
    });
    if (cnt >= i)
        ans = i;
}
console[a0_0x19a758(0x8)](ans);