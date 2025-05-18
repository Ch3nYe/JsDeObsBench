var a0_0x26be80 = (function () {
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
    a0_0x26be80(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4a01c8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4a01c8();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var str = '';
    for (var i = 0x0; i < n; i++)
        str += Arr['shift']() + '\x20';
    var arr = str['trim']()['split']('\x20');
    var s = Arr['shift']();
    var f = arr['filter'](function (v) {
        return v[0x0] == s;
    });
    f['sort']();
    var F = [];
    var memo = '';
    for (var i = 0x0; i < f['length']; i++) {
        if (memo == f[i]) {
            F[F['length'] - 0x1] = [
                f[i],
                F[F['length'] - 0x1][0x1] + 0x1
            ];
        } else {
            F['push']([
                f[i],
                0x1
            ]);
            memo = f[i];
        }
    }
    F['sort'](function (a, b) {
        if (a[0x1] == b[0x1])
            return a[0x0] > b[0x0];
        else
            return b[0x1] - a[0x1];
    });
    var ans = [];
    for (var i = 0x0; i < 0x5; i++) {
        if (F['length'] > i)
            ans['push'](F[i][0x0]);
    }
    console['log'](ans['length'] > 0x0 ? ans['join']('\x20') : 'NA');
}
function a0_0x4a01c8(ret) {
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