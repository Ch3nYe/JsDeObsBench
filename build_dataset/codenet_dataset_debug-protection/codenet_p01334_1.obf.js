function bomb(y, x) {
    var _0x25111b = (function () {
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
        _0x25111b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x15effa('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x15effa();
            }
        })();
    }());
    var Y = yx[y][x][0x1];
    var X = yx[y][x][0x0];
    if (ring['hasOwnProperty'](Y + ',' + X)) {
        var flag = !![];
        for (var k in ring) {
            if (obj['hasOwnProperty'](k))
                flag = ![];
            obj[k] = !![];
        }
        if (flag)
            cnt++;
    } else {
        ring[Y + ',' + X] = !![];
        bomb(Y, X);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var tile = arr['shift']()['split']('\x20')['map'](Number);
        var t = [];
        for (var j = 0x0; j < n; j++)
            t[j] = [
                tile['shift'](),
                tile['shift']()
            ];
        yx['push'](t);
    }
    var obj = {};
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (obj['hasOwnProperty'](i + ',' + j))
                continue;
            var ring = {};
            ring[i + ',' + j] = !![];
            bomb(i, j);
        }
    }
    console['log'](cnt);
}
function _0x15effa(ret) {
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