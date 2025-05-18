var a0_0x58cd9b = (function () {
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
    a0_0x58cd9b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x252919('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x252919();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
while (n--) {
    var xy = [
        0x0,
        0x0
    ];
    var max = [
        0x0,
        0x0,
        0x0
    ];
    while (!![]) {
        var str = arr['shift']();
        if (str == '0\x200')
            break;
        var ary = str['split']('\x20')['map'](Number);
        xy[0x0] += ary[0x0];
        xy[0x1] += ary[0x1];
        var d = Math['sqrt'](xy[0x0] * xy[0x0] + xy[0x1] * xy[0x1]);
        if (max[0x0] < d)
            max = [
                d,
                xy[0x0],
                xy[0x1]
            ];
        else if (max[0x0] == d && max[0x1] < xy[0x0])
            max = [
                d,
                xy[0x0],
                xy[0x1]
            ];
    }
    max['shift']();
    console['log'](max['join']('\x20'));
}
function a0_0x252919(ret) {
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