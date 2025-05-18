function warshall() {
    var _0xc40a60 = (function () {
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
        _0xc40a60(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x118db1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x118db1();
            }
        })();
    }());
    for (var k = 0x0; k < n; k++) {
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; j < n; j++) {
                C[i][j] = Math['min'](C[i][j], C[i][k] + C[k][j]);
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = 0xa;
    var m = Arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var C = [];
    for (var i = 0x0; i < n; i++) {
        C[i] = [];
        for (var j = 0x0; j < n; j++) {
            C[i][j] = i === j ? 0x0 : Infinity;
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < m; i++) {
        var A = Arr['shift']()['split']('\x20')['map'](Number);
        max = Math['max'](max, A[0x0], A[0x1]);
        C[A[0x0]][A[0x1]] = A[0x2];
        C[A[0x1]][A[0x0]] = A[0x2];
    }
    warshall();
    var min = [
        '',
        Infinity
    ];
    for (var i = max; i >= 0x0; i--) {
        var arr = C[i]['slice'](0x0, max + 0x1);
        var sum = arr['reduce'](function (a, b) {
            return a + b;
        });
        min[0x1] = Math['min'](min[0x1], sum);
        if (min[0x1] == sum)
            min = [
                i,
                sum
            ];
    }
    console['log'](min['join']('\x20'));
}
function _0x118db1(ret) {
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