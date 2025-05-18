console['log']((args => {
    const WPBTHr = {
        'oMhlS': function (callee, param1) {
            return callee(param1);
        },
        'tsaOb': function (x, y) {
            return x + y;
        },
        'ABzXm': function (x, y) {
            return x <= y;
        },
        'vbZpX': function (x, y) {
            return x + y;
        },
        'zSRWg': function (x, y) {
            return x <= y;
        },
        'ISINS': function (x, y) {
            return x < y;
        },
        'sHcsL': function (x, y) {
            return x === y;
        },
        'SPDoK': function (x, y) {
            return x === y;
        },
        'ZGlyM': function (x, y) {
            return x % y;
        },
        'hnBqW': function (x, y) {
            return x > y;
        },
        'JUZcf': function (x, y) {
            return x < y;
        },
        'KOMIx': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'kpHRs': function (x, y) {
            return x ** y;
        },
        'RVyaq': function (x, y) {
            return x - y;
        }
    };
    const [[N], A] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => 0x0 | v));
    const MOD = 0x3b9aca00 + 0x7, MAX = Math['max'](...A);
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const isP = WPBTHr['oMhlS'](Array, WPBTHr['tsaOb'](0xf4240, 0x1))['fill'](!![]);
    const px = new Map();
    for (let p = 0x2; WPBTHr['ABzXm'](p, MAX); p++) {
        if (!isP[p])
            continue;
        for (let i = WPBTHr['vbZpX'](p, p); WPBTHr['zSRWg'](i, MAX); i = WPBTHr['vbZpX'](i, p))
            isP[i] = ![];
        px['set'](p, 0x0);
    }
    const ap = [];
    for (let i = 0x0; WPBTHr['ISINS'](i, N); i++) {
        let a = A[i];
        ap['push'](new Map());
        for (const [p, x] of px) {
            if (WPBTHr['sHcsL'](a, 0x1))
                break;
            let s = 0x0;
            while (WPBTHr['SPDoK'](WPBTHr['ZGlyM'](a, p), 0x0)) {
                a /= p;
                s++;
            }
            if (s)
                ap[i]['set'](p, s);
            if (WPBTHr['hnBqW'](s, x))
                px['set'](p, s);
        }
    }
    let sum = 0x0;
    for (let i = 0x0; WPBTHr['JUZcf'](i, N); i++) {
        let B = 0x1;
        for (const [p, q] of px) {
            if (!q)
                continue;
            B = WPBTHr['KOMIx'](mul, B, WPBTHr['kpHRs'](p, WPBTHr['RVyaq'](q, ap[i]['get'](p) | 0x0)));
        }
        sum = WPBTHr['ZGlyM'](WPBTHr['vbZpX'](sum, B), MOD);
    }
    return sum;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));