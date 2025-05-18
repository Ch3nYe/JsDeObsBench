'use strict';
function Main(input) {
    var _0x1828e7 = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
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
        _0x1828e7(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x12dc00('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x12dc00();
            }
        })();
    }());
    input = input['split'](/\s+/);
    var H = input['shift']() - 0x0;
    var W = input['shift']() - 0x0;
    var N = input['shift']() - 0x0;
    var sr = input['shift']() - 0x0;
    var sc = input['shift']() - 0x0;
    var S = input['shift']();
    var T = input['shift']();
    var dp = [[
            sc,
            sc,
            sr,
            sr
        ]];
    for (let i = 0x0; i < N; i++) {
        dp[i + 0x1] = [];
        dp[i + 0x1][0x0] = dp[i][0x0] - (S[i] === 'L' ? 0x1 : 0x0);
        dp[i + 0x1][0x1] = dp[i][0x1] + (S[i] === 'R' ? 0x1 : 0x0);
        dp[i + 0x1][0x2] = dp[i][0x2] - (S[i] === 'U' ? 0x1 : 0x0);
        dp[i + 0x1][0x3] = dp[i][0x3] + (S[i] === 'D' ? 0x1 : 0x0);
        if (dp[i + 0x1][0x0] === 0x0 || dp[i + 0x1][0x1] === W + 0x1 || dp[i + 0x1][0x2] === 0x0 || dp[i + 0x1][0x3] === H + 0x1) {
            console['log']('NO');
            return;
        }
        dp[i + 0x1][0x0] = Math['min'](dp[i + 0x1][0x0] + (T[i] === 'R' ? 0x1 : 0x0), W);
        dp[i + 0x1][0x1] = Math['max'](dp[i + 0x1][0x1] - (T[i] === 'L' ? 0x1 : 0x0), 0x1);
        dp[i + 0x1][0x2] = Math['min'](dp[i + 0x1][0x2] + (T[i] === 'D' ? 0x1 : 0x0), H);
        dp[i + 0x1][0x3] = Math['max'](dp[i + 0x1][0x3] - (T[i] === 'U' ? 0x1 : 0x0), 0x1);
    }
    console['log']('YES');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x12dc00(ret) {
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