const a0_0x4d4382 = a0_0x4ef8;
function a0_0x30b7() {
    const _0x1103de = [
        'log',
        'split',
        'map',
        'XGnfZ',
        'FGwPb',
        'push',
        'sort',
        'slice',
        'reduce',
        'eaEja',
        'UvfcL',
        'pop',
        'length',
        'ezWZu',
        'uUysQ',
        'rqXig',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x30b7 = function () {
        return _0x1103de;
    };
    return a0_0x30b7();
}
function a0_0x4ef8(WbLNix, key) {
    const stringArray = a0_0x30b7();
    a0_0x4ef8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4ef8(WbLNix, key);
}
console[a0_0x4d4382(0x0)]((args => {
    const _0xafc52d = a0_0x4ef8;
    const [[N, K], A] = args['trim']()[_0xafc52d(0x1)]('\x0a')['map'](r => r[_0xafc52d(0x1)]('\x20')[_0xafc52d(0x2)](v => v | 0x0));
    let Am = [], Ap = [];
    for (let i = 0x0; i < N; i++) {
        if (_0xafc52d(0x3) === _0xafc52d(0x4)) {
            ap[_0xafc52d(0x5)](Ap[op]);
            op++;
        } else {
            if (A[i] > 0x0)
                Ap[_0xafc52d(0x5)](A[i]);
            if (A[i] < 0x0)
                Am[_0xafc52d(0x5)](A[i]);
        }
    }
    const MOD = BigInt(0x3b9aca00 + 0x7), mul = (a, b) => (BigInt(a) * BigInt(b) % MOD + MOD) % MOD;
    Am[_0xafc52d(0x6)]((a, b) => a - b);
    Ap['sort']((a, b) => b - a);
    if (Ap['length'] === 0x0 && K & 0x1)
        return '' + Am[_0xafc52d(0x7)](-K)[_0xafc52d(0x8)](mul, 0x1);
    let om = 0x0, op = 0x0, ap = [], am = [];
    for (let i = 0x0; i < K; i++) {
        if (_0xafc52d(0x9) === _0xafc52d(0x9)) {
            if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
                ap[_0xafc52d(0x5)](Ap[op]);
                op++;
            } else {
                if ('OAVHz' !== _0xafc52d(0xa)) {
                    am[_0xafc52d(0x5)](Am[om]);
                    om++;
                } else {
                    if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
                        ap[_0xafc52d(0x5)](Ap[op]);
                        am[_0xafc52d(0xb)]();
                    } else {
                        am[_0xafc52d(0x5)](Am[om]);
                        ap[_0xafc52d(0xb)]();
                    }
                }
            }
        } else {
            am[_0xafc52d(0x5)](Am[om]);
            om++;
        }
    }
    if (am[_0xafc52d(0xc)] & 0x1) {
        if (_0xafc52d(0xd) === _0xafc52d(0xe)) {
            am[_0xafc52d(0x5)](Am[om]);
            ap[_0xafc52d(0xb)]();
        } else {
            if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
                if ('qPABJ' === _0xafc52d(0xf)) {
                    ap[_0xafc52d(0x5)](Ap[op]);
                    am['pop']();
                } else {
                    ap[_0xafc52d(0x5)](Ap[op]);
                    am[_0xafc52d(0xb)]();
                }
            } else {
                am['push'](Am[om]);
                ap[_0xafc52d(0xb)]();
            }
        }
    }
    return '' + mul(ap[_0xafc52d(0x8)](mul, 0x1), am[_0xafc52d(0x8)](mul, 0x1));
})(require('fs')['readFileSync'](a0_0x4d4382(0x10), a0_0x4d4382(0x11))));