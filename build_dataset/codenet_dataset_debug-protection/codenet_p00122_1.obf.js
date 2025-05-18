function bomb(x, y, z) {
    var _0x44748d = (function () {
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
        _0x44748d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2615bf('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2615bf();
            }
        })();
    }());
    max = Math['max'](max, z);
    if (max == n)
        return;
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x1,
        0x0,
        0x1
    ];
    var dy = [
        -0x2,
        -0x2,
        -0x2,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x2,
        0x2,
        0x2
    ];
    var Safe = {};
    for (var i = -0x1; i <= 0x1; i++) {
        for (var j = -0x1; j <= 0x1; j++) {
            Safe[water[z * 0x2] + i + '\x20' + (water[z * 0x2 + 0x1] + j)] = !![];
        }
    }
    for (var i = 0x0; i < 0xc; i++) {
        var xx = x + dx[i];
        var yy = y + dy[i];
        if (xx < 0x0 || yy < 0x0 || xx >= 0xa || yy >= 0xa)
            continue;
        if (Safe['hasOwnProperty'](xx + '\x20' + yy))
            bomb(xx, yy, z + 0x1);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var xy = Arr['shift']()['split']('\x20')['map'](Number);
    if (xy[0x0] == 0x0 && xy[0x1] == 0x0)
        break;
    var n = Arr['shift']() - 0x0;
    var water = Arr['shift']()['split']('\x20')['map'](Number);
    var max = 0x0;
    bomb(xy[0x0], xy[0x1], 0x0);
    console['log'](max == n ? 'OK' : 'NA');
}
function _0x2615bf(ret) {
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