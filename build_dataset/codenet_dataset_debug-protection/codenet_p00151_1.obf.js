function count(y, x) {
    var _0x5643f7 = (function () {
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
        _0x5643f7(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3587f1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3587f1();
            }
        })();
    }());
    var dy = [
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    var max = 0x1;
    for (var i = 0x0; i < 0x4; i++) {
        var cnt = 0x1;
        for (var j = 0x1; j <= n; j++) {
            var yy = y + dy[i] * j;
            var xx = x + dx[i] * j;
            if (yy < 0x0 || xx < 0x0 || yy >= n || xx >= n)
                break;
            if (yx[yy][xx] != 0x1)
                break;
            cnt++;
        }
        max = Math['max'](max, cnt);
        cnt = 0x1;
    }
    return max;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = Arr['shift']()['split']('')['map'](Number);
    }
    var max = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (yx[i][j] == 0x1)
                max = Math['max'](max, count(i, j));
        }
    }
    console['log'](max);
}
function _0x3587f1(ret) {
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