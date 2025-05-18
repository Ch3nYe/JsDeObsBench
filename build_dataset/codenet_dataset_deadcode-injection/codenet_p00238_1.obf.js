var a0_0x5a1212 = a0_0x1891;
var input = require('fs')[a0_0x5a1212(0x0)](a0_0x5a1212(0x1), a0_0x5a1212(0x2));
function a0_0x1891(bKCUxz, key) {
    var stringArray = a0_0x458d();
    a0_0x1891 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1891(bKCUxz, key);
}
var Arr = input[a0_0x5a1212(0x3)]()[a0_0x5a1212(0x4)]('\x0a');
function a0_0x458d() {
    var _0x431449 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift'
    ];
    a0_0x458d = function () {
        return _0x431449;
    };
    return a0_0x458d();
}
while (!![]) {
    var t = Arr[a0_0x5a1212(0x5)]() - 0x0;
    if (t == 0x0)
        break;
    var n = Arr['shift']() - 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x5a1212(0x5)]()[a0_0x5a1212(0x4)]('\x20')['map'](Number);
        sum += arr[0x1] - arr[0x0];
    }
    console['log'](t <= sum ? 'OK' : t - sum);
}