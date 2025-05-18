function bomb(y, x) {
    var _0x46e3ba = (function () {
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
        _0x46e3ba(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x30368d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x30368d();
            }
        })();
    }());
    if (yx[y][x] == 0x1)
        return;
    else if (yx[y][x] == 0x2) {
        var Y = y + 0x2;
        var X = x;
        if (Y >= h) {
            cnt++;
            return;
        }
        bomb(Y, X);
    } else if (yx[y][x] == 0x0) {
        var dx = [
            -0x1,
            0x0,
            0x1
        ];
        for (var i = 0x0; i < dx['length']; i++) {
            var Y = y + 0x1;
            var X = x + dx[i];
            if (X < 0x0 || X >= w)
                continue;
            if (Y >= h) {
                cnt++;
                return;
            }
            if (yx[Y][X] == 0x2 && dx[i] != 0x0)
                continue;
            bomb(Y, X);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wh = arr['shift']()['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    if (w == 0x0 && h == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var cnt = 0x0;
    for (var i = 0x0; i < w; i++) {
        bomb(0x0, i);
    }
    console['log'](cnt);
}
function _0x30368d(ret) {
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