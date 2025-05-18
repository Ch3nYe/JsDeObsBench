'use strict';
(function (input) {
    const _0x1aa394 = (function () {
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
        _0x1aa394(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xcebfd4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xcebfd4();
            }
        })();
    }());
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    const N = input['shift']();
    const K = input['shift']();
    const A = input;
    const dp = new Array(K + 0x2)['fill']('tbd');
    dp[K + 0x1] = !![];
    for (let i = K + 0x1; i >= 0x0; i--) {
        if (dp[i])
            if (dp[i - 0x1] === !![]) {
                i--;
                continue;
            }
        for (let j = 0x1; j <= A[0x0]; j++)
            if (i - j >= 0x0)
                if (dp[i - j] === 'tbd')
                    dp[i - j] = ![];
        if (!dp[i])
            for (let a = 0x0; a < N; a++)
                if (i - A[a] >= 0x0)
                    dp[i - A[a]] = !![];
    }
    if (dp[0x0])
        console['log']('First');
    else
        console['log']('Second');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0xcebfd4(ret) {
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