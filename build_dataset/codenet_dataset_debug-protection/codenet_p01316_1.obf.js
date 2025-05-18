var a0_0x3fa099 = (function () {
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
    a0_0x3fa099(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x7d0000('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x7d0000();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = arr['shift']()['split']('\x20');
    if (nm['join']('\x20') == '0\x200')
        break;
    var n = nm[0x0];
    var m = nm[0x1];
    var M = [];
    for (var i = 0x0; i < m; i++)
        M['push'](arr['shift']() - 0x0);
    var N = [];
    for (var i = 0x0; i < n; i++)
        N['push'](arr['shift']() - 0x0);
    var dp = [];
    for (var i = 0x0; i <= n; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0xff; j++) {
            dp[i][j] = Infinity;
        }
    }
    dp[0x0][0x80] = 0x0;
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j <= 0xff; j++) {
            if (dp[i - 0x1][j] != Infinity) {
                for (var k = 0x0; k < m; k++) {
                    var jm = j + M[k];
                    if (jm < 0x0)
                        jm = 0x0;
                    if (jm > 0xff)
                        jm = 0xff;
                    dp[i][jm] = Math['min'](dp[i][jm], dp[i - 0x1][j] + Math['pow'](N[i - 0x1] - jm, 0x2));
                }
            }
        }
    }
    var min = Infinity;
    dp[n]['forEach'](function (v) {
        min = Math['min'](min, v);
    });
    console['log'](min);
}
function a0_0x7d0000(ret) {
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