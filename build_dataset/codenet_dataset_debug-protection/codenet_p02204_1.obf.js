var a0_0x5266d9 = (function () {
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
    a0_0x5266d9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xc7143a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xc7143a();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [m, n] = arr['shift']()['split']('\x20')['map'](Number);
var a = arr['shift']()['split']('\x20');
if (m == 0x2) {
    var cnt = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < n; i++) {
        if (a[i] - 0x1 == i % 0x2)
            cnt[0x0]++;
        if (a[i] - 0x1 == (i + 0x1) % 0x2)
            cnt[0x1]++;
    }
    console['log'](Math['min'](...cnt));
} else {
    var cnt = 0x0;
    for (var i = 0x1; i < n; i++) {
        if (a[i - 0x1] == a[i]) {
            cnt++;
            i++;
        }
    }
    console['log'](cnt);
}
function a0_0xc7143a(ret) {
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