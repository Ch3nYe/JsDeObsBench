function bomb(y, x) {
    var _0x37c44e = (function () {
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
        _0x37c44e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3a6eec('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3a6eec();
            }
        })();
    }());
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    for (var i = 0x0; i < 0x4; i++) {
        for (var j = 0x1; j <= 0x3; j++) {
            var yy = y + dy[i] * j;
            var xx = x + dx[i] * j;
            if (yy < 0x0 || yy >= 0x8 || xx < 0x0 || xx >= 0x8)
                continue;
            if (yx[yy][xx] == 0x1) {
                yx[yy][xx] = 0x0;
                bomb(yy, xx);
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
for (var i = 0x0; i < AL; i++) {
    Arr['shift']();
    var yx = [];
    for (var j = 0x0; j < 0x8; j++) {
        var line = Arr['shift']()['split']('')['map'](Number);
        yx['push'](line);
    }
    var X = Arr['shift']() - 0x0 - 0x1;
    var Y = Arr['shift']() - 0x0 - 0x1;
    if (yx[Y][X] == 0x1) {
        yx[Y][X] = 0x0;
        bomb(Y, X);
    }
    console['log']('Data\x20' + (i + 0x1) + ':');
    for (var j = 0x0; j < 0x8; j++)
        console['log'](yx[j]['join'](''));
}
function _0x3a6eec(ret) {
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