var a0_0x271b71 = (function () {
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
    a0_0x271b71(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x20dfbe('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x20dfbe();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var obj = {};
    var ary = [];
    for (var i = 0x0; i < N; i++) {
        var nws = arr['shift']()['split']('\x20');
        var name = nws[0x0];
        var w = nws[0x1] - 0x0;
        var s = nws[0x2]['split']('')['map'](Number);
        s = s['length'] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
        obj[name] = w * 0x5a0 + s;
        ary['push'](w * 0x5a0 + s);
    }
    var P = arr['shift']() - 0x0;
    for (var i = 0x0; i < P; i++) {
        var f = arr['shift']();
        ary['push'](obj[f] - 29.5);
    }
    ary['sort'](function (a, b) {
        return a - b;
    });
    var cnt = 0x0;
    var i = 0x0;
    var p = 0x0;
    ary['forEach'](function (v) {
        if (v % 0x1 == 0.5) {
            cnt++;
            p++;
            i = v + 29.5 + 0x1e;
        } else if (i <= v) {
            cnt++;
            i = v + 0x1e;
        }
    });
    if (p != P)
        cnt = -0x1;
    console['log'](cnt);
}
function a0_0x20dfbe(ret) {
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