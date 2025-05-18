function a0_0x1941() {
    var _0x440e47 = [
        'split',
        'sqrt',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1941 = function () {
        return _0x440e47;
    };
    return a0_0x1941();
}
var a0_0x1f7ab5 = a0_0xe9ed;
function Main(input) {
    var _0x20e96f = a0_0xe9ed;
    input = input[_0x20e96f(0x0)]('\x0a');
    const N = parseInt(input[0x0], 0xa);
    for (var i = 0x1; i > 0x0; i++) {
        var n = 0.5 * (Math[_0x20e96f(0x1)](0x8 * N * i + 0x1) - 0x1);
        if (Number['isInteger'](n) == !![]) {
            console[_0x20e96f(0x2)](n);
            break;
        }
    }
}
function a0_0xe9ed(SjAHKs, key) {
    var stringArray = a0_0x1941();
    a0_0xe9ed = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe9ed(SjAHKs, key);
}
Main(require('fs')[a0_0x1f7ab5(0x3)](a0_0x1f7ab5(0x4), a0_0x1f7ab5(0x5)));