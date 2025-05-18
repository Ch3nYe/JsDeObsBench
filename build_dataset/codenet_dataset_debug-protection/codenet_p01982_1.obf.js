var a0_0x4fe9cd = (function () {
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
    a0_0x4fe9cd(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xe2c485('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xe2c485();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nlr = arr['shift']()['split']('\x20')['map'](Number);
    if (nlr['join']('') == '000')
        break;
    var [n, l, r] = [
        nlr[0x0],
        nlr[0x1],
        nlr[0x2]
    ];
    var A = [];
    for (var i = 0x0; i < n; i++)
        A['push'](arr['shift']() - 0x0);
    var cnt = 0x0;
    for (var x = l; x <= r; x++) {
        var flag = !![];
        for (var i = 0x0; i < A['length']; i++) {
            if (x % A[i] == 0x0) {
                flag = ![];
                if ((i + 0x1) % 0x2 != 0x0)
                    cnt++;
                break;
            }
        }
        if (flag && n % 0x2 == 0x0)
            cnt++;
    }
    console['log'](cnt);
}
function a0_0xe2c485(ret) {
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