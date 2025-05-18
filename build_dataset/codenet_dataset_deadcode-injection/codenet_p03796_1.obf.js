function a0_0x25bf(juSHHU, key) {
    var stringArray = a0_0x4265();
    a0_0x25bf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25bf(juSHHU, key);
}
var a0_0x3bc48e = a0_0x25bf;
process[a0_0x3bc48e(0x0)][a0_0x3bc48e(0x1)]();
process[a0_0x3bc48e(0x0)][a0_0x3bc48e(0x2)]('utf8');
function Main(input) {
    var _0x2d74fb = a0_0x25bf;
    var tmp = input[_0x2d74fb(0x3)]('\x0a');
    var N = Number(tmp[0x0]);
    var pow = 0x1;
    for (var i = 0x1; i <= N; i++) {
        pow *= i;
        pow %= 0x3b9aca07;
    }
    console['log'](pow);
}
Main(require('fs')[a0_0x3bc48e(0x4)](a0_0x3bc48e(0x5), a0_0x3bc48e(0x6)));
function a0_0x4265() {
    var _0x27bc43 = [
        'stdin',
        'resume',
        'setEncoding',
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4265 = function () {
        return _0x27bc43;
    };
    return a0_0x4265();
}