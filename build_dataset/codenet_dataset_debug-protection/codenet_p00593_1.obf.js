function bomb(y, x, cnt, f) {
    var _0x5b510b = (function () {
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
        _0x5b510b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1a7dd7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1a7dd7();
            }
        })();
    }());
    yx[y][x] = ('\x20\x20\x20' + cnt)['slice'](-0x3);
    if (y == n - 0x1 && x == n - 0x1)
        return;
    else if (y == n - 0x1 && f == -0x1)
        bomb(y, x + 0x1, cnt + 0x1, 0x1);
    else if (y == n - 0x1 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (x == n - 0x1 && f == 0x1)
        bomb(y + 0x1, x, cnt + 0x1, -0x1);
    else if (x == n - 0x1 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == 0x1)
        bomb(y, x + 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (x == 0x0 && f == -0x1)
        bomb(y + 0x1, x, cnt + 0x1, 0x1);
    else if (x == 0x0 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x1;
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = [];
        for (var j = 0x0; j < n; j++) {
            yx[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0, 0x1, 0x1);
    console['log']('Case\x20' + I + ':');
    I++;
    console['log'](yx['join']('\x0a')['replace'](/\,/g, ''));
}
function _0x1a7dd7(ret) {
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