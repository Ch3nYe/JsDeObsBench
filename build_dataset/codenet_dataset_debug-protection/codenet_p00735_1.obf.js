var a0_0xdfe3f = (function () {
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
    a0_0xdfe3f(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5f4604('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5f4604();
        }
    })();
}());
var ms = [];
var flag = [];
for (var i = 0x0; i < 0x493e0; i++)
    flag[i] = !![];
var i = 0x1;
while (!![]) {
    var m = 0x7 * i - 0x1;
    var s = 0x7 * i + 0x1;
    if (m > 0x493e0)
        break;
    i++;
    if (flag[m])
        ms['push'](m);
    if (flag[s])
        ms['push'](s);
    var j = 0x2;
    while (!![]) {
        if (m * j > 0x493e0)
            break;
        flag[m * j] = ![];
        flag[s * j] = ![];
        j++;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x1)
        break;
    var ans = [];
    var i = 0x0;
    ms['some'](function (v) {
        if (n % v == 0x0)
            ans['push'](v);
        return n < v;
    });
    console['log'](n + ':\x20' + ans['join']('\x20'));
}
function a0_0x5f4604(ret) {
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