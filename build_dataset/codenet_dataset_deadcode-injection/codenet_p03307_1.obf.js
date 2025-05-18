function a0_0x1d3b(EugbPB, key) {
    var stringArray = a0_0x4ae9();
    a0_0x1d3b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d3b(EugbPB, key);
}
var a0_0x218dca = a0_0x1d3b;
function Main(input) {
    var _0x5df691 = a0_0x1d3b;
    input = input[_0x5df691(0x0)]('\x20');
    X = 0x2;
    N = input[_0x5df691(0x1)](input => parseInt(input, 0xa));
    if (N % X == 0x0) {
        console[_0x5df691(0x2)](N[0x0]);
    } else {
        var ans = N[0x0] * X;
        console[_0x5df691(0x2)](ans);
    }
}
Main(require('fs')[a0_0x218dca(0x3)](a0_0x218dca(0x4), a0_0x218dca(0x5)));
function a0_0x4ae9() {
    var _0x3b04d = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4ae9 = function () {
        return _0x3b04d;
    };
    return a0_0x4ae9();
}