const a0_0x569d31 = a0_0x129a;
console[a0_0x569d31(0x0)]((args => {
    const _0x1c5db0 = a0_0x129a;
    let [N, M] = args[_0x1c5db0(0x1)]()['split']` `['map'](v => v | 0x0);
    const MOD = 0x3b9aca00 + 0x7;
    const d = new Map();
    for (let i = 0x2; i <= M; i++) {
        if (M % i)
            continue;
        let k = 0x0;
        do {
            k++;
            M /= i;
        } while (M % i === 0x0);
        d['set'](i, k);
    }
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const {
        fac: fac,
        finv: finv
    } = (max => {
        const _0x3002a6 = a0_0x129a;
        const fac = [
                0x1,
                0x1
            ], inv = [
                0x0,
                0x1
            ], finv = [
                0x1,
                0x1
            ];
        for (let i = 0x2; i < max; i++) {
            fac[_0x3002a6(0x2)](mul(fac[i - 0x1], i));
            inv['push'](MOD - mul(inv[MOD % i], MOD / i | 0x0));
            finv['push'](mul(finv[i - 0x1], inv[i]));
        }
        return {
            'fac': fac,
            'finv': finv
        };
    })(N + N);
    const nCr = (n, r) => mul(fac[n], mul(finv[r], finv[n - r]));
    let c = 0x1;
    for (const [, i] of d)
        c = mul(c, nCr(i + N - 0x1, N - 0x1));
    return '' + c;
})(require('fs')[a0_0x569d31(0x3)]('/dev/stdin', a0_0x569d31(0x4))));
function a0_0x129a(oLmHen, key) {
    const stringArray = a0_0x5140();
    a0_0x129a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x129a(oLmHen, key);
}
function a0_0x5140() {
    const _0x3aa3fb = [
        'log',
        'trim',
        'push',
        'readFileSync',
        'utf8'
    ];
    a0_0x5140 = function () {
        return _0x3aa3fb;
    };
    return a0_0x5140();
}