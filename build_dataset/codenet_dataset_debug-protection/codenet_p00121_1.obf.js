var a0_0x32700c = (function () {
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
    a0_0x32700c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4f292d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4f292d();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var dy = [
    -0x1,
    0x0,
    0x0,
    0x1
];
var dx = [
    0x0,
    -0x1,
    0x1,
    0x0
];
Arr['forEach'](function (v, I) {
    var V = v['split']('\x20')['map'](Number);
    var obj = {};
    var P = [[
            V,
            0x0
        ]];
    while (P['length'] > 0x0) {
        var A = P['shift']();
        var arr = A[0x0];
        var cnt = A[0x1];
        if (arr['join']('') == '01234567') {
            console['log'](cnt);
            break;
        }
        var index = arr['indexOf'](0x0);
        var y = Math['floor'](index / 0x4);
        var x = index % 0x4;
        var yx = [
            arr['slice'](0x0, 0x4),
            arr['slice'](0x4, 0x8)
        ];
        for (var i = 0x0; i < 0x4; i++) {
            var yy = y + dy[i];
            var xx = x + dx[i];
            if (yy < 0x0 || xx < 0x0 || yy >= 0x2 || xx >= 0x4)
                continue;
            yx[y][x] = yx[yy][xx];
            var card = yx[yy][xx];
            yx[yy][xx] = 0x0;
            var YX = yx[0x0]['concat'](yx[0x1]);
            var str = YX['join']('');
            if (obj['hasOwnProperty'](str) == ![]) {
                obj[str] = !![];
                P['push']([
                    YX,
                    cnt + 0x1
                ]);
            }
            yx[yy][xx] = card;
            yx[y][x] = 0x0;
        }
    }
});
function a0_0x4f292d(ret) {
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