var a0_0xd86c08 = (function () {
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
    a0_0xd86c08(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5cdf3c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5cdf3c();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [e, y] = input['trim']()['split']('\x20')['map'](Number);
var mtsh = 'MTSH'['split']('');
if (e == 0x0) {
    if (y >= 0x74c && y <= 0x777) {
        e = 0x1;
        y -= 0x74c;
    } else if (y >= 0x778 && y <= 0x785) {
        e = 0x2;
        y -= 0x778;
    } else if (y >= 0x786 && y <= 0x7c4) {
        e = 0x3;
        y -= 0x786;
    } else if (y >= 0x7c5 && y <= 0x7e0) {
        e = 0x4;
        y -= 0x7c5;
    }
    console['log'](mtsh[e - 0x1] + (y + 0x1));
} else if (e == 0x1)
    console['log'](0x74c + y - 0x1);
else if (e == 0x2)
    console['log'](0x778 + y - 0x1);
else if (e == 0x3)
    console['log'](0x786 + y - 0x1);
else if (e == 0x4)
    console['log'](0x7c5 + y - 0x1);
function a0_0x5cdf3c(ret) {
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