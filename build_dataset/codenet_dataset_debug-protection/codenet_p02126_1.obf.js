var a0_0x326212 = (function () {
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
    a0_0x326212(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4d4f13('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4d4f13();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, m, c] = arr['shift']()['split']('\x20')['map'](Number);
var L = arr['shift']()['split']('\x20')['map'](Number);
var cw = arr['map'](v => v['split']('\x20')['map'](Number));
cw['sort'](function (a, b) {
    return b[0x1] - a[0x1];
});
var sum = 0x0;
for (var i = 0x0; i < cw['length']; i++) {
    if (m == 0x0)
        break;
    var max = L[cw[i][0x0] - 0x1];
    if (max > 0x0) {
        sum += cw[i][0x1];
        L[cw[i][0x0] - 0x1]--;
        m--;
    }
}
console['log'](sum);
function a0_0x4d4f13(ret) {
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