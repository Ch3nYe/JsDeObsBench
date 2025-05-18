'use strict';
function main(input) {
    const _0x5f4ddc = (function () {
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
        _0x5f4ddc(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x106e13('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x106e13();
            }
        })();
    }());
    const inputs = input['split']('\x0a');
    const L = Number(inputs[0x0]);
    const A = [];
    for (let i = 0x0; i < L; i++) {
        A['push'](Number(inputs[i + 0x1]));
    }
    const dp = Array(L + 0x1)['fill']()['map'](() => Array(0x5)['fill']());
    dp[0x0] = [
        0x0,
        0x0,
        0x0,
        0x0,
        0x0
    ];
    for (let i = 0x1; i <= L; i++) {
        let cur = A[i - 0x1];
        let curEven = A[i - 0x1] === 0x0 ? 0x2 : cur % 0x2;
        let curOdd = (cur + 0x1) % 0x2;
        dp[i][0x0] = dp[i - 0x1][0x0] + cur;
        dp[i][0x1] = Math['min'](dp[i - 0x1][0x0], dp[i - 0x1][0x1]) + curEven;
        dp[i][0x2] = Math['min'](dp[i - 0x1][0x0], dp[i - 0x1][0x1], dp[i - 0x1][0x2]) + curOdd;
        dp[i][0x3] = Math['min'](dp[i - 0x1][0x2], dp[i - 0x1][0x3]) + curEven;
        dp[i][0x4] = Math['min'](dp[i - 0x1][0x2], dp[i - 0x1][0x3], dp[i - 0x1][0x4]) + cur;
    }
    console['log'](Math['min'](...dp[L]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x106e13(ret) {
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