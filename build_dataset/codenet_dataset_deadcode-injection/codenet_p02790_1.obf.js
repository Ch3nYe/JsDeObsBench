var a0_0x4cca9a = a0_0x4cc6;
function a0_0x4cc6(vRxUkc, key) {
    var stringArray = a0_0x5b02();
    a0_0x4cc6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cc6(vRxUkc, key);
}
function a0_0x5b02() {
    var _0x3ba162 = [
        'split',
        'log',
        'toString',
        'repeat',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5b02 = function () {
        return _0x3ba162;
    };
    return a0_0x5b02();
}
function Main(arg) {
    var _0x39c9a2 = a0_0x4cc6;
    var a = arg['split']('\x0a')[0x0][_0x39c9a2(0x0)]('\x20')[0x0] - 0x0;
    var b = arg['split']('\x0a')[0x0]['split']('\x20')[0x1] - 0x0;
    if (a < b) {
        console[_0x39c9a2(0x1)](a[_0x39c9a2(0x2)]()[_0x39c9a2(0x3)](b));
    } else {
        console[_0x39c9a2(0x1)](b[_0x39c9a2(0x2)]()[_0x39c9a2(0x3)](a));
    }
    return;
}
Main(require('fs')[a0_0x4cca9a(0x4)](a0_0x4cca9a(0x5), a0_0x4cca9a(0x6)));