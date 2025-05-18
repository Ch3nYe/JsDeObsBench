var a0_0xff5f1c = (function () {
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
    a0_0xff5f1c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x28e9ce('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x28e9ce();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nrl = arr['shift']()['split']('\x20')['map'](Number);
var n = nrl[0x0];
var L = nrl[0x2];
var t = [];
var max = [
    0x0,
    0x0
];
var time = 0x0;
for (var i = 0x0; i < n; i++)
    t[i] = [
        0x0,
        0x0,
        i
    ];
arr['push']([
    0x1,
    L,
    0x0
]['join']('\x20'));
arr['forEach'](function (v) {
    v = v['split']('\x20')['map'](Number);
    var d = v[0x0] - 0x1;
    var T = v[0x1];
    var x = v[0x2];
    t[max[0x0]][0x1] += T - time;
    time = T;
    t[d][0x0] += x;
    if (x > 0x0) {
        if (t[d][0x0] > max[0x1])
            max = [
                d,
                t[d][0x0]
            ];
        else if (t[d][0x0] == max[0x1] && d <= max[0x0])
            max = [
                d,
                t[d][0x0]
            ];
    }
    if (x < 0x0) {
        var MAX = 0x0;
        var m = 0x0;
        t['forEach'](function (V, index) {
            if (MAX < V[0x0])
                m = index;
        });
        max = [
            m,
            t[m][0x0]
        ];
    }
});
t['sort'](function (a, b) {
    if (a[0x1] == b[0x1])
        return a[0x2] - b[0x2];
    else
        return b[0x1] - a[0x1];
});
console['log'](t[0x0][0x2] + 0x1);
function a0_0x28e9ce(ret) {
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