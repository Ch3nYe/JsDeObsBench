var a0_0x286fa8 = a0_0xdc40;
function Main(arg) {
    var _0x2d2f4a = a0_0xdc40;
    var N = arg[_0x2d2f4a(0x0)]('\x0a')[0x0];
    if (N === 'Sunny') {
        console[_0x2d2f4a(0x1)](_0x2d2f4a(0x2));
    } else if (N === _0x2d2f4a(0x2)) {
        console[_0x2d2f4a(0x1)](_0x2d2f4a(0x3));
    } else if (N === 'Rainy') {
        console['log'](_0x2d2f4a(0x4));
    }
}
function a0_0xdc40(ELdGPa, key) {
    var stringArray = a0_0x5337();
    a0_0xdc40 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdc40(ELdGPa, key);
}
function a0_0x5337() {
    var _0x112d7b = [
        'split',
        'log',
        'Cloudy',
        'Rainy',
        'Sunny',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5337 = function () {
        return _0x112d7b;
    };
    return a0_0x5337();
}
Main(require('fs')[a0_0x286fa8(0x5)](a0_0x286fa8(0x6), a0_0x286fa8(0x7)));