var a0_0x1597bc = (function () {
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
    a0_0x1597bc(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x48cf9b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x48cf9b();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nq = arr['shift']()['split']('\x20')['map'](Number);
var player = [];
var maxValue = 0x0;
var maxId = 0x0;
for (var i = 0x0; i < nq[0x0]; i++)
    player[i] = 0x0;
arr['forEach'](function (V) {
    var av = V['split']('\x20')['map'](Number);
    var a = av[0x0] - 0x1;
    var v = av[0x1];
    player[a] += v;
    if (a == maxId && v >= 0x0)
        maxValue += v;
    else if (maxValue == player[a] && maxId > a)
        maxId = a;
    else if (maxValue < player[a]) {
        maxValue = player[a];
        maxId = a;
    } else if (a == maxId && v < 0x0) {
        var max = -0x1 * Infinity;
        player['forEach'](function (value, index) {
            if (max < value) {
                max = value;
                maxValue = value;
                maxId = index;
            }
        });
    }
    console['log'](maxId + 0x1 + '\x20' + maxValue);
});
function a0_0x48cf9b(ret) {
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