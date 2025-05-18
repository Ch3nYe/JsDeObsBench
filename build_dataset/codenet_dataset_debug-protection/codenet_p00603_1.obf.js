var a0_0x510a63 = (function () {
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
    a0_0x510a63(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x14e224('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x14e224();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var nr = Arr['shift']()['split']('\x20')['map'](Number);
    var n = nr[0x0];
    var r = nr[0x1];
    var card = [];
    for (var i = 0x0; i < n; i++)
        card[i] = i;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    for (var i = 0x0; i < r; i++) {
        var v = arr[i];
        var a = [];
        var b = [];
        for (var j = 0x0; j < n; j++)
            Math['floor'](n / 0x2) > j ? b['push'](card[j]) : a['push'](card[j]);
        card = [];
        while (!![]) {
            if (a['length'] == 0x0 && b['length'] == 0x0)
                break;
            card = card['concat'](a['splice'](0x0, v));
            card = card['concat'](b['splice'](0x0, v));
        }
    }
    console['log'](card[card['length'] - 0x1]);
}
function a0_0x14e224(ret) {
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