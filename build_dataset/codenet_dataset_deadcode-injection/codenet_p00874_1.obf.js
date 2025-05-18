var a0_0x1a2af0 = a0_0x32c8;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x1a2af0(0x0));
function a0_0x32c8(EVRRUU, key) {
    var stringArray = a0_0x3aa4();
    a0_0x32c8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x32c8(EVRRUU, key);
}
var arr = input[a0_0x1a2af0(0x1)]()[a0_0x1a2af0(0x2)]('\x0a');
while (!![]) {
    var wd = arr[a0_0x1a2af0(0x3)]();
    if (wd == a0_0x1a2af0(0x4))
        break;
    var W = arr[a0_0x1a2af0(0x3)]()[a0_0x1a2af0(0x2)]('\x20')[a0_0x1a2af0(0x5)](Number);
    var D = arr[a0_0x1a2af0(0x3)]()[a0_0x1a2af0(0x2)]('\x20')['map'](Number);
    var sum = W['reduce'](function (a, b) {
        return a + b;
    });
    D[a0_0x1a2af0(0x6)](function (v) {
        var index = W['indexOf'](v);
        if (index != -0x1)
            W[index] = '';
        else
            sum += v;
    });
    console['log'](sum);
}
function a0_0x3aa4() {
    var _0x2ef16e = [
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'forEach'
    ];
    a0_0x3aa4 = function () {
        return _0x2ef16e;
    };
    return a0_0x3aa4();
}