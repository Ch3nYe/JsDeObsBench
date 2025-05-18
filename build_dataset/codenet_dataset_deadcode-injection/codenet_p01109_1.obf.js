var a0_0x1d31e2 = a0_0x3943;
function a0_0x3943(PTgLFg, key) {
    var stringArray = a0_0x1a78();
    a0_0x3943 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3943(PTgLFg, key);
}
var input = require('fs')[a0_0x1d31e2(0x0)](a0_0x1d31e2(0x1), a0_0x1d31e2(0x2));
var arr = input[a0_0x1d31e2(0x3)]()[a0_0x1d31e2(0x4)]('\x0a');
function a0_0x1a78() {
    var _0x2e2ddc = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'length'
    ];
    a0_0x1a78 = function () {
        return _0x2e2ddc;
    };
    return a0_0x1a78();
}
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var a = arr[a0_0x1d31e2(0x5)]()[a0_0x1d31e2(0x4)]('\x20')['map'](Number);
    var sum = a['reduce']((a, b) => a + b);
    console['log'](a['filter'](v => v <= sum / n)[a0_0x1d31e2(0x6)]);
}