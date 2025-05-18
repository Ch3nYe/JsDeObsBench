var a0_0x238c02 = (function () {
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
    a0_0x238c02(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5b7968('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5b7968();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    if (N == 0x1) {
        console['log']('1\x201');
        continue;
    }
    var arr = [];
    arr[0x0] = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N - 0x1; i++) {
        var nm = Arr['shift']()['split']('\x20')['map'](Number);
        var n = nm[0x0];
        var m = nm[0x1];
        var x = 0x0;
        var y = 0x0;
        if (m == 0x0)
            x = -0x1;
        if (m == 0x1)
            y = -0x1;
        if (m == 0x2)
            x = 0x1;
        if (m == 0x3)
            y = 0x1;
        arr[i + 0x1] = [
            arr[n][0x0] + x,
            arr[n][0x1] + y
        ];
    }
    var xA = 0x0;
    var xZ = 0x0;
    var yA = 0x0;
    var yZ = 0x0;
    for (var i = 0x0; i < arr['length']; i++) {
        xA = Math['min'](xA, arr[i][0x0]);
        xZ = Math['max'](xZ, arr[i][0x0]);
        yA = Math['min'](yA, arr[i][0x1]);
        yZ = Math['max'](yZ, arr[i][0x1]);
    }
    console['log'](xZ - xA + 0x1 + '\x20' + (yZ - yA + 0x1));
}
function a0_0x5b7968(ret) {
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