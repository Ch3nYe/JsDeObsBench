var a0_0x453dd3 = (function () {
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
    a0_0x453dd3(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x326bf3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x326bf3();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    var coin = [''];
    for (var i = 0x1; i <= 0x11; i++)
        coin['push'](i * i);
    var dp = [];
    for (var i = 0x0; i <= 0x11; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= n; j++) {
            dp[i][j] = 0x0;
        }
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= 0x11; i++) {
        for (var j = 0x0; j <= n; j++) {
            var k = 0x0;
            while (coin[i] * k + j <= n) {
                dp[i][coin[i] * k + j] += dp[i - 0x1][j];
                k++;
            }
        }
    }
    console['log'](dp[0x11][n]);
}
function a0_0x326bf3(ret) {
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