var a0_0x1af4e6 = (function () {
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
    a0_0x1af4e6(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x525dcd('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x525dcd();
        }
    })();
}());
inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
a = l['shift']() * 0x1;
b = l['shift']() * 0x1;
x = l['shift']() * 0x1;
l = 0x0;
r = 0x5a;
mid = 0x2d;
c = 0x0;
S = a * a * b;
if (S / 0x2 < x) {
    while (l < r) {
        s = S - a * a * Math['tan'](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            l = mid;
        } else {
            r = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console['log'](mid['toFixed'](0xa));
} else {
    while (l < r) {
        s = b * b * Math['tan'](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            r = mid;
        } else {
            l = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console['log']((0x5a - mid)['toFixed'](0xa));
}
function a0_0x525dcd(ret) {
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