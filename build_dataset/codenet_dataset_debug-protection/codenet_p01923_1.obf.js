var a0_0x31d51a = (function () {
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
    a0_0x31d51a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x14c1ce('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x14c1ce();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (arr[0x0] == '0\x200')
        break;
    var nm = arr['shift']()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var max = [];
    for (var i = 0x0; i < m; i++)
        max[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var dv = arr['shift']()['split']('\x20')['map'](Number);
        var d = dv[0x0] - 0x1;
        var v = dv[0x1];
        if (max[d] < v)
            max[d] = v;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++)
        sum += max[i];
    console['log'](sum);
}
function a0_0x14c1ce(ret) {
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