function seach(y, x) {
    var _0x47bea3 = (function () {
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
        _0x47bea3(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x34dbac('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x34dbac();
            }
        })();
    }());
    if (yx[y][x] == '*')
        return 0x0;
    var dy = [
        -0x1,
        -0x1,
        0x0
    ];
    var dx = [
        -0x1,
        0x0,
        -0x1
    ];
    var min = n;
    for (var i = 0x0; i < 0x3; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= n || xx < 0x0 || xx >= n)
            return 0x1;
        min = Math['min'](min, yx[yy][xx]);
    }
    return min + 0x1;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var max = 0x0;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var str = Arr['shift']();
        yx['push'](str['split'](''));
    }
    for (var y = 0x0; y < n; y++) {
        for (var x = 0x0; x < n; x++) {
            yx[y][x] = seach(y, x);
            max = Math['max'](max, yx[y][x]);
        }
    }
    console['log'](max);
}
function _0x34dbac(ret) {
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