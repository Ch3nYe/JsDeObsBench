var a0_0x11868c = a0_0xdbc1;
function a0_0xdbc1(csIOUQ, key) {
    var stringArray = a0_0x1ed0();
    a0_0xdbc1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdbc1(csIOUQ, key);
}
function Main(input) {
    var _0xbe895a = a0_0xdbc1;
    input = input['split']('\x0a')['map'](n => parseInt(n, 0xa));
    console[_0xbe895a(0x0)](Math[_0xbe895a(0x1)](input[0x0], 0x2) - input[0x1]);
}
function a0_0x1ed0() {
    var _0x47458b = [
        'log',
        'pow',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1ed0 = function () {
        return _0x47458b;
    };
    return a0_0x1ed0();
}
Main(require('fs')[a0_0x11868c(0x2)](a0_0x11868c(0x3), a0_0x11868c(0x4)));