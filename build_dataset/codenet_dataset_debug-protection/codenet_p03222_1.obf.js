function Main(input) {
    var _0x5ebd6e = (function () {
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
        _0x5ebd6e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4c1c6e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4c1c6e();
            }
        })();
    }());
    input = input['split']('\x20')['map'](a => ~~a);
    var H = input[0x0];
    var W = input[0x1];
    var K = input[0x2];
    var mod = 0xa ** 0x9 + 0x7;
    if (W == 0x1)
        return 0x1;
    var validAmidaList = Array(0x2 ** (W - 0x1))['fill'](0x0)['map']((a, b) => b)['map'](a => a['toString'](0x2))['filter'](a => !/11/['test'](a))['map'](a => '000000' + a)['map'](a => a['slice'](0x1 - W))['map'](a => '0' + a + '0');
    var dp = Array(H + 0x1);
    for (var i = 0x0; i <= H; i++) {
        dp[i] = Array(W)['fill'](0x0);
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= H; i++) {
        validAmidaList['forEach'](function (elem) {
            for (var j = 0x0; j < W; j++) {
                ({
                    '10': a => dp[i][j] += dp[i - 0x1][j - 0x1],
                    '01': a => dp[i][j] += dp[i - 0x1][j + 0x1],
                    '00': a => dp[i][j] += dp[i - 0x1][j]
                }[elem[j] + elem[j + 0x1]]());
                dp[i][j] %= mod;
            }
        });
    }
    return dp[H][K - 0x1];
}
if (typeof require !== 'undefined')
    console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x4c1c6e(ret) {
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