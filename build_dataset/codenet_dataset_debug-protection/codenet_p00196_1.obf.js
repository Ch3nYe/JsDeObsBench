var a0_0x43fed8 = (function () {
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
    a0_0x43fed8(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5e777d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5e777d();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var name = arr['shift']();
        var scoreA = 0x0;
        var scoreB = 0x0;
        for (var j = 0x0; j < n - 0x1; j++) {
            if (arr[j] - 0x0 === 0x0)
                scoreA++;
            if (arr[j] - 0x0 === 0x1)
                scoreB++;
        }
        team['push']([
            name,
            scoreA * 0x64 + (0xa - scoreB) + (0xa - j) * 0.01
        ]);
    }
    team['sort'](function (a, b) {
        return b[0x1] - a[0x1];
    });
    team['forEach'](function (v) {
        console['log'](v[0x0]);
    });
}
function a0_0x5e777d(ret) {
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