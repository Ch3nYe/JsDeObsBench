var a0_0x5a9e5a = (function () {
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
    a0_0x5a9e5a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xc7b28('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xc7b28();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, d] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && d == 0x0)
        break;
    var S = [];
    var C = [];
    for (var i = 0x0; i < n; i++) {
        var mc = arr[i]['split']('\x20');
        mc['shift']();
        var c = mc['map'](Number)['reverse']();
        var sum = c['length'] != 0x0 ? c['reduce']((a, b) => a + b) : 0x0;
        S[i] = sum;
        C[i] = c;
    }
    while (!![]) {
        var f = ![];
        for (var i = 0x0; i < S['length']; i++) {
            if (S[i] == 0x0)
                continue;
            S[i] -= C[i][0x0];
            if (Math['max'](...S) - Math['min'](...S) <= d) {
                C[i]['shift']();
                f = !![];
                break;
            } else {
                S[i] += C[i][0x0];
            }
        }
        if (f == ![])
            break;
    }
    var sum = S['reduce']((a, b) => a + b);
    if (sum == 0x0)
        console['log']('Yes');
    else
        console['log']('No');
    arr = arr['slice'](n);
}
function a0_0xc7b28(ret) {
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