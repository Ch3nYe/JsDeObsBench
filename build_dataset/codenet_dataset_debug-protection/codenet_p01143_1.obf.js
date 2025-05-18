var a0_0x5a11c9 = (function () {
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
    a0_0x5a11c9(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x38cd67('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x38cd67();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nmp = Arr['shift']()['split']('\x20')['map'](Number);
    if (nmp[0x0] == 0x0 && nmp[0x1] == 0x0 && nmp[0x2] == 0x0)
        break;
    var n = nmp[0x0];
    var m = nmp[0x1] - 0x1;
    var p = nmp[0x2];
    var arr = [];
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr['push'](v);
        sum += v * 0x64;
    }
    sum = sum * (0x64 - p) / 0x64;
    var ans = 0x0;
    if (arr[m] != 0x0)
        ans = Math['floor'](sum / arr[m]);
    console['log'](ans);
}
function a0_0x38cd67(ret) {
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