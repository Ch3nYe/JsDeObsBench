var a0_0x2a2f49 = (function () {
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
    a0_0x2a2f49(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x41b9a8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x41b9a8();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var x = input['trim']()['split']('\x20')['map'](Number);
var cnt = 0x0;
for (var a = 0x1; a <= 0x9; a++) {
    for (var b = 0x1; b <= 0x9; b++) {
        for (var c = 0x1; c <= 0x9; c++) {
            for (var d = 0x1; d <= 0x8; d++) {
                for (var e = 0x1; e <= 0x9; e++) {
                    for (var f = 0x1; f <= 0x9; f++) {
                        var z = (a + c + f + (b + e) * 0xa + d * 0x64 + '')['split']('')['map'](Number);
                        if (z['length'] != 0x3)
                            continue;
                        z = [
                            a,
                            b,
                            c,
                            d,
                            e,
                            f
                        ]['concat'](z);
                        var flag = z['every'](function (v, i) {
                            return (x[i] == v || x[i] == -0x1) && z['indexOf'](i + 0x1) >= 0x0;
                        });
                        if (flag)
                            cnt++;
                    }
                }
            }
        }
    }
}
console['log'](cnt);
function a0_0x41b9a8(ret) {
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