var a0_0x3dc2c3 = (function () {
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
    a0_0x3dc2c3(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x17b8f6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x17b8f6();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var xys = Arr['shift']()['split']('\x20')['map'](Number);
    var x = xys[0x0];
    var y = xys[0x1];
    var s = xys[0x2];
    if (x == 0x0 && y == 0x0 && s == 0x0)
        break;
    var max = 0x0;
    for (var i = 0x1; i <= s - 0x1; i++) {
        for (var j = 0x1; j <= s - 0x1; j++) {
            var a = Math['floor'](i * (0x64 + x) / 0x64) + Math['floor'](j * (0x64 + x) / 0x64);
            if (a > s)
                break;
            if (a == s) {
                var b = Math['floor'](i * (0x64 + y) / 0x64) + Math['floor'](j * (0x64 + y) / 0x64);
                max = Math['max'](max, b);
                break;
            }
        }
    }
    console['log'](max);
}
function a0_0x17b8f6(ret) {
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