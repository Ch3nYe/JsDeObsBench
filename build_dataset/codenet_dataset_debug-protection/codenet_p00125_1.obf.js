var a0_0x1f1d0c = (function () {
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
    a0_0x1f1d0c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x30906d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x30906d();
        }
    })();
}());
function year(x) {
    var m = [
        0x16d,
        0x1f,
        0x1c,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f
    ];
    if (x % 0x4 == 0x0) {
        m[0x2] = 0x1d;
        m[0x0] = 0x16e;
        if (x % 0x64 == 0x0) {
            m[0x2] = 0x1c;
            m[0x0] = 0x16d;
        }
        if (x % 0x190 == 0x0) {
            m[0x2] = 0x1d;
            m[0x0] = 0x16e;
        }
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '-1\x20-1\x20-1\x20-1\x20-1\x20-1')
        break;
    var arr = str['split']('\x20')['map'](Number);
    (function (y1, m1, d1, y2, m2, d2) {
        var sum1 = 0x0;
        var sum2 = 0x0;
        var Y1 = year(y1);
        var Y2 = year(y2);
        sum1 += Y1[m1] - d1;
        sum2 += Y2[m2] - d2;
        while (m1 < 0xc) {
            m1++;
            sum1 += Y1[m1];
        }
        while (m2 < 0xc) {
            m2++;
            sum2 += Y2[m2];
        }
        var days = sum1 - sum2;
        while (y1 != y2) {
            y1++;
            days += year(y1)[0x0];
        }
        console['log'](days);
    }['apply'](null, arr));
}
function a0_0x30906d(ret) {
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