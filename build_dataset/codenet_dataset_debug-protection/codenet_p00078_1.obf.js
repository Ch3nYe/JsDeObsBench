function bomb(y, x) {
    var _0x5f1b24 = (function () {
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
        _0x5f1b24(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x34a0c7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x34a0c7();
            }
        })();
    }());
    if (N == max)
        return;
    if (x < 0x0)
        x = n - 0x1;
    if (y < 0x0)
        y = n - 0x1;
    if (x >= n)
        x = 0x0;
    if (y >= n)
        y = 0x0;
    if (yx[y][x] != -0x1) {
        bomb(y + 0x1, x - 0x1);
    } else {
        yx[y][x] = ('\x20\x20\x20' + N)['slice'](-0x4);
        N++;
        bomb(y + 0x1, x + 0x1);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var n = Arr[i];
    var max = n * n + 0x1;
    if (n == 0x0)
        break;
    var yx = [];
    for (var j = 0x0; j < n; j++) {
        yx[j] = [];
        for (var k = 0x0; k < n; k++) {
            yx[j][k] = -0x1;
        }
    }
    var N = 0x1;
    bomb(Math['floor'](n / 0x2) + 0x1, Math['floor'](n / 0x2));
    console['log'](yx['join']('\x0a')['replace'](/\,/g, ''));
}
function _0x34a0c7(ret) {
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