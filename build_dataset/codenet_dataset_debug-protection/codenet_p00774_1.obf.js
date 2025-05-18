function stoneRemove() {
    var _0x5848c5 = (function () {
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
        _0x5848c5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3973c9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3973c9();
            }
        })();
    }());
    yx['forEach'](function (v, i) {
        var str = v['join']('')['replace'](/([1-9])\1{2,}/, function (x) {
            point += (x[0x0] - 0x0) * x['length'];
            return x['replace'](/./g, '0');
        });
        yx[i] = str['split']('')['map'](Number);
    });
    var flag = !![];
    while (flag) {
        flag = ![];
        for (var i = 0x0; i < H - 0x1; i++) {
            for (var j = 0x0; j < 0x5; j++) {
                if (yx[i][j] != 0x0 && yx[i + 0x1][j] == 0x0) {
                    yx[i + 0x1][j] = yx[i][j];
                    yx[i][j] = 0x0;
                    flag = !![];
                }
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var h = arr['shift']() - 0x0;
    if (h == 0x0)
        break;
    var H = h;
    var yx = [];
    while (h--)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var point = 0x0;
    var p = point;
    while (!![]) {
        stoneRemove();
        if (p == point)
            break;
        p = point;
    }
    console['log'](point);
}
function _0x3973c9(ret) {
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