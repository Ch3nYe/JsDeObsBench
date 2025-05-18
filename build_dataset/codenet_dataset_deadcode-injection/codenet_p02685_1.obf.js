const a0_0x1c48da = a0_0x3c7e;
const input = require('fs')[a0_0x1c48da(0x0)](a0_0x1c48da(0x1), 'utf8');
function a0_0x5def() {
    const _0x7dce00 = [
        'readFileSync',
        '/dev/stdin',
        'eYSzR',
        'split',
        'map',
        'log'
    ];
    a0_0x5def = function () {
        return _0x7dce00;
    };
    return a0_0x5def();
}
function pow(x, n) {
    const _0x1dec1f = a0_0x3c7e;
    let res = 0x1;
    while (n > 0x0) {
        if (_0x1dec1f(0x2) === _0x1dec1f(0x2)) {
            if (n & 0x1)
                res = mul(res, x);
            x = mul(x, x);
            n >>= 0x1;
        } else {
            if (x == 0x1)
                return 0x1;
            return pow(x, mod - 0x2);
        }
    }
    return res;
}
function inv(x) {
    if (x == 0x1)
        return 0x1;
    return pow(x, mod - 0x2);
}
function a0_0x3c7e(HgjqRp, key) {
    const stringArray = a0_0x5def();
    a0_0x3c7e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3c7e(HgjqRp, key);
}
function mul(a, b) {
    return ((a >> 0x10) * b % mod * 0x10000 + (a & 0xffff) * b) % mod;
}
const mod = 0x3b800001;
(input => {
    const _0x3a9f2c = a0_0x3c7e;
    const lines = input[_0x3a9f2c(0x3)]('\x0a');
    let [N, M, K] = lines[0x0][_0x3a9f2c(0x3)]('\x20')[_0x3a9f2c(0x4)](Number);
    let ans = 0x0;
    let fa = 0x1;
    let fa2 = 0x1;
    for (let k = 0x0; k <= K; k++) {
        fa = fa * (k || 0x1) % mod;
        fa2 = fa2 * (k ? N - k : 0x1) % mod;
        let left = mul(fa2, inv(fa)) % mod;
        ans += mul(left, pow(M - 0x1, N - (k + 0x1))) * M % mod;
    }
    console[_0x3a9f2c(0x5)](ans % mod);
})(input);