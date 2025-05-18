function a0_0x2c0e() {
    var _0x5e7d8b = [
        'toString',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2c0e = function () {
        return _0x5e7d8b;
    };
    return a0_0x2c0e();
}
function a0_0x4039(eEaGjt, key) {
    var stringArray = a0_0x2c0e();
    a0_0x4039 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4039(eEaGjt, key);
}
var a0_0x3b6f27 = a0_0x4039;
(function (stdin) {
    var _0x3732dc = a0_0x4039;
    var lines = stdin[_0x3732dc(0x0)]()[_0x3732dc(0x1)]('\x20');
    var x = parseInt(lines[0x0], 0xa);
    var y = parseInt(lines[0x1], 0xa);
    console[_0x3732dc(0x2)](x * y, (x + y) * 0x2);
}(require('fs')[a0_0x3b6f27(0x3)](a0_0x3b6f27(0x4), a0_0x3b6f27(0x5))));