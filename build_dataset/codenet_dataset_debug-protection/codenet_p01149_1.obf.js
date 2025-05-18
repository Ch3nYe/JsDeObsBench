var a0_0x510d88 = (function () {
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
    a0_0x510d88(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2777ae('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2777ae();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
input = input['replace'](/T|J|Q|K/g, '10');
input = input['replace'](/A/g, '11');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
while (n--) {
    var a = arr['shift']()['split']('\x20')['map'](Number);
    var b = arr['shift']()['split']('\x20')['map'](Number);
    var flag = ![];
    var sum = a[0x0] + a[0x1];
    if (a[0x0] == 0xb || a[0x1] == 0xb)
        flag = !![];
    if (sum == 0x15) {
        console['log']('blackjack');
        continue;
    }
    var ans = '';
    for (var i = 0x0; i < b['length']; i++) {
        if (sum <= 0x10) {
            if (b[i] == 0xb)
                flag = !![];
            if (b[i] == 0xb && sum + 0xb > 0x15)
                b[i] = 0x1;
            sum += b[i];
        } else if (sum == 0x11 && flag) {
            if (b[i] == 0xb)
                flag = !![];
            if (b[i] == 0xb && sum + 0xb > 0x15)
                b[i] = 0x1;
            sum += b[i];
        } else {
            break;
        }
    }
    if (sum > 0x15)
        sum = 'bust';
    console['log'](sum);
}
function a0_0x2777ae(ret) {
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