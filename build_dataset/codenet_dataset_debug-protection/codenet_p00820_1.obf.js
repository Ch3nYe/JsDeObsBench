var a0_0x1d16f8 = (function () {
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
    a0_0x1d16f8(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x23fd7b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x23fd7b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
arr['some'](function (v) {
    if (v == 0x0)
        return !![];
    var cnt = 0x0;
    for (var a = 0x1; a <= 0xb5; a++) {
        var A = a * a;
        if (v < A)
            break;
        if (A == v)
            cnt++;
        for (var b = a; b <= 0xb5; b++) {
            var B = A + b * b;
            if (v < B)
                break;
            if (B == v)
                cnt++;
            for (var c = b; c <= 0xb5; c++) {
                var C = B + c * c;
                if (v < C)
                    break;
                if (C == v)
                    cnt++;
                for (var d = c; d <= 0xb5; d++) {
                    var D = C + d * d;
                    if (v < D)
                        break;
                    if (D == v)
                        cnt++;
                }
            }
        }
    }
    console['log'](cnt);
});
function a0_0x23fd7b(ret) {
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