const a0_0x9c2674 = a0_0xa260;
function Main(input) {
    const _0x199e39 = a0_0xa260;
    const Param = input[_0x199e39(0x0)]('\x20');
    const N = i(Param[0x0]);
    const M = i(Param[0x1]);
    const K = i(Param[0x2]);
    for (var n = 0x0; n < N; n++) {
        for (var m = 0x0; m < M; m++) {
            var b = calcBlack(n, m, N, M);
            if (b == K)
                return console['log'](_0x199e39(0x1));
        }
    }
    console[_0x199e39(0x2)]('No');
}
function calcBlack(n, m, N, M) {
    return N * n - m * n + (M * m - n * m);
}
function i(x) {
    return parseInt(x, 0xa);
}
function a0_0xa260(trVTrn, key) {
    const stringArray = a0_0x5b14();
    a0_0xa260 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa260(trVTrn, key);
}
Main(require('fs')[a0_0x9c2674(0x3)](a0_0x9c2674(0x4), a0_0x9c2674(0x5)));
function a0_0x5b14() {
    const _0x4cbe87 = [
        'split',
        'Yes',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5b14 = function () {
        return _0x4cbe87;
    };
    return a0_0x5b14();
}