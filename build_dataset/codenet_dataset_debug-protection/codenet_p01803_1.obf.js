var a0_0xa8fe6b = (function () {
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
    a0_0xa8fe6b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3e5bd3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3e5bd3();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    var obj = {};
    var max = 0x0;
    Arr['forEach'](function (v) {
        var str = v;
        var s = str[0x0];
        var flag = ![];
        for (var i = 0x0; i < str['length']; i++) {
            if (flag)
                s += str[i];
            flag = /[aiueo]/['test'](str[i]) ? !![] : ![];
        }
        obj[s] = !![];
        max = Math['max'](max, s['length']);
    });
    for (var i = 0x1; i <= max; i++) {
        var Obj = {};
        for (var key in obj) {
            Obj[key['slice'](0x0, i)] = !![];
        }
        if (Object['keys'](Obj)['length'] == n) {
            console['log'](i);
            break;
        }
        if (i == max)
            console['log'](-0x1);
    }
}
function a0_0x3e5bd3(ret) {
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