var a0_0xef43b1 = a0_0x4e95;
function a0_0x4e95(IqUqMB, key) {
    var stringArray = a0_0x4ac0();
    a0_0x4e95 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e95(IqUqMB, key);
}
function Main(input) {
    var _0x4595d7 = a0_0x4e95;
    input = input[_0x4595d7(0x0)]('\x0a');
    tmp = input[0x0][_0x4595d7(0x0)]('\x20');
    var N = Number(tmp[0x0]);
    var K = Number(tmp[0x1]);
    if (K === 0x1)
        return console[_0x4595d7(0x1)](0x0);
    var current = Math['abs'](N - K);
    N = current;
    while (current >= N) {
        N = current;
        current = Math[_0x4595d7(0x2)](N - K);
    }
    console['log'](current);
}
function a0_0x4ac0() {
    var _0xbb8f68 = [
        'split',
        'log',
        'abs',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4ac0 = function () {
        return _0xbb8f68;
    };
    return a0_0x4ac0();
}
Main(require('fs')[a0_0xef43b1(0x3)](a0_0xef43b1(0x4), a0_0xef43b1(0x5)));