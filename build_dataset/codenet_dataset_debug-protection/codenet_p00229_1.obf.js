var a0_0x5941f3 = (function () {
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
    a0_0x5941f3(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x85c403('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x85c403();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var BR = Arr['shift']();
    if (BR == '0\x200\x200\x200\x200\x200')
        break;
    var br = BR['split']('\x20')['map'](Number);
    var b = br[0x0];
    var r = br[0x1];
    var g = br[0x2];
    var c = br[0x3];
    var s = br[0x4];
    var t = br[0x5];
    var sum = 0x64;
    sum += b * 0xf;
    sum += r * 0xf;
    sum += (b * 0x5 + r * 0x3) * 0xf;
    sum += g * 0x7;
    sum += c * 0x2;
    sum -= (b * 0x5 + r * 0x3) * 0x2;
    sum -= (t - s - (b * 0x5 + r * 0x3)) * 0x3;
    console['log'](sum);
}
function a0_0x85c403(ret) {
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