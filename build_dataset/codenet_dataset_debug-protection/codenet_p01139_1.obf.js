function bomb(y, x) {
    var _0x214393 = (function () {
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
        _0x214393(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x132495('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x132495();
            }
        })();
    }());
    cnt++;
    var dx = [
        0x0,
        -0x1,
        0x1,
        0x0
    ];
    var dy = [
        -0x1,
        0x0,
        0x0,
        0x1
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var X = x + dx[i];
        var Y = y + dy[i];
        if (Y >= h || Y < 0x0 || X >= w || X < 0x0)
            continue;
        if (yx[Y][X] == 'S')
            continue;
        else if (yx[Y][X] == '.') {
            yx[Y][X] = 'S';
            bomb(Y, X);
        } else {
            if (color == '' || color == yx[Y][X])
                color = yx[Y][X];
            else
                color = 'bad';
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wh = arr['shift']();
    if (wh == '0\x200')
        break;
    wh = wh['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr['shift']()['split'](''));
    var ans = [
        0x0,
        0x0
    ];
    for (var y = 0x0; y < h; y++) {
        for (var x = 0x0; x < w; x++) {
            var color = '';
            var cnt = 0x0;
            if (yx[y][x] == '.') {
                yx[y][x] = 'S';
                bomb(y, x);
            }
            if (color == 'B')
                ans[0x0] += cnt;
            else if (color == 'W')
                ans[0x1] += cnt;
        }
    }
    console['log'](ans[0x0] + '\x20' + ans[0x1]);
}
function _0x132495(ret) {
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