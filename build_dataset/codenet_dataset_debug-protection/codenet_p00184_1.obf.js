var a0_0x31bbe8 = (function () {
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
    a0_0x31bbe8(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x55c97c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x55c97c();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var n = 0x0;
var arr = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
for (var i = 0x0; i < Arr['length']; i++) {
    if (n == 0x0) {
        if (i != 0x0)
            arr['forEach'](function (v) {
                console['log'](v);
            });
        if (Arr[i] == 0x0)
            break;
        n = Arr[i];
        arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
    } else {
        n--;
        if (Arr[i] >= 0x3c)
            arr[0x6]++;
        else if (Arr[i] >= 0x32)
            arr[0x5]++;
        else if (Arr[i] >= 0x28)
            arr[0x4]++;
        else if (Arr[i] >= 0x1e)
            arr[0x3]++;
        else if (Arr[i] >= 0x14)
            arr[0x2]++;
        else if (Arr[i] >= 0xa)
            arr[0x1]++;
        else
            arr[0x0]++;
    }
}
function a0_0x55c97c(ret) {
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