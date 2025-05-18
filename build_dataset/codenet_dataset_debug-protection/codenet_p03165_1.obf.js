function main(input) {
    var _0x11215f = (function () {
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
        _0x11215f(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x324457('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x324457();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const S = lines['shift']()['split']('');
    const T = lines['shift']()['split']('');
    dp = [];
    for (var i = 0x0; i <= S['length']; i++) {
        dp['push'](Array(T['length'] + 0x1)['fill'](0x0));
    }
    for (var i = 0x1; i <= S['length']; i++) {
        for (var j = 0x1; j <= T['length']; j++) {
            if (S[i - 0x1] == T[j - 0x1]) {
                dp[i][j] = Math['max'](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
            } else {
                dp[i][j] = Math['max'](dp[i - 0x1][j], dp[i][j - 0x1]);
            }
        }
    }
    var i = S['length'];
    var j = T['length'];
    var result = [];
    while (i != 0x0 && j != 0x0) {
        if (S[i - 0x1] == T[j - 0x1]) {
            result['unshift'](S[i - 0x1]);
            i--;
            j--;
        } else {
            if (dp[i - 0x1][j] < dp[i][j - 0x1]) {
                j--;
            } else {
                i--;
            }
        }
    }
    console['log'](result['join'](''));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x324457(ret) {
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