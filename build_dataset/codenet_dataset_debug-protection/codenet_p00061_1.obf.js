var a0_0x1655b5 = (function () {
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
    a0_0x1655b5(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x40c3a7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x40c3a7();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a0,0\x0a');
var inputA = Arr[0x0]['split']('\x0a');
var inputB = Arr[0x1]['split']('\x0a')['map'](Number);
var obj = {};
var s = [];
inputA['forEach'](function (v) {
    var arr = v['split'](',')['map'](Number);
    obj[arr[0x0]] = arr[0x1];
    s['push'](arr[0x1]);
});
s['sort'](function (a, b) {
    return b - a;
});
var s0 = s[0x0];
var t = [s0];
for (var i = 0x1; i < s['length']; i++) {
    if (s0 == s[i])
        continue;
    s0 = s[i];
    t['push'](s[i]);
}
inputB['forEach'](function (v) {
    console['log'](t['indexOf'](obj[v]) + 0x1);
});
function a0_0x40c3a7(ret) {
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