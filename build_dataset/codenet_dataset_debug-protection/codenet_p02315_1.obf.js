function Main(input) {
    var _0x24e96d = (function () {
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
        _0x24e96d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1bfb29('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1bfb29();
            }
        })();
    }());
    input = input['split']('\x0a');
    var p = input[0x0]['split']('\x20')['map'](Number);
    var max = p[0x1] - 0x0;
    var dp = new Array(p[0x0] + 0x1);
    for (var n = 0x0; n < p[0x0] + 0x1; n++) {
        dp[n] = new Array(max + 0x1)['fill'](0x0);
    }
    for (var i = 0x1; i < input['length']; i++) {
        var mem = input[i]['split']('\x20')['map'](Number);
        for (var j = 0x0; j <= max; j++) {
            if (j >= mem[0x1])
                dp[i][j] = Math['max'](dp[i - 0x1][j - mem[0x1]] + mem[0x0], dp[i - 0x1][j]);
            else
                dp[i][j] = dp[i - 0x1][j];
        }
    }
    console['log'](dp[p[0x0]][max]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x1bfb29(ret) {
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