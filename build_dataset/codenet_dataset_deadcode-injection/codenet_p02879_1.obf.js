var a0_0x511a58 = a0_0x45dd;
function Main(input) {
    var _0x967911 = a0_0x45dd;
    var input = input[_0x967911(0x0)]('\x20');
    var a = Number(input[0x0]);
    var b = Number(input[0x1]);
    if (a > 0x9 || b > 0x9) {
        console[_0x967911(0x1)](-0x1);
        return;
    }
    var result = a * b;
    console['log'](result);
}
function a0_0x45dd(lZPERM, key) {
    var stringArray = a0_0x5e71();
    a0_0x45dd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45dd(lZPERM, key);
}
Main(require('fs')[a0_0x511a58(0x2)](a0_0x511a58(0x3), a0_0x511a58(0x4)));
function a0_0x5e71() {
    var _0x1d9c46 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5e71 = function () {
        return _0x1d9c46;
    };
    return a0_0x5e71();
}