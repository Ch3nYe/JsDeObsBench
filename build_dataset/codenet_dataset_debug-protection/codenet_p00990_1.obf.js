function over(x) {
    var _0x58caae = (function () {
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
        _0x58caae(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4222c5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4222c5();
            }
        })();
    }());
    if (x >= 0xa)
        x = x - 0xa + 0x1;
    return x;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var id = arr['shift']()['split']('');
var a = arr['shift']() - 0x0;
var ary = arr['shift']()['split']('\x20')['map'](Number);
var k = [];
var sum = 0x0;
id['forEach'](function (v, i) {
    if (v == '*') {
        if (i % 0x2 == 0x0)
            k['push'](0x1);
        else
            k['push'](0x2);
    } else {
        if (i % 0x2 == 0x0)
            sum += v - 0x0;
        else
            sum += over((v - 0x0) * 0x2);
    }
});
var dp = [];
for (var i = 0x0; i <= 0x7; i++) {
    dp[i] = [];
    for (var s = 0x0; s <= 0xf4240; s++)
        dp[i][s] = 0x0;
}
dp[0x0][sum] = 0x1;
for (var i = 0x0; i < k['length']; i++) {
    for (var j = 0x0; j < ary['length']; j++) {
        for (var s = 0x0; s <= 0xf4240; s++) {
            dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
        }
    }
}
var ans = 0x0;
for (var s = 0x0; s <= 0x186a0; s++)
    ans += dp[k['length']][s * 0xa];
console['log'](ans);
function _0x4222c5(ret) {
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