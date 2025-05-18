var a0_0x12c59b = (function () {
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
    a0_0x12c59b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xa4d4c3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xa4d4c3();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '0\x200')
        break;
    var arr = str['split']('\x20');
    var data = [0x0];
    if (arr[0x0] > 0x0)
        data = data['concat'](Arr['shift']()['split']('\x20')['map'](Number));
    if (arr[0x1] > 0x0)
        data = data['concat'](Arr['shift']()['split']('\x20')['map'](Number));
    data['sort'](function (a, b) {
        return a - b;
    });
    var max = 0x0;
    data['reduce'](function (a, b) {
        max = Math['max'](max, Math['abs'](a - b));
        return b;
    });
    console['log'](max);
}
function a0_0xa4d4c3(ret) {
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