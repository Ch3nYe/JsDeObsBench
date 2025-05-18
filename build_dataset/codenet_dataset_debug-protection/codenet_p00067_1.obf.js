function bomb(y, x) {
    var _0x5cf5f9 = (function () {
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
        _0x5cf5f9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2e5060('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2e5060();
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
        if (yy < 0x0 || yy >= 0xc || xx < 0x0 || xx >= 0xc)
            continue;
        if (yx[yy][xx] == 'a') {
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = 0x0;
var cnt = 0x0;
var yx = [];
for (var I = 0x0; I < Arr['length']; I++) {
    n++;
    var v = Arr[I]['replace'](/1/g, 'a');
    var arr = v['split']('');
    yx['push'](arr);
    if (n != 0xc)
        continue;
    cnt = 0x0;
    for (var i = 0x0; i < 0xc; i++) {
        for (var j = 0x0; j < 0xc; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console['log'](cnt);
    n = 0x0;
    yx = [];
    I++;
}
function _0x2e5060(ret) {
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