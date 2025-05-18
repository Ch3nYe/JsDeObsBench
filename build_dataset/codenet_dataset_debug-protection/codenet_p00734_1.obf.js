var a0_0x38e4bb = (function () {
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
    a0_0x38e4bb(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x40789a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x40789a();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = Arr['shift']();
    if (nm == '0\x200')
        break;
    nm = nm['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var N = [];
    var M = [];
    for (var i = 0x0; i < n; i++)
        N['push'](Arr['shift']() - 0x0);
    for (var i = 0x0; i < m; i++)
        M['push'](Arr['shift']() - 0x0);
    var sumN = N['reduce'](function (a, b) {
        return a + b;
    });
    var sumM = M['reduce'](function (a, b) {
        return a + b;
    });
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < m; j++) {
            var a = sumN - N[i] + M[j];
            var b = sumM + N[i] - M[j];
            if (a == b)
                arr['push']([
                    N[i] + M[j],
                    N[i],
                    M[j]
                ]);
        }
    }
    if (arr['length'] == 0x0) {
        console['log'](-0x1);
        continue;
    }
    arr['sort'](function (a, b) {
        return a[0x0] - b[0x0];
    });
    console['log'](arr[0x0][0x1] + '\x20' + arr[0x0][0x2]);
}
function a0_0x40789a(ret) {
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