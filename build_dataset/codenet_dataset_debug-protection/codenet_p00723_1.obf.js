var a0_0x5cc656 = (function () {
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
    a0_0x5cc656(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x29c35b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x29c35b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var str = Arr['shift']();
    var arr = [];
    for (var i = 0x1; i < str['length']; i++) {
        arr['push']([
            str['slice'](0x0, i),
            str['slice'](i, str['length'])
        ]);
    }
    var obj = {};
    for (var i = 0x0; i < arr['length']; i++) {
        var A = arr[i][0x0];
        var B = arr[i][0x1];
        var a = A['split']('')['reverse']()['join']('');
        var b = B['split']('')['reverse']()['join']('');
        obj[A + B] = !![];
        obj[A + b] = !![];
        obj[a + B] = !![];
        obj[a + b] = !![];
        obj[B + A] = !![];
        obj[B + a] = !![];
        obj[b + A] = !![];
        obj[b + a] = !![];
    }
    console['log'](Object['keys'](obj)['length']);
}
function a0_0x29c35b(ret) {
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