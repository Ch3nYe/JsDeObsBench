'use strict';
const fact = n => {
    if (n === 0x1)
        0x1;
    return n + fact(n - 0x1);
};
function Main(input) {
    const _0x449486 = (function () {
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
        _0x449486(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xe4416f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xe4416f();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const array = input[0x0]['split']('\x20')['map'](s => parseInt(s));
    const N = array[0x0];
    const K = array[0x1];
    let A = input[0x1]['split']('\x20')['map'](s => parseInt(s));
    let dp = {};
    for (let i = 0x0; i < N; ++i) {
        const a = A[i];
        if (dp[a])
            continue;
        let tmp = 0x0;
        for (let j = a; j > 0x0; --j) {
            tmp += j;
        }
        dp[a] = tmp;
    }
    let result = 0x0;
    for (let i = 0x0; i < N - (K - 0x1); ++i) {
        let total = 0x0;
        for (let j = i; j < i + K; ++j) {
            total += dp[A[j]] * 0x1 / A[j];
        }
        result = Math['max'](total, result);
    }
    console['log'](result['toFixed'](0xc));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xe4416f(ret) {
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