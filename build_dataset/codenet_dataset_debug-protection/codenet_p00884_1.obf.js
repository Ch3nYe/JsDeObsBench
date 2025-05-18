var a0_0x1e4b14 = (function () {
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
    a0_0x1e4b14(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xec9db2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xec9db2();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var first = Arr['shift']()['split'](':');
    first = first[0x1]['slice'](0x0, -0x1)['split'](',');
    var F = {};
    first['forEach'](function (v) {
        F[v] = !![];
    });
    var obj = {};
    for (var i = 0x0; i < n - 0x1; i++) {
        var arr = Arr['shift']()['split'](':');
        obj[arr[0x0]] = arr[0x1]['slice'](0x0, -0x1)['split'](',');
    }
    var L = 0x0;
    while (!![]) {
        if (L == Object['keys'](F)['length'])
            break;
        L = Object['keys'](F)['length'];
        for (var k in F) {
            if (obj['hasOwnProperty'](k) && F[k]) {
                obj[k]['forEach'](function (v) {
                    F[v] = !![];
                });
                F[k] = ![];
            }
        }
    }
    var cnt = 0x0;
    for (var k in F)
        if (obj['hasOwnProperty'](k) == ![])
            cnt++;
    console['log'](cnt);
}
function a0_0xec9db2(ret) {
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