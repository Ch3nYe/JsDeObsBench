var a0_0x8f9a2c = (function () {
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
    a0_0x8f9a2c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x19bb3f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x19bb3f();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['push']('');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var yx = [];
    var dp = [];
    for (var i = 0x0; i < 0x5; i++) {
        var v = Arr['shift']()['split']('\x20')['map'](Number);
        yx['push'](v);
        dp['push']([]);
    }
    for (var y = 0x0; y < 0x5; y++) {
        for (var x = 0x0; x < 0x5; x++) {
            if (y == 0x0)
                dp[y][x] = yx[y][x] == 0x1 ? 0x1 : 0x0;
            else
                dp[y][x] = yx[y][x] == 0x1 ? dp[y - 0x1][x] + 0x1 : 0x0;
        }
    }
    var max = 0x0;
    for (var y = 0x0; y < 0x5; y++) {
        for (var i = 0x0; i < 0x5; i++) {
            for (var j = i; j < 0x5; j++) {
                var min = Infinity;
                for (var k = i; k <= j; k++)
                    min = Math['min'](min, dp[y][k]);
                max = Math['max'](max, min * (j - i + 0x1));
            }
        }
    }
    console['log'](max);
    Arr['shift']();
}
function a0_0x19bb3f(ret) {
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