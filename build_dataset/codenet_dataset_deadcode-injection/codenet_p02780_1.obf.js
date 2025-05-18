'use strict';
function a0_0x27dc(OhzXJm, key) {
    const stringArray = a0_0x2070();
    a0_0x27dc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x27dc(OhzXJm, key);
}
function a0_0x2070() {
    const _0x258c8d = [
        'trim',
        'split',
        'map',
        'log',
        'toFixed',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2070 = function () {
        return _0x258c8d;
    };
    return a0_0x2070();
}
const a0_0x2c4475 = a0_0x27dc;
const fact = n => {
    if (n === 0x1)
        0x1;
    return n + fact(n - 0x1);
};
function Main(input) {
    const _0xdf6896 = a0_0x27dc;
    input = input[_0xdf6896(0x0)]()[_0xdf6896(0x1)]('\x0a');
    const array = input[0x0][_0xdf6896(0x1)]('\x20')['map'](s => parseInt(s));
    const N = array[0x0];
    const K = array[0x1];
    let A = input[0x1][_0xdf6896(0x1)]('\x20')[_0xdf6896(0x2)](s => parseInt(s));
    let dp = {};
    for (let i = 0x0; i < N; ++i) {
        const a = A[i];
        if (dp[a])
            continue;
        let tmp = 0x0;
        for (let j = a; j > 0x0; --j) {
            tmp += j;
        }
        dp[a] = tmp;
    }
    let result = 0x0;
    for (let i = 0x0; i < N - (K - 0x1); ++i) {
        let total = 0x0;
        for (let j = i; j < i + K; ++j) {
            total += dp[A[j]] * 0x1 / A[j];
        }
        result = Math['max'](total, result);
    }
    console[_0xdf6896(0x3)](result[_0xdf6896(0x4)](0xc));
}
Main(require('fs')['readFileSync'](a0_0x2c4475(0x5), a0_0x2c4475(0x6)));