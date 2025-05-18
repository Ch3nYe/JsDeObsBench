var a0_0x259e77 = (function () {
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
    a0_0x259e77(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x132d26('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x132d26();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var cnt = 0x1;
while (!![]) {
    var W = Arr['shift']() - 0x0;
    if (W == 0x0)
        break;
    var N = Arr['shift']() - 0x0;
    var dp = [];
    for (var y = 0x0; y < N + 0x1; y++) {
        dp[y] = [];
        for (var x = 0x0; x <= W; x++) {
            dp[y][x] = 0x0;
        }
    }
    var v = [];
    var w = [];
    for (var i = 0x0; i < N; i++) {
        var arr = Arr['shift']()['split'](',')['map'](Number);
        v['push'](arr[0x0]);
        w['push'](arr[0x1]);
    }
    for (var y = 0x0; y < N; y++) {
        for (var x = 0x0; x <= W; x++) {
            if (x - w[y] >= 0x0)
                dp[y + 0x1][x] = Math['max'](dp[y][x], dp[y][x - w[y]] + v[y]);
            else
                dp[y + 0x1][x] = dp[y][x];
        }
    }
    console['log']('Case\x20' + cnt + ':');
    cnt++;
    console['log'](dp[N][W]);
    var maxValue = dp[N][W];
    while (maxValue == dp[N][W - 0x1])
        W--;
    console['log'](W);
}
function a0_0x132d26(ret) {
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