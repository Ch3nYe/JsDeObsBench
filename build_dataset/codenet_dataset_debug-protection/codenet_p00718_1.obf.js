var a0_0x30c243 = (function () {
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
    a0_0x30c243(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4c5611('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4c5611();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('\x20');
    var sum = 0x0;
    arr['forEach'](function (v) {
        v = v['replace'](/(\d?)([mcxi])/g, function (s, s1, s2) {
            s1 = s1 ? s1 - 0x0 : 0x1;
            if (s2 == 'm')
                s2 = 0x3e8;
            if (s2 == 'c')
                s2 = 0x64;
            if (s2 == 'x')
                s2 = 0xa;
            if (s2 == 'i')
                s2 = 0x1;
            sum += s1 * s2;
            return s;
        });
    });
    var str = ('000' + sum)['slice'](-0x4);
    var S = str['split']('')['map'](Number);
    var result = '';
    S['forEach'](function (v, i) {
        if (v == 0x1)
            v = '';
        if (v !== 0x0) {
            if (i == 0x0)
                result += v + 'm';
            if (i == 0x1)
                result += v + 'c';
            if (i == 0x2)
                result += v + 'x';
            if (i == 0x3)
                result += v + 'i';
        }
    });
    console['log'](result);
}
function a0_0x4c5611(ret) {
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