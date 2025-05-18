'use strict';
const ncr = (n, r, mod) => {
    mod = mod || 0x3b9aca00 + 0x7;
    const a = Math['max'](n, r);
    const b = Math['min'](n, r);
    const p = Math['min'](b, a - b);
    const nu = new Array(p + 0x1);
    const de = new Array(p + 0x1);
    let dest = 0x1;
    if (p > 0x0) {
        for (let i = 0x1; i <= p; i++) {
            nu[i] = a - p + i;
            de[i] = i;
        }
        for (let k = 0x2; k <= p; k++) {
            const piv = de[k];
            const j = piv > 0x1 ? -((a - p) % k) : 0x0;
            for (let i = k; i <= p; i += k) {
                nu[i + j] /= piv;
                de[i] /= piv;
            }
        }
        for (let i = 0x1; i <= p; i++) {
            if (nu[i] > 0x1)
                dest = dest * nu[i] % mod;
        }
    }
    return dest;
};
function main(inp) {
    const _0x23c63d = (function () {
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
        _0x23c63d(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4d647f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4d647f();
            }
        })();
    }());
    inp = inp['trim']()['split']('\x20');
    const x = Number(inp[0x0]);
    const y = Number(inp[0x1]);
    let sum = 0x0;
    for (let i = Math['floor'](x / 0x2); i >= 0x0; i--) {
        const a = x - i * 0x2;
        if (a * 0x2 + i === y) {
            sum = ncr(i + a, i);
        }
    }
    console['log'](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4d647f(ret) {
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