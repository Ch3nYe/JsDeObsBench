function a0_0x15c1(KLOoQw, key) {
    const stringArray = a0_0xfd0e();
    a0_0x15c1 = function (index, key) {
        index = index - 0x16b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x15c1(KLOoQw, key);
}
const a0_0x23c8b7 = a0_0x15c1;
function a0_0xfd0e() {
    const _0x51945e = [
        '1379UbSlrJ',
        '3359065xUMjBW',
        '1492312QtBqKh',
        'set',
        '10HCLadQ',
        'log',
        '3642930wjJMHe',
        'split',
        '63585401ZxYMQn',
        '130624qkxlnB',
        '1579741oBgUBP',
        '/dev/stdin',
        'utf8',
        '4BpSPMU',
        'push',
        '198wUDEzE',
        '12012UOIkxD'
    ];
    a0_0xfd0e = function () {
        return _0x51945e;
    };
    return a0_0xfd0e();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2a97c6 = a0_0x15c1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2a97c6(0x178)) / 0x1 + -parseInt(_0x2a97c6(0x170)) / 0x2 + -parseInt(_0x2a97c6(0x174)) / 0x3 + parseInt(_0x2a97c6(0x17b)) / 0x4 * (-parseInt(_0x2a97c6(0x16f)) / 0x5) + -parseInt(_0x2a97c6(0x16d)) / 0x6 * (parseInt(_0x2a97c6(0x16e)) / 0x7) + parseInt(_0x2a97c6(0x177)) / 0x8 * (-parseInt(_0x2a97c6(0x16c)) / 0x9) + -parseInt(_0x2a97c6(0x172)) / 0xa * (-parseInt(_0x2a97c6(0x176)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xfd0e, 0xc6f0d));
console[a0_0x23c8b7(0x173)]((args => {
    const _0x2b2030 = a0_0x23c8b7;
    let [N, M] = args['trim']()[_0x2b2030(0x175)]` `['map'](v => v | 0x0);
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
        d[_0x2b2030(0x171)](i, k);
    }
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const {
        fac: fac,
        finv: finv
    } = (max => {
        const _0x23c363 = _0x2b2030;
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
            fac[_0x23c363(0x16b)](mul(fac[i - 0x1], i));
            inv[_0x23c363(0x16b)](MOD - mul(inv[MOD % i], MOD / i | 0x0));
            finv[_0x23c363(0x16b)](mul(finv[i - 0x1], inv[i]));
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
})(require('fs')['readFileSync'](a0_0x23c8b7(0x179), a0_0x23c8b7(0x17a))));