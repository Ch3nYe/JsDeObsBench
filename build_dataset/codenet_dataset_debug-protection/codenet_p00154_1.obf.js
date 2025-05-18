function bomb(start, sum) {
    var _0x55d643 = (function () {
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
        _0x55d643(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x45544a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x45544a();
            }
        })();
    }());
    dp[start][sum]++;
    if (start == card['length'])
        return;
    var v = card[start][0x0];
    var k = card[start][0x1];
    for (var i = 0x0; i <= k; i++) {
        bomb(start + 0x1, sum + v * i);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var m = arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var card = [];
    while (m--)
        card['push'](arr['shift']()['split']('\x20')['map'](Number));
    var g = arr['shift']() - 0x0;
    var dp = [];
    for (var i = 0x0; i <= card['length']; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0x3e8; j++) {
            dp[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0);
    while (g--)
        console['log'](dp[card['length']][arr['shift']() - 0x0]);
}
function _0x45544a(ret) {
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