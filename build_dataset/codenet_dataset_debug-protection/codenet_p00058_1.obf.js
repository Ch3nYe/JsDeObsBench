var a0_0x5bf2fe = (function () {
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
    a0_0x5bf2fe(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x334664('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x334664();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var k1;
        var k2;
        if (x2 - x1 !== 0x0)
            k1 = ((y2 - y1) / (x2 - x1))['toFixed'](0xb);
        else
            k1 = Infinity;
        if (x4 - x3 !== 0x0)
            k2 = (y4 - y3) / (x4 - x3)['toFixed'](0xb);
        else
            k2 = Infinity;
        var ans = 'NO';
        if (k1 == 0x0 && k2 == Infinity)
            ans = 'YES';
        if (k2 == 0x0 && k1 == Infinity)
            ans = 'YES';
        if (k1 == -0x1 * k2 && (k1 != 0x0 && k2 != 0x0))
            ans = 'YES';
        console['log'](ans);
    }['apply'](null, arr));
}
function a0_0x334664(ret) {
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