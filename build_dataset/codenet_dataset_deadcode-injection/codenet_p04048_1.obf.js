function a0_0x36da(zsYeir, key) {
    var stringArray = a0_0x28ea();
    a0_0x36da = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x36da(zsYeir, key);
}
var a0_0x3e3cf1 = a0_0x36da;
function a0_0x28ea() {
    var _0x3576ad = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x28ea = function () {
        return _0x3576ad;
    };
    return a0_0x28ea();
}
function Main(data) {
    var _0x59aaa2 = a0_0x36da;
    data = data[_0x59aaa2(0x0)]('\x20');
    data[0x0] = Number(data[0x0]);
    data[0x1] = Number(data[0x1]);
    var a = data[0x1] + (data[0x0] - data[0x1]) + (data[0x0] - (data[0x0] - data[0x1])) * 0x2 + (data[0x0] - data[0x1] - (data[0x0] - (data[0x0] - data[0x1]))) * 0x3;
    console[_0x59aaa2(0x1)](a);
}
Main(require('fs')[a0_0x3e3cf1(0x2)](a0_0x3e3cf1(0x3), a0_0x3e3cf1(0x4)));