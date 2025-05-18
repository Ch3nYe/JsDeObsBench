var a0_0x2f12f9 = (function () {
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
    a0_0x2f12f9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x57adc1('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x57adc1();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, q] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && q == 0x0)
        break;
    var g = [];
    for (var i = 0x0; i < n; i++) {
        var [e, ey, wy] = arr['shift']()['split']('\x20');
        [ey, wy] = [
            ey - 0x0,
            wy - 0x0
        ];
        g['push']([
            e,
            wy - ey,
            wy
        ]);
    }
    for (var i = 0x0; i < q; i++) {
        var n = arr['shift']() - 0x0;
        var ans = 'Unknown';
        for (var j = 0x0; j < g['length']; j++) {
            var a = g[j][0x1];
            var b = g[j][0x2];
            if (a < n && n <= b) {
                ans = [
                    g[j][0x0],
                    n - a
                ]['join']('\x20');
            }
        }
        console['log'](ans);
    }
}
function a0_0x57adc1(ret) {
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