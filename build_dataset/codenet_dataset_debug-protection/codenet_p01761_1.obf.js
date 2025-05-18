var a0_0x265dd4 = (function () {
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
    a0_0x265dd4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xd07090('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xd07090();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var book = [];
for (var i = 0x0; i < n; i++)
    book[i] = arr['shift']();
var q = arr['shift']() - 0x0;
for (var i = 0x0; i < q; i++) {
    if (i != 0x0)
        console['log']('');
    var ans = [];
    var v = arr['shift']()['split']('\x20');
    var a = v[0x0];
    var b = v[0x1];
    var c = v[0x2] != '*' ? new Date(v[0x2])['getTime']() : '*';
    var d = v[0x3] != '*' ? new Date(v[0x3])['getTime']() : '*';
    book['forEach'](function (V) {
        V = V['split']('\x20');
        var A = V[0x0];
        var B = V[0x1];
        var C = new Date(V[0x2])['getTime']();
        var flag = !![];
        if (a != '*') {
            var regex = new RegExp(a);
            if (regex['test'](A) == ![])
                flag = ![];
        }
        if (b != '*') {
            var regex = new RegExp(b);
            if (regex['test'](B) == ![])
                flag = ![];
        }
        if (c != '*') {
            if (c > C)
                flag = ![];
        }
        if (d != '*') {
            if (d < C)
                flag = ![];
        }
        if (flag)
            ans['push'](A);
    });
    ans['forEach'](function (value) {
        console['log'](value);
    });
}
function a0_0xd07090(ret) {
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