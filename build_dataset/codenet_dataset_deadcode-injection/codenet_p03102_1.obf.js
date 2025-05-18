function a0_0x4c80(Toinne, key) {
    var stringArray = a0_0x4e74();
    a0_0x4c80 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c80(Toinne, key);
}
var a0_0x2d7c55 = a0_0x4c80;
function Main(input) {
    var _0x992865 = a0_0x4c80;
    input = input[_0x992865(0x0)]('\x0a');
    tmp0 = input[0x0][_0x992865(0x0)]('\x20');
    N = Number(tmp0[0x0]);
    M = Number(tmp0[0x1]);
    C = Number(tmp0[0x2]);
    B = input[0x1][_0x992865(0x0)]('\x20');
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        A = input[0x2 + i][_0x992865(0x0)]('\x20');
        var tmpSum = 0x0;
        for (var j = 0x0; j < M; j++) {
            tmpSum += Number(A[j]) * Number(B[j]);
        }
        if (tmpSum + C > 0x0) {
            ans++;
        }
    }
    console[_0x992865(0x1)](ans);
}
function a0_0x4e74() {
    var _0xdb00c0 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4e74 = function () {
        return _0xdb00c0;
    };
    return a0_0x4e74();
}
Main(require('fs')[a0_0x2d7c55(0x2)](a0_0x2d7c55(0x3), a0_0x2d7c55(0x4)));