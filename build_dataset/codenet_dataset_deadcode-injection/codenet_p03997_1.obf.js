function a0_0x2242(xpUYwD, key) {
    var stringArray = a0_0x30ce();
    a0_0x2242 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2242(xpUYwD, key);
}
var a0_0x8974ae = a0_0x2242;
function a0_0x30ce() {
    var _0x4acefe = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x30ce = function () {
        return _0x4acefe;
    };
    return a0_0x30ce();
}
function Main(input) {
    var _0x16e24c = a0_0x2242;
    input = input[_0x16e24c(0x0)]('\x0a');
    input[0x0] = Number(input[0x0]);
    input[0x1] = Number(input[0x1]);
    input[0x2] = Number(input[0x2]);
    console[_0x16e24c(0x1)]((input[0x0] + input[0x1]) * input[0x2] / 0x2);
}
Main(require('fs')[a0_0x8974ae(0x2)](a0_0x8974ae(0x3), a0_0x8974ae(0x4)));