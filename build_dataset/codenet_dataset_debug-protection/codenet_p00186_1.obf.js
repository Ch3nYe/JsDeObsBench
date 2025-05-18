var a0_0x183bc4 = (function () {
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
    a0_0x183bc4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x30e7c8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x30e7c8();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr[0x0] == 0x0)
        break;
    var q1 = arr[0x0];
    var b = arr[0x1];
    var c1 = arr[0x2];
    var c2 = arr[0x3];
    var q2 = arr[0x4];
    var x = 0x0;
    var y = 0x0;
    var flag = !![];
    while (!![]) {
        if (b >= c1 * (x + 0x1) && x + 0x1 <= q2)
            x++;
        else
            break;
    }
    while (!![]) {
        if (b >= c1 * x + c2 * (y + 0x1))
            y++;
        else
            break;
    }
    while (!![]) {
        if (x == 0x0) {
            flag = ![];
            break;
        }
        if (c1 * x + c2 * y > b) {
            flag = ![];
            break;
        }
        if (q1 > x + y) {
            x--;
            while (!![]) {
                if (b >= c1 * x + c2 * (y + 0x1))
                    y++;
                else
                    break;
            }
        } else {
            break;
        }
    }
    console['log'](flag ? x + '\x20' + y : 'NA');
}
function a0_0x30e7c8(ret) {
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