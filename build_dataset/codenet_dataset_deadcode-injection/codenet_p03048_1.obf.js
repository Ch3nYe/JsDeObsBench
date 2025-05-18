function a0_0x520f(LwrSde, key) {
    var stringArray = a0_0x4a3d();
    a0_0x520f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x520f(LwrSde, key);
}
var a0_0x1342c6 = a0_0x520f;
function main(input) {
    var _0x4294fc = a0_0x520f;
    const args = input[_0x4294fc(0x0)]('\x20');
    const R = parseInt(args[0x0], 0xa), G = parseInt(args[0x1], 0xa), B = parseInt(args[0x2], 0xa), N = parseInt(args[0x3], 0xa);
    var s = 0x0;
    var k = 0x0;
    for (var i = 0x0; i <= (N / R | 0x0); ++i) {
        for (var j = 0x0; j <= (N / G | 0x0); ++j) {
            k = (N - i * R - j * G) / B | 0x0;
            if (k >= 0x0 && i * R + j * G + k * B == N)
                ++s;
        }
    }
    console['log'](s);
}
main(require('fs')[a0_0x1342c6(0x1)](a0_0x1342c6(0x2), a0_0x1342c6(0x3)));
function a0_0x4a3d() {
    var _0x407751 = [
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4a3d = function () {
        return _0x407751;
    };
    return a0_0x4a3d();
}