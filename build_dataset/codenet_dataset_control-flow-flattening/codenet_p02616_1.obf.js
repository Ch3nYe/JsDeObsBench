console['log']((args => {
    const JXdGlf = {
        'JGneF': function (x, y) {
            return x > y;
        },
        'UKZoS': function (callee, param1) {
            return callee(param1);
        },
        'pJJdw': function (x, y) {
            return x & y;
        },
        'NpTKQ': function (x, y) {
            return x < y;
        },
        'QcJAP': function (x, y) {
            return x | y;
        },
        'fsPhX': function (x, y) {
            return x | y;
        },
        'MRgYK': function (x, y) {
            return x & y;
        },
        'TlXqm': function (x, y) {
            return x > y;
        },
        'rFtXl': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    const [[N, K], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    let Am = [], Ap = [];
    for (let i = 0x0; i < N; i++) {
        if (JXdGlf['JGneF'](A[i], 0x0))
            Ap['push'](A[i]);
        if (A[i] < 0x0)
            Am['push'](A[i]);
    }
    const MOD = JXdGlf['UKZoS'](BigInt, 0x3b9aca00 + 0x7), mul = (a, b) => (BigInt(a) * BigInt(b) % MOD + MOD) % MOD;
    Am['sort']((a, b) => a - b);
    Ap['sort']((a, b) => b - a);
    if (Ap['length'] === 0x0 && JXdGlf['pJJdw'](K, 0x1))
        return '' + Am['slice'](-K)['reduce'](mul, 0x1);
    let om = 0x0, op = 0x0, ap = [], am = [];
    for (let i = 0x0; JXdGlf['NpTKQ'](i, K); i++) {
        if (JXdGlf['JGneF'](JXdGlf['QcJAP'](Ap[op], 0x0), -JXdGlf['fsPhX'](Am[om], 0x0))) {
            ap['push'](Ap[op]);
            op++;
        } else {
            am['push'](Am[om]);
            om++;
        }
    }
    if (JXdGlf['MRgYK'](am['length'], 0x1)) {
        if (JXdGlf['TlXqm'](Ap[op] | 0x0, -JXdGlf['fsPhX'](Am[om], 0x0))) {
            ap['push'](Ap[op]);
            am['pop']();
        } else {
            am['push'](Am[om]);
            ap['pop']();
        }
    }
    return '' + JXdGlf['rFtXl'](mul, ap['reduce'](mul, 0x1), am['reduce'](mul, 0x1));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));