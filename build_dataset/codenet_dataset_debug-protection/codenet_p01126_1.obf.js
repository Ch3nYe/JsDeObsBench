var a0_0x2ec488 = (function () {
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
    a0_0x2ec488(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x10d65b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x10d65b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var A = Arr['shift']();
    if (A == '0\x200\x200')
        break;
    var arr = A['split']('\x20')['map'](Number);
    var m = arr[0x1];
    var start = arr[0x2];
    var hpq = [];
    for (var i = 0x0; i < m; i++)
        hpq['push'](Arr['shift']());
    hpq['sort'](function (a, b) {
        a = a['split']('\x20')[0x0] - 0x0;
        b = b['split']('\x20')[0x0] - 0x0;
        if (a >= b)
            return -0x1;
        else
            return 0x1;
    });
    var H = 0x3e9;
    for (var i = 0x0; i < hpq['length']; i++) {
        var HPQ = hpq[i]['split']('\x20')['map'](Number);
        var h = HPQ[0x0];
        var p = HPQ[0x1];
        var q = HPQ[0x2];
        if (H == h)
            continue;
        if (start == p || start == q) {
            H = h;
            start = start == p ? q : p;
        }
    }
    console['log'](start);
}
function a0_0x10d65b(ret) {
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