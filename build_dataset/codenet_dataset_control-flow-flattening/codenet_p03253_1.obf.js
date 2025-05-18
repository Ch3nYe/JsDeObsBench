console['log']((args => {
    const Aibgga = {
        'hGPhZ': function (x, y) {
            return x < y;
        },
        'iGbVH': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'aaSiz': function (x, y) {
            return x - y;
        },
        'wtazm': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'YUbNQ': function (x, y) {
            return x % y;
        },
        'GBVbo': function (x, y) {
            return x | y;
        },
        'EVDgR': function (x, y) {
            return x / y;
        },
        'hQGlO': function (x, y) {
            return x - y;
        },
        'hhWyU': function (x, y) {
            return x <= y;
        },
        'RicIZ': function (x, y) {
            return x === y;
        },
        'pjzRW': function (x, y) {
            return x % y;
        },
        'YBUts': function (x, y) {
            return x + y;
        },
        'FTtml': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    let [N, M] = args['trim']()['split']` `['map'](v => v | 0x0);
    const MOD = 0x3b9aca00 + 0x7;
    const d = new Map();
    for (let i = 0x2; Aibgga['hhWyU'](i, M); i++) {
        if (Aibgga['YUbNQ'](M, i))
            continue;
        let k = 0x0;
        do {
            k++;
            M /= i;
        } while (Aibgga['RicIZ'](Aibgga['pjzRW'](M, i), 0x0));
        d['set'](i, k);
    }
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const {
        fac: fac,
        finv: finv
    } = (max => {
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
        for (let i = 0x2; Aibgga['hGPhZ'](i, max); i++) {
            fac['push'](Aibgga['iGbVH'](mul, fac[i - 0x1], i));
            inv['push'](Aibgga['aaSiz'](MOD, Aibgga['wtazm'](mul, inv[Aibgga['YUbNQ'](MOD, i)], Aibgga['GBVbo'](Aibgga['EVDgR'](MOD, i), 0x0))));
            finv['push'](Aibgga['wtazm'](mul, finv[Aibgga['hQGlO'](i, 0x1)], inv[i]));
        }
        return {
            'fac': fac,
            'finv': finv
        };
    })(Aibgga['YBUts'](N, N));
    const nCr = (n, r) => mul(fac[n], mul(finv[r], finv[n - r]));
    let c = 0x1;
    for (const [, i] of d)
        c = Aibgga['iGbVH'](mul, c, Aibgga['FTtml'](nCr, Aibgga['hQGlO'](Aibgga['YBUts'](i, N), 0x1), Aibgga['aaSiz'](N, 0x1)));
    return '' + c;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));