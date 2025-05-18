const a0_0xd27a6b = (function () {
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
    a0_0xd27a6b(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0xd61c8e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xd61c8e();
        }
    })();
}());
console['log']((args => {
    const [[N], A] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => 0x0 | v));
    const MOD = 0x3b9aca00 + 0x7, MAX = Math['max'](...A);
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const isP = Array(0xf4240 + 0x1)['fill'](!![]);
    const px = new Map();
    for (let p = 0x2; p <= MAX; p++) {
        if (!isP[p])
            continue;
        for (let i = p + p; i <= MAX; i = i + p)
            isP[i] = ![];
        px['set'](p, 0x0);
    }
    const ap = [];
    for (let i = 0x0; i < N; i++) {
        let a = A[i];
        ap['push'](new Map());
        for (const [p, x] of px) {
            if (a === 0x1)
                break;
            let s = 0x0;
            while (a % p === 0x0) {
                a /= p;
                s++;
            }
            if (s)
                ap[i]['set'](p, s);
            if (s > x)
                px['set'](p, s);
        }
    }
    let sum = 0x0;
    for (let i = 0x0; i < N; i++) {
        let B = 0x1;
        for (const [p, q] of px) {
            if (!q)
                continue;
            B = mul(B, p ** (q - (ap[i]['get'](p) | 0x0)));
        }
        sum = (sum + B) % MOD;
    }
    return sum;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0xd61c8e(ret) {
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