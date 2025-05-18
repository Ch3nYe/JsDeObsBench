function a0_0x488b(WxatUm, key) {
    var stringArray = a0_0x1a32();
    a0_0x488b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x488b(WxatUm, key);
}
var a0_0x126a1f = a0_0x488b;
function Main(input) {
    var _0x35eb26 = a0_0x488b;
    input = input[_0x35eb26(0x0)]('\x0a')[0x0][_0x35eb26(0x0)]('\x20');
    if (Math[_0x35eb26(0x1)](input[0x0] - input[0x1]) < Math['abs'](input[0x0] - input[0x2]))
        console[_0x35eb26(0x2)]('A');
    else
        console[_0x35eb26(0x2)]('B');
}
function a0_0x1a32() {
    var _0x4c4cfc = [
        'split',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1a32 = function () {
        return _0x4c4cfc;
    };
    return a0_0x1a32();
}
Main(require('fs')[a0_0x126a1f(0x3)](a0_0x126a1f(0x4), a0_0x126a1f(0x5)));