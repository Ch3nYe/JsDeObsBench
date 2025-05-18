'use strict';
const a0_0x1324fa = a0_0x58b9;
function a0_0x58b9(YvsSZD, key) {
    const stringArray = a0_0x1d64();
    a0_0x58b9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x58b9(YvsSZD, key);
}
function Main(input) {
    const _0x19c7a8 = a0_0x58b9;
    const N = parseInt(input);
    let ret = 0x0;
    for (let i = 0x1; i * i < N; i++) {
        const ic = i - 0x1;
        if (ic !== 0x0 && N % ic === Math[_0x19c7a8(0x0)](N / ic)) {
            ret += ic;
        }
        const j = Math[_0x19c7a8(0x0)](N / i) - 0x1;
        if (N % j === i) {
            ret += j;
        }
    }
    console[_0x19c7a8(0x1)](ret);
}
Main(require('fs')[a0_0x1324fa(0x2)](a0_0x1324fa(0x3), 'utf8'));
function a0_0x1d64() {
    const _0x12347b = [
        'trunc',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1d64 = function () {
        return _0x12347b;
    };
    return a0_0x1d64();
}