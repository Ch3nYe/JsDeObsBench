'use strict';
function Main(input) {
    const _0x2c18e5 = (function () {
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
        _0x2c18e5(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x38166e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x38166e();
            }
        })();
    }());
    let lines = input['split']('\x0a');
    let NX = lines['shift']()['trim']()['split'](/\s/)['map'](v => v - 0x0);
    let n = NX[0x0], x = NX[0x1];
    let S = lines['shift']()['trim']()['split'](/\s/)['map'](v => v - 0x0);
    const MOD = 0x3b9aca00 + 0x7, MAX_N = 0xd2, MAX_VAL = 0x186a0 + 0xa;
    const add = (a, b) => (a + b) % MOD;
    const mul = (a, b) => a * b % MOD;
    let dp = new Array(MAX_N)['fill'](0x0)['map'](() => new Array(MAX_VAL)['fill'](-0x1));
    const rec = (pos, rem) => {
        if (pos == n)
            return rem;
        let ret = dp[pos][rem];
        if (ret != -0x1)
            return ret;
        ret = 0x0;
        dp[pos][rem] = add(ret, rec(pos + 0x1, rem % S[pos]));
        dp[pos][rem] = add(dp[pos][rem], mul(n - pos - 0x1, rec(pos + 0x1, rem)));
        return dp[pos][rem];
    };
    S['sort']((a, b) => b - a);
    console['log'](rec(0x0, x));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x38166e(ret) {
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