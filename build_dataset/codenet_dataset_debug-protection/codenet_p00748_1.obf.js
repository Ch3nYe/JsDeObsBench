var a0_0x50cb4e = (function () {
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
    a0_0x50cb4e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1f156e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1f156e();
        }
    })();
}());
var a = [0x1];
for (var i = 0x1; i < 0x186a0; i++)
    a[i] = a[i - 0x1] + i + 0x1;
var b = [0x1];
var i = 0x1;
while (!![]) {
    b[i] = b[i - 0x1] + a[i];
    if (b[i] > 0x186a0)
        break;
    i++;
}
var dpA = [];
var dpB = [];
for (var i = 0x0; i < 0x186a0; i++)
    dpA[i] = Infinity;
for (var i = 0x0; i < 0x186a0; i++)
    dpB[i] = Infinity;
dpA[0x0] = 0x0;
dpB[0x0] = 0x0;
for (var i = 0x0; i < 0x186a0; i++) {
    for (var j = 0x0; j < b['length']; j++) {
        if (i - b[j] >= 0x0)
            dpA[i] = Math['min'](dpA[i - b[j]] + 0x1, dpA[i]);
        if (b[j] % 0x2 == 0x1 && i - b[j] >= 0x0)
            dpB[i] = Math['min'](dpB[i - b[j]] + 0x1, dpB[i]);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    console['log'](dpA[n] + '\x20' + dpB[n]);
}
function a0_0x1f156e(ret) {
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