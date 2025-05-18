const a0_0x4e69ae = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x4e69ae(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0xaaa7a0('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xaaa7a0();
        }
    })();
}());
console['log']((args => {
    let [N, M] = args['trim']()['split']` `['map'](v => v | 0x0);
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
            fac['push'](mul(fac[i - 0x1], i));
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
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0xaaa7a0(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}