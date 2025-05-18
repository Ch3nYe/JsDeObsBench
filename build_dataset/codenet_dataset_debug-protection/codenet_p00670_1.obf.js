var a0_0x18c875 = (function () {
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
    a0_0x18c875(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x11837f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x11837f();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nS = Arr['shift']()['split']('\x20')['map'](Number);
    var n = nS[0x0];
    var S = nS[0x1];
    if (n == 0x0 && S == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i <= 0x64; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr[v]++;
    }
    var cnt = 0x0;
    for (var i = 0x0; i <= 0x64; i++) {
        for (var j = i + 0x1; j <= 0x64; j++) {
            if (i + j > S)
                cnt += Math['min'](arr[i], arr[j]);
        }
    }
    console['log'](cnt);
}
function a0_0x11837f(ret) {
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