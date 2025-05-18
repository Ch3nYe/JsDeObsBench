var a0_0x6fa95f = (function () {
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
    a0_0x6fa95f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x26e468('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x26e468();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var pn = arr['shift']()['split']('\x20')['map'](Number);
    if (pn['join']('\x20') == '0\x200')
        break;
    var p = Math['sqrt'](pn[0x0]);
    var n = pn[0x1];
    var max = 0x0;
    var min = Infinity;
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x1; j <= n; j++) {
            var v = i / j;
            if (p > v && max < v) {
                max = v;
                ans[0x1] = i + '/' + j;
            } else if (p < v && min > v) {
                min = v;
                ans[0x0] = i + '/' + j;
            }
        }
    }
    console['log'](ans['join']('\x20'));
}
function a0_0x26e468(ret) {
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