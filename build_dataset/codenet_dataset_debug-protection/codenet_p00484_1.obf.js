var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nk = arr['shift']()['split']('\x20')['map'](Number);
var n = nk[0x0];
var k = nk[0x1];
var N = [];
for (var i = 0x0; i < n; i++)
    N['push'](arr['shift']()['split']('\x20')['map'](Number));
var dp = [];
for (var i = 0x0; i <= 0xa; i++)
    dp[i] = [];
var DP = [];
for (var i = 0x0; i <= 0xa; i++)
    DP[i] = [];
N['forEach'](function (v) {
    var c = v[0x0];
    var g = v[0x1];
    dp[g]['push'](c);
});
dp['forEach'](function (v, i) {
    v['sort'](function (a, b) {
        return b - a;
    });
    v['forEach'](function (value, j) {
        if (j == 0x0)
            DP[i][j] = dp[i][j];
        if (j > 0x0) {
            dp[i][j] += dp[i][j - 0x1];
            DP[i][j] = dp[i][j] + (j + 0x1) * j;
        }
    });
});
var dp = [];
for (var i = 0x0; i <= n; i++)
    dp[i] = 0x0;
var bomb = function (cnt, start, sum) {
    var _0x4a08a4 = (function () {
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
        _0x4a08a4(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x256d8b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x256d8b();
            }
        })();
    }());
    dp[cnt] = Math['max'](dp[cnt], sum);
    if (sum == k)
        return;
    for (var i = start; i < DP['length']; i++) {
        DP[i]['forEach'](function (v, index) {
            bomb(cnt + (index + 0x1), i + 0x1, sum + v);
        });
    }
};
bomb(0x0, 0x0, 0x0);
console['log'](dp[k]);
function _0x256d8b(ret) {
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