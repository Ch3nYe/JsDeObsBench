const a0_0xe92cae = (function () {
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
    a0_0xe92cae(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x80d2dd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x80d2dd();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function pow(x, n) {
    let res = 0x1;
    while (n > 0x0) {
        if (n & 0x1)
            res = mul(res, x);
        x = mul(x, x);
        n >>= 0x1;
    }
    return res;
}
function inv(x) {
    if (x == 0x1)
        return 0x1;
    return pow(x, mod - 0x2);
}
function mul(a, b) {
    return ((a >> 0x10) * b % mod * 0x10000 + (a & 0xffff) * b) % mod;
}
const mod = 0x3b800001;
(input => {
    const lines = input['split']('\x0a');
    let [N, M, K] = lines[0x0]['split']('\x20')['map'](Number);
    let ans = 0x0;
    let fa = 0x1;
    let fa2 = 0x1;
    for (let k = 0x0; k <= K; k++) {
        fa = fa * (k || 0x1) % mod;
        fa2 = fa2 * (k ? N - k : 0x1) % mod;
        let left = mul(fa2, inv(fa)) % mod;
        ans += mul(left, pow(M - 0x1, N - (k + 0x1))) * M % mod;
    }
    console['log'](ans % mod);
})(input);
function a0_0x80d2dd(ret) {
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