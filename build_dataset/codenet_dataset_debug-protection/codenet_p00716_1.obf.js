function F1(m, b, c) {
    var _0x590760 = (function () {
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
        _0x590760(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x125cf8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x125cf8();
            }
        })();
    }());
    var sum = 0x0;
    for (var i = 0x0; i < Y; i++) {
        sum += Math['floor'](m * b);
        m -= c;
    }
    return m + sum;
}
function F2(m, b, c) {
    for (var i = 0x0; i < Y; i++) {
        m += Math['floor'](m * b) - c;
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var M = Arr['shift']() - 0x0;
for (var i = 0x0; i < M; i++) {
    var money = Arr['shift']() - 0x0;
    var Y = Arr['shift']() - 0x0;
    var N = Arr['shift']() - 0x0;
    var arr = [];
    for (var j = 0x0; j < N; j++) {
        var D = Arr['shift']()['split']('\x20')['map'](Number);
        if (D[0x0] == 0x0)
            arr['push'](F1(money, D[0x1], D[0x2]));
        if (D[0x0] == 0x1)
            arr['push'](F2(money, D[0x1], D[0x2]));
    }
    console['log'](Math['max']['apply'](null, arr));
}
function _0x125cf8(ret) {
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