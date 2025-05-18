var a0_0x35bd19 = (function () {
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
    a0_0x35bd19(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3d321b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3d321b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = arr['shift']();
    if (nm == '0\x200\x200')
        break;
    nm = nm['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var start = nm[0x2];
    var ary = [];
    for (var i = 0x0; i <= n; i++)
        ary[i] = !![];
    var i = start;
    var j = 0x0;
    ary[start] = ![];
    var cnt = 0x1;
    while (!![]) {
        if (cnt == ary['length'] - 0x2)
            break;
        if (ary[i]) {
            j++;
            if (j == m) {
                ary[i] = ![];
                j = 0x0;
                cnt++;
            }
        }
        i++;
        if (ary['length'] - 0x1 < i)
            i = 0x1;
    }
    for (var i = 0x1; i <= n; i++) {
        if (ary[i])
            console['log'](i);
    }
}
function a0_0x3d321b(ret) {
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