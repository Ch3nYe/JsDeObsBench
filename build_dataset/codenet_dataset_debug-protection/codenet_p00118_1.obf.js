function bomb(y, x, v) {
    var _0x154358 = (function () {
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
        _0x154358(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x184f86('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x184f86();
            }
        })();
    }());
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= n[0x0] || xx < 0x0 || xx >= n[0x1])
            continue;
        if (v == yx[yy][xx]) {
            yx[yy][xx] = 0x0;
            bomb(yy, xx, v);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']()['split']('\x20')['map'](Number);
    if (n[0x0] == 0x0 && n[0x1] == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n[0x0]; i++) {
        var arr = Arr['shift']()['split']('');
        yx['push'](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n[0x0]; i++) {
        for (var j = 0x0; j < n[0x1]; j++) {
            var v = yx[i][j];
            if (v == '@' || v == '#' || v == '*') {
                cnt++;
                yx[i][j] = 0x0;
                bomb(i, j, v);
            }
        }
    }
    console['log'](cnt);
}
function _0x184f86(ret) {
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