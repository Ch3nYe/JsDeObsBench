function main(input) {
    var _0x307a74 = (function () {
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
        _0x307a74(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x38050e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x38050e();
            }
        })();
    }());
    input = input['split']('\x0a');
    var tmp = input[0x0]['split']('\x20');
    var N = Number(tmp[0x0]);
    var A = Number(tmp[0x1]);
    var x = [0x0];
    x = x['concat'](input[0x1]['split']('\x20')['map'](Number));
    var dp = new Array(N + 0x1);
    for (var i = 0x0; i <= N; ++i) {
        dp[i] = new Array(N + 0x1);
        for (var j = 0x0; j <= N; ++j) {
            dp[i][j] = new Array(A * N + 0x1)['fill'](0x0);
        }
    }
    for (var i = 0x0; i < N; ++i)
        dp[i][0x0][0x0] = 0x1;
    for (var i = 0x1; i <= N; ++i) {
        for (var j = 0x1; j <= i; ++j) {
            for (var k = 0x1; k <= A * N; ++k) {
                if (k < x[i]) {
                    dp[i][j][k] = dp[i - 0x1][j][k];
                } else {
                    dp[i][j][k] = dp[i - 0x1][j][k] + dp[i - 0x1][j - 0x1][k - x[i]];
                }
            }
        }
    }
    var ans = 0x0;
    for (var j = 0x1; j <= N; ++j) {
        ans += dp[N][j][j * A];
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x38050e(ret) {
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