var a0_0x57cee4 = (function () {
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
    a0_0x57cee4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x45079e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x45079e();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var mn = Arr['shift']()['split']('\x20')['map'](Number);
    if (mn[0x0] == 0x0 && mn[0x1] == 0x0)
        break;
    var player = [];
    for (var i = 0x0; i < mn[0x0]; i++)
        player[i] = i + 0x1;
    var arr = [];
    for (var i = 0x0; i < mn[0x1]; i++) {
        var v = Arr['shift']();
        arr['push'](v);
    }
    var i = 0x1;
    var k = 0x0;
    var len = mn[0x0];
    for (var I = 0x0; I < arr['length']; I++) {
        var v = arr[I];
        var str = '';
        if (i % 0x3 == 0x0)
            str += 'Fizz';
        if (i % 0x5 == 0x0)
            str += 'Buzz';
        if (str == '')
            str = i;
        if (v != str) {
            player[k] = ![];
            len++;
            if (len == 0x1)
                break;
        }
        i++;
        var H = 0x0;
        do {
            H++;
            if (H > 0x3e8)
                break;
            k++;
            if (k >= player['length']) {
                player = player['filter'](function (v) {
                    return v != ![];
                });
                k = 0x0;
            }
        } while (player[k] == ![]);
    }
    player = player['filter'](function (v) {
        return v != ![];
    });
    console['log'](player['join']('\x20'));
}
function a0_0x45079e(ret) {
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