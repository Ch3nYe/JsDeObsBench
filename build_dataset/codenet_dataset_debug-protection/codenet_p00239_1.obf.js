var a0_0x3449d2 = (function () {
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
    a0_0x3449d2(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x765e12('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x765e12();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        var ipqr = Arr['shift']()['split']('\x20')['map'](Number);
        arr['push'](ipqr);
    }
    var PQRC = Arr['shift']()['split']('\x20')['map'](Number);
    var result = [];
    arr['forEach'](function (v) {
        var bad = 0x0;
        if (PQRC[0x0] < v[0x1])
            bad++;
        if (PQRC[0x1] < v[0x2])
            bad++;
        if (PQRC[0x2] < v[0x3])
            bad++;
        if (PQRC[0x3] < 0x4 * (v[0x1] + v[0x3]) + 0x9 * v[0x2])
            bad++;
        if (bad == 0x0)
            result['push'](v[0x0]);
    });
    console['log'](result['length'] == 0x0 ? 'NA' : result['join']('\x0a'));
}
function a0_0x765e12(ret) {
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