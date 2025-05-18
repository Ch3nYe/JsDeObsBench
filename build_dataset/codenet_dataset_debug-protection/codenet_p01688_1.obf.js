var a0_0x52a6c7 = (function () {
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
    a0_0x52a6c7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x11a9e9('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x11a9e9();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var D = Arr['shift']() - 0x0;
var x = Arr['shift']() - 0x0;
var X = [];
for (var i = 0x0; i < x; i++) {
    var v = Arr['shift']()['split']('\x20');
    if (v[0x0] == 'D')
        X['push'](v[0x1] - 0x0);
}
X['sort'](function (a, b) {
    return b - a;
});
var y = Arr['shift']() - 0x0;
var Y = [];
for (var i = 0x0; i < y; i++) {
    var v = Arr['shift']()['split']('\x20');
    if (v[0x0] == 'DD')
        Y['push'](v[0x1] - 0x0);
}
Y['sort'](function (a, b) {
    return b - a;
});
var max = 0x0;
for (var x = 0x0; x <= X['length']; x++) {
    for (var y = 0x0; y <= Y['length']; y++) {
        if (D < x + y * 0x2)
            break;
        var sum = 0x0;
        for (var i = 0x0; i < x; i++)
            sum += X[i];
        for (var i = 0x0; i < y; i++)
            sum += Y[i];
        max = Math['max'](max, sum);
    }
}
console['log'](max);
function a0_0x11a9e9(ret) {
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