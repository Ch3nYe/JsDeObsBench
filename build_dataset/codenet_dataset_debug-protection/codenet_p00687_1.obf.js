var a0_0x5c44a = (function () {
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
    a0_0x5c44a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3cc87c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3cc87c();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nab = arr['shift']();
    if (nab == '0\x200\x200')
        break;
    nab = nab['split']('\x20')['map'](Number);
    var n = nab[0x0];
    var ab = [
        nab[0x1],
        nab[0x2]
    ];
    var dp = [];
    for (var i = 0x0; i <= n; i++)
        dp[i] = ![];
    dp[0x0] = !![];
    for (var i = 0x0; i < ab['length']; i++) {
        for (var j = 0x0; j <= n; j++) {
            if (dp[j])
                dp[j + ab[i]] = !![];
        }
    }
    var cnt = 0x0;
    dp['forEach'](function (v) {
        if (v == ![])
            cnt++;
    });
    console['log'](cnt);
}
function a0_0x3cc87c(ret) {
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