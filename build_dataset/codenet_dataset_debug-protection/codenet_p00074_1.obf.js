var a0_0x265b8f = (function () {
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
    a0_0x265b8f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x597436('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x597436();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var time = line['split']('\x20')['map'](function (n) {
        return +n;
    });
    if (time[0x0] == -0x1 && time[0x1] == -0x1 && time[0x2] == -0x1)
        break;
    var hour = time[0x0];
    var min = time[0x1] + hour * 0x3c;
    var sec = time[0x2] + min * 0x3c;
    var rem = 0x78 * 0x3c - sec;
    var rem3 = rem * 0x3;
    var remSec = rem % 0x3c;
    var remSec3 = rem3 % 0x3c;
    rem = Math['floor'](rem / 0x3c);
    rem3 = Math['floor'](rem3 / 0x3c);
    var remMin = rem % 0x3c;
    var remMin3 = rem3 % 0x3c;
    var remHour = Math['floor'](rem / 0x3c);
    var remHour3 = Math['floor'](rem3 / 0x3c);
    console['log'](('0' + remHour)['slice'](-0x2) + ':' + ('0' + remMin)['slice'](-0x2) + ':' + ('0' + remSec)['slice'](-0x2));
    console['log'](('0' + remHour3)['slice'](-0x2) + ':' + ('0' + remMin3)['slice'](-0x2) + ':' + ('0' + remSec3)['slice'](-0x2));
}
function a0_0x597436(ret) {
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