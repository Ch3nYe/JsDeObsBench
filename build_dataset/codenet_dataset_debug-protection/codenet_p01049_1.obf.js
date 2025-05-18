var a0_0x5050a9 = (function () {
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
    a0_0x5050a9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2ac9b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2ac9b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var [a, d] = arr['shift']()['split']('\x20')['map'](Number);
var retu = [];
for (var i = 0x0; i < n; i++) {
    retu['push'](a + i * d);
}
var m = arr['shift']() - 0x0;
for (var i = 0x0; i < m; i++) {
    var [x, y, z] = arr['shift']()['split']('\x20')['map'](Number);
    if (x == 0x0)
        [retu[y - 0x1], retu[z - 0x1]] = [
            retu[z - 0x1],
            retu[y - 0x1]
        ];
    else
        retu[y - 0x1] = retu[z - 0x1];
}
var k = arr['shift']() - 0x0;
console['log'](retu[k - 0x1]);
function a0_0x2ac9b(ret) {
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