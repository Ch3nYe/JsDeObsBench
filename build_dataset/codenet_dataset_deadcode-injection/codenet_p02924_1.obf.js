function a0_0x4118() {
    var _0x449f04 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4118 = function () {
        return _0x449f04;
    };
    return a0_0x4118();
}
var a0_0x30604c = a0_0xb721;
function a0_0xb721(dFsHzG, key) {
    var stringArray = a0_0x4118();
    a0_0xb721 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb721(dFsHzG, key);
}
function Main(input) {
    var _0x36b3f1 = a0_0xb721;
    input = input[_0x36b3f1(0x0)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var count = 0x0;
    if (n != 0x1) {
        for (var i = 0x1; i < n; i++) {
            count += i % (i + 0x1);
        }
    }
    console[_0x36b3f1(0x1)]('%s', count);
}
Main(require('fs')[a0_0x30604c(0x2)](a0_0x30604c(0x3), a0_0x30604c(0x4)));