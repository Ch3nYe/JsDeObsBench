var MAX_VALUE = 0x3e8;
var inputRaw = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var rows = inputRaw['trim']()['split']('\x0a');
var row1 = rows[0x0]['split']('\x20')['map'](Number);
var N = row1[0x0];
var W = row1[0x1];
var list = rows['slice'](0x1)['map'](r => r['split']('\x20')['map'](Number));
var dp = Array['from']({ 'length': N + 0x1 }, _ => Array(N * MAX_VALUE + 0x1)['fill'](0x0));
dp[0x0] = Array(N * MAX_VALUE + 0x1)['fill'](Infinity);
dp[0x0][0x0] = 0x0;
function solve() {
    var _0x2ad9a1 = (function () {
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
        _0x2ad9a1(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2dbe99('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2dbe99();
            }
        })();
    }());
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j <= N * MAX_VALUE; j++) {
            if (list[i][0x1] <= j) {
                var a = dp[i][j - list[i][0x1]] + list[i][0x0];
                var b = dp[i][j];
                dp[i + 0x1][j] = Math['min'](a, b);
            } else {
                dp[i + 0x1][j] = dp[i][j];
            }
        }
    }
    var result = 0x0;
    for (var i = 0x0; i <= N * MAX_VALUE; i++)
        if (dp[N][i] <= W)
            result = i;
    return result;
}
console['log'](solve());
function _0x2dbe99(ret) {
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