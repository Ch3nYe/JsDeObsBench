var a0_0x32ed4e = a0_0x37c6;
function a0_0x37c6(MUhgwj, key) {
    var stringArray = a0_0x4fff();
    a0_0x37c6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37c6(MUhgwj, key);
}
function Main(input) {
    var _0x32f9d5 = a0_0x37c6;
    var list = [
        0x1,
        0x1,
        0x1,
        0x2,
        0x1,
        0x2,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0x5,
        0x1,
        0x2,
        0x1,
        0xe,
        0x1,
        0x5,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0xf,
        0x2,
        0x2,
        0x5,
        0x4,
        0x1,
        0x4,
        0x1,
        0x33
    ];
    input = parseInt(input);
    if (0x1 <= input && input <= 0x20) {
        console[_0x32f9d5(0x0)](list[input - 0x1]);
    } else {
        console[_0x32f9d5(0x0)](0x0);
    }
}
Main(require('fs')['readFileSync'](a0_0x32ed4e(0x1), a0_0x32ed4e(0x2)));
function a0_0x4fff() {
    var _0x4c97be = [
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4fff = function () {
        return _0x4c97be;
    };
    return a0_0x4fff();
}