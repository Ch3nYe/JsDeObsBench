'use strict';
function Main(input) {
    const _0x169d4c = (function () {
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
        _0x169d4c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5a2f7b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5a2f7b();
            }
        })();
    }());
    input = input['trim']()['split'](/\n/);
    const N = input['shift']() - 0x0;
    const M = Math['pow'](0x2, N);
    const K = Math['pow'](0xa, 0x9) + 0x7;
    input = input['map'](str => str['split'](/\s+/)['map'](x => x - 0x0));
    const Match = input;
    const dp = new Array(N)['fill'](0x0)['map']((x, j) => new Object());
    dp[-0x1] = { 0x0: 0x1 };
    const p = new Array(N)['fill'](0x0)['map']((x, i) => 0x1 << i);
    for (let i = -0x1; i < N - 0x1; i++) {
        Object['keys'](dp[i])['forEach'](function (J) {
            J = J - 0x0;
            dp[i][J] %= K;
            for (let j = 0x0; j < N; j++) {
                if ((J & p[j]) > 0x0)
                    continue;
                if (Match[i + 0x1][j] === 0x0)
                    continue;
                dp[i + 0x1][J + p[j]] = (dp[i + 0x1][J + p[j]] || 0x0) + dp[i][J];
            }
        });
    }
    console['log']((dp[N - 0x1][M - 0x1] || 0x0) % K);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5a2f7b(ret) {
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