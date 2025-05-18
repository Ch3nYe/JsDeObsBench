var a0_0x2aad1b = (function () {
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
    a0_0x2aad1b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x25e3bc('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x25e3bc();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('')['reverse']();
    var str = Arr['shift']();
    var x = str['length'];
    arr['forEach'](function (v) {
        if (v == 'J')
            str = str['slice'](-0x1) + str['slice'](0x0, -0x1);
        else if (v == 'C')
            str = str['slice'](0x1) + str['slice'](0x0, 0x1);
        else if (v == 'E' && x % 0x2 == 0x0)
            str = str['slice'](x / 0x2, x) + str['slice'](0x0, x / 0x2);
        else if (v == 'E' && x % 0x2 == 0x1)
            str = str['slice'](~~(x / 0x2) + 0x1, x) + str[~~(x / 0x2)] + str['slice'](0x0, ~~(x / 0x2));
        else if (v == 'A')
            str = str['split']('')['reverse']()['join']('');
        else if (v == 'P')
            str = str['replace'](/\d/g, function (s) {
                return s == '0' ? '9' : s - 0x0 - 0x1;
            });
        else if (v == 'M')
            str = str['replace'](/\d/g, function (s) {
                return s == '9' ? '0' : s - 0x0 + 0x1;
            });
    });
    console['log'](str);
}
function a0_0x25e3bc(ret) {
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