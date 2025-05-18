var a0_0x171e2c = (function () {
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
    a0_0x171e2c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1e93db('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1e93db();
        }
    })();
}());
var objStr = {};
var objNum = {};
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
abc['forEach'](function (v, i) {
    objStr[v] = i;
    objNum[i] = v;
});
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var str = Arr['shift']();
    var AB = [];
    for (var i = 0x0; i < N; i++) {
        var ab = Arr['shift']()['split']('\x20')['map'](Number);
        AB['push'](ab);
    }
    AB['reverse']();
    var s = str['split']('');
    for (var i = 0x0; i < N; i++) {
        var ab = AB[i];
        var plus = ab[0x1] - ab[0x0];
        var m1 = s[ab[0x0] - 0x1];
        var m2 = s[ab[0x1] - 0x1];
        var n1 = objStr[m1] + plus;
        var n2 = objStr[m2] + plus;
        s[ab[0x0] - 0x1] = objNum[n2 % abc['length']];
        s[ab[0x1] - 0x1] = objNum[n1 % abc['length']];
    }
    console['log'](s['join'](''));
}
function a0_0x1e93db(ret) {
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