var a0_0x130eaf = (function () {
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
    a0_0x130eaf(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xad37b8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xad37b8();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var b = a['slice']()['sort']((x, y) => x - y);
var q = arr['shift']() - 0x0;
var xy = arr['map'](v => v['split']('\x20')['map'](Number)['map'](v => v - 0x1));
xy['unshift']([
    0x0,
    0x0
]);
var A = {};
var B = {};
for (var i = 0x0; i < a['length']; i++) {
    if (a[i] != b[i]) {
        A[i] = a[i];
        B[i] = b[i];
    }
}
var BB = '';
for (var k in B)
    BB += B[k];
var flag = ![];
for (var i = 0x0; i <= q; i++) {
    [A[xy[i][0x0]], A[xy[i][0x1]]] = [
        A[xy[i][0x1]],
        A[xy[i][0x0]]
    ];
    var AA = '';
    for (var k in A)
        AA += A[k];
    if (AA == BB) {
        flag = !![];
        break;
    }
}
if (Object['keys'](A)['length'] == 0x0)
    console['log'](0x0);
else if (flag)
    console['log'](i);
else
    console['log'](-0x1);
function a0_0xad37b8(ret) {
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