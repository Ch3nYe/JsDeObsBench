function a0_0x25c8(YYbdXQ, key) {
    var stringArray = a0_0x838f();
    a0_0x25c8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25c8(YYbdXQ, key);
}
var a0_0x41027a = a0_0x25c8;
function Main(input) {
    var _0x408b97 = a0_0x25c8;
    var joy = 0x0;
    joy += Math[_0x408b97(0x0)](input / 0x1f4) * 0x3e8;
    joy += Math[_0x408b97(0x0)](input % 0x1f4 / 0x5) * 0x5;
    console[_0x408b97(0x1)](joy);
}
Main(require('fs')['readFileSync'](a0_0x41027a(0x2), a0_0x41027a(0x3)));
function a0_0x838f() {
    var _0x3f9388 = [
        'floor',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x838f = function () {
        return _0x3f9388;
    };
    return a0_0x838f();
}