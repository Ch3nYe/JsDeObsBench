const a0_0x5f54b6 = a0_0x1aa6;
(function (stringArrayFunction, comparisonValue) {
    const _0x56615f = a0_0x1aa6;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x56615f(0x112)) / 0x1 + -parseInt(_0x56615f(0x119)) / 0x2 + parseInt(_0x56615f(0x10f)) / 0x3 * (parseInt(_0x56615f(0x115)) / 0x4) + parseInt(_0x56615f(0x118)) / 0x5 * (parseInt(_0x56615f(0x10d)) / 0x6) + parseInt(_0x56615f(0x114)) / 0x7 * (parseInt(_0x56615f(0x110)) / 0x8) + -parseInt(_0x56615f(0x116)) / 0x9 + parseInt(_0x56615f(0x10e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5564, 0xb2115));
const input = require('fs')['readFileSync'](a0_0x5f54b6(0x117), a0_0x5f54b6(0x10b));
function pow(x, n) {
    let res = 0x1;
    while (n > 0x0) {
        if (n & 0x1)
            res = mul(res, x);
        x = mul(x, x);
        n >>= 0x1;
    }
    return res;
}
function a0_0x5564() {
    const _0x346c9a = [
        '69KgWPHT',
        '7280QRWvgF',
        'log',
        '1168037YRAqsR',
        'split',
        '7945uIsIjG',
        '99956ujYIOO',
        '11926251SpxHRW',
        '/dev/stdin',
        '5xtMWRe',
        '1980416cLNsFn',
        'utf8',
        'map',
        '4497132LgJIbf',
        '18556300qhhbHx'
    ];
    a0_0x5564 = function () {
        return _0x346c9a;
    };
    return a0_0x5564();
}
function inv(x) {
    if (x == 0x1)
        return 0x1;
    return pow(x, mod - 0x2);
}
function mul(a, b) {
    return ((a >> 0x10) * b % mod * 0x10000 + (a & 0xffff) * b) % mod;
}
const mod = 0x3b800001;
function a0_0x1aa6(aebceG, key) {
    const stringArray = a0_0x5564();
    a0_0x1aa6 = function (index, key) {
        index = index - 0x10b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1aa6(aebceG, key);
}
(input => {
    const _0x2f0e42 = a0_0x5f54b6;
    const lines = input[_0x2f0e42(0x113)]('\x0a');
    let [N, M, K] = lines[0x0][_0x2f0e42(0x113)]('\x20')[_0x2f0e42(0x10c)](Number);
    let ans = 0x0;
    let fa = 0x1;
    let fa2 = 0x1;
    for (let k = 0x0; k <= K; k++) {
        fa = fa * (k || 0x1) % mod;
        fa2 = fa2 * (k ? N - k : 0x1) % mod;
        let left = mul(fa2, inv(fa)) % mod;
        ans += mul(left, pow(M - 0x1, N - (k + 0x1))) * M % mod;
    }
    console[_0x2f0e42(0x111)](ans % mod);
})(input);