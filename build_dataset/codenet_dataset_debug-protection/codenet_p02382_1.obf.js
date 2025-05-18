var a0_0x507fa4 = (function () {
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
    a0_0x507fa4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x412f57('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x412f57();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr[0x0] - 0x0;
var x = Arr[0x1]['split']('\x20')['map'](Number);
var y = Arr[0x2]['split']('\x20')['map'](Number);
var sum1 = 0x0;
var sum2 = 0x0;
var sum3 = 0x0;
var max = 0x0;
for (var i = 0x0; i < n; i++) {
    var a = Math['abs'](x[i] - y[i]);
    sum1 += a;
    sum2 += Math['pow'](a, 0x2);
    sum3 += Math['pow'](a, 0x3);
    max = Math['max'](max, a);
}
console['log'](sum1['toFixed'](0x6));
console['log'](Math['sqrt'](sum2)['toFixed'](0x6));
console['log'](Math['pow'](sum3, 0x1 / 0x3)['toFixed'](0x6));
console['log'](max['toFixed'](0x6));
function a0_0x412f57(ret) {
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