'use strict';
const mod = 0x3b9aca00 + 0x7;
function solve(N, K, A) {
    if (K === 0x0) {
        return 0x1;
    }
    var dp = new Array(K + 0x1)['fill'](0x0);
    var prefix = new Array(N)['fill'](0x0)['map'](e => new Array(K + 0x1)['fill'](0x0));
    for (var i = N - 0x1; i >= 0x0; i--) {
        for (var j = 0x0; j <= K; j++) {
            if (i === N - 0x1) {
                dp[j] = j <= A[i] ? 0x1 : 0x0;
                prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
            } else {
                dp[j] = j <= A[i] ? prefix[i + 0x1][j] % mod : prefix[i + 0x1][j] % mod - prefix[i + 0x1][j - A[i] - 0x1] % mod;
                prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
            }
        }
    }
    return dp[K] % mod;
}
function main(input) {
    var _0x4cd6ea = (function () {
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
        _0x4cd6ea(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x351be4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x351be4();
            }
        })();
    }());
    var lines = input['split']('\x0a');
    var NK = lines[0x0]['split']('\x20')['map'](l => parseInt(l));
    var N = NK[0x0];
    var K = NK[0x1];
    var A = lines[0x1]['split']('\x20')['map'](l => parseInt(l));
    var ans = solve(N, K, A);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x351be4(ret) {
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