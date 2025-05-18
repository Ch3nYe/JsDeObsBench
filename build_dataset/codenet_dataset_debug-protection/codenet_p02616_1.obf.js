const a0_0x297abd = (function () {
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
    a0_0x297abd(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x421098('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x421098();
        }
    })();
}());
console['log']((args => {
    const [[N, K], A] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    let Am = [], Ap = [];
    for (let i = 0x0; i < N; i++) {
        if (A[i] > 0x0)
            Ap['push'](A[i]);
        if (A[i] < 0x0)
            Am['push'](A[i]);
    }
    const MOD = BigInt(0x3b9aca00 + 0x7), mul = (a, b) => (BigInt(a) * BigInt(b) % MOD + MOD) % MOD;
    Am['sort']((a, b) => a - b);
    Ap['sort']((a, b) => b - a);
    if (Ap['length'] === 0x0 && K & 0x1)
        return '' + Am['slice'](-K)['reduce'](mul, 0x1);
    let om = 0x0, op = 0x0, ap = [], am = [];
    for (let i = 0x0; i < K; i++) {
        if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
            ap['push'](Ap[op]);
            op++;
        } else {
            am['push'](Am[om]);
            om++;
        }
    }
    if (am['length'] & 0x1) {
        if ((Ap[op] | 0x0) > -(Am[om] | 0x0)) {
            ap['push'](Ap[op]);
            am['pop']();
        } else {
            am['push'](Am[om]);
            ap['pop']();
        }
    }
    return '' + mul(ap['reduce'](mul, 0x1), am['reduce'](mul, 0x1));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x421098(ret) {
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