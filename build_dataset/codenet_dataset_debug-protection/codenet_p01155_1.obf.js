var a0_0x52fa00 = (function () {
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
    a0_0x52fa00(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2fd075('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2fd075();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = arr['shift']()['split']('\x20')['map'](Number);
    if (ab['join']('\x20') == '0\x200')
        break;
    var a = ab[0x0];
    var b = ab[0x1];
    var A = [];
    var B = [];
    for (i = 0x1; i <= Math['sqrt'](a); i++) {
        if (a % i == 0x0)
            A['push']([
                a / i,
                i
            ]);
    }
    for (i = 0x1; i <= Math['sqrt'](b); i++) {
        if (b % i == 0x0)
            B['push']([
                b / i,
                i
            ]);
    }
    var min = Infinity;
    A['forEach'](function (va) {
        B['forEach'](function (vb) {
            var c = [
                va[0x0],
                va[0x1],
                vb[0x0],
                vb[0x1]
            ];
            c['sort'](function (a, b) {
                return a - b;
            });
            min = Math['min'](min, Math['pow'](c[0x0] - c[0x1], 0x2) + Math['pow'](c[0x1] - c[0x2], 0x2) + Math['pow'](c[0x2] - c[0x3], 0x2));
        });
    });
    console['log'](min);
}
function a0_0x2fd075(ret) {
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