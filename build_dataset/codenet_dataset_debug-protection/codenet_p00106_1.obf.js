var a0_0x47e8aa = (function () {
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
    a0_0x47e8aa(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2907f2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2907f2();
        }
    })();
}());
var obj = {};
for (var i = 0x0; i <= 0x19; i++) {
    for (var j = 0x0; j <= 0x10; j++) {
        for (var k = 0x0; k <= 0xa; k++) {
            var weight = 0xc8 * i + 0x12c * j + 0x1f4 * k;
            if (weight > 0x1388)
                continue;
            var money = 0x0;
            money += 0x17c * 0x5 * 0.8 * Math['floor'](i / 0x5);
            money += 0x226 * 0x4 * 0.85 * Math['floor'](j / 0x4);
            money += 0x352 * 0x3 * 0.88 * Math['floor'](k / 0x3);
            money += 0x17c * (i % 0x5);
            money += 0x226 * (j % 0x4);
            money += 0x352 * (k % 0x3);
            if (obj['hasOwnProperty'](weight))
                obj[weight] = Math['min'](obj[weight], money);
            else
                obj[weight] = money;
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    console['log'](obj[n]);
}
function a0_0x2907f2(ret) {
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