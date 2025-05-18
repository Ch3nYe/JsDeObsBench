var a0_0x44c08c = (function () {
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
    a0_0x44c08c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4c7c1f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4c7c1f();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    for (var I = 0x0; I < N; I++) {
        var A = Arr['shift']()['split']('\x20')['map'](Number);
        var x1 = A[0x0];
        var y1 = A[0x1];
        var z1 = A[0x2];
        var w1 = A[0x3];
        var x2 = A[0x4];
        var y2 = A[0x5];
        var z2 = A[0x6];
        var w2 = A[0x7];
        var a = x1 * x2;
        var i = x1 * y2;
        var j = x1 * z2;
        var k = x1 * w2;
        i += y1 * x2;
        a -= y1 * y2;
        k += y1 * z2;
        j -= y1 * w2;
        j += z1 * x2;
        k -= z1 * y2;
        a -= z1 * z2;
        i += z1 * w2;
        k += w1 * x2;
        j += w1 * y2;
        i -= w1 * z2;
        a -= w1 * w2;
        console['log'](a + '\x20' + i + '\x20' + j + '\x20' + k);
    }
}
function a0_0x4c7c1f(ret) {
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