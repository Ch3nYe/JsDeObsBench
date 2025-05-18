function bomb(y, x) {
    var _0x2725c6 = (function () {
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
        _0x2725c6(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x41d3df('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x41d3df();
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
        if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W)
            continue;
        if (yx[yy][xx] == '.') {
            cnt++;
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var WH = Arr['shift']()['split']('\x20')['map'](Number);
    var W = WH[0x0];
    var H = WH[0x1];
    if (W == 0x0 && H == 0x0)
        break;
    var yx = [];
    var Y, X;
    for (var i = 0x0; i < H; i++) {
        var arr = Arr['shift']()['split']('');
        if (arr['indexOf']('@') != -0x1) {
            Y = i;
            X = arr['indexOf']('@');
        }
        yx['push'](arr);
    }
    var cnt = 0x1;
    bomb(Y, X);
    console['log'](cnt);
}
function _0x41d3df(ret) {
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