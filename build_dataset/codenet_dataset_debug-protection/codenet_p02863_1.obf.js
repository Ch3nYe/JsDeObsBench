function Main(input) {
    var _0x338209 = (function () {
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
        _0x338209(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3e11f8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3e11f8();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var T = parseInt(input[0x0][0x1], 0xa);
    var arr_AB = [];
    for (var i = 0x0; i < N; i++) {
        arr_AB['push'](input[i + 0x1]['map'](e => parseInt(e, 0xa)));
    }
    arr_AB['sort']((a, b) => a[0x0] - b[0x0]);
    var dp = [];
    var Ai, Bi;
    dp['push'](Array['from']({ 'length': T }, () => [
        0x0,
        0x0
    ]));
    for (var i = 0x0; i < N; i++) {
        dp['push']([]);
        Ai = arr_AB[i][0x0];
        Bi = arr_AB[i][0x1];
        for (var j = 0x0; j < T; j++) {
            dp[i + 0x1]['push']([
                0x0,
                0x0
            ]);
            if (Ai <= j) {
                dp[i + 0x1][j][0x0] = Math['max'](dp[i][j][0x0], dp[i][j - Ai][0x0] + Bi);
            } else {
                dp[i + 0x1][j][0x0] = dp[i][j][0x0];
            }
            dp[i + 0x1][j][0x1] = Math['max'](dp[i][j][0x1], dp[i][j][0x0] + Bi);
        }
    }
    console['log'](dp[N][T - 0x1][0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3e11f8(ret) {
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