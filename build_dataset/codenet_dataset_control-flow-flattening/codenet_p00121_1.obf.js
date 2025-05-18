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
    var NFAHXq = {
        'nyivH': function (x, y) {
            return x == y;
        },
        'MKRCr': '01234567',
        'vGmWN': function (x, y) {
            return x / y;
        },
        'NrNtB': function (x, y) {
            return x % y;
        },
        'KnDpP': function (x, y) {
            return x < y;
        },
        'HxwEU': function (x, y) {
            return x + y;
        },
        'tvLmI': function (x, y) {
            return x < y;
        },
        'iGBbQ': function (x, y) {
            return x >= y;
        },
        'TgQTo': function (x, y) {
            return x >= y;
        },
        'MViFT': function (x, y) {
            return x == y;
        }
    };
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
        if (NFAHXq['nyivH'](arr['join'](''), NFAHXq['MKRCr'])) {
            console['log'](cnt);
            break;
        }
        var index = arr['indexOf'](0x0);
        var y = Math['floor'](NFAHXq['vGmWN'](index, 0x4));
        var x = NFAHXq['NrNtB'](index, 0x4);
        var yx = [
            arr['slice'](0x0, 0x4),
            arr['slice'](0x4, 0x8)
        ];
        for (var i = 0x0; NFAHXq['KnDpP'](i, 0x4); i++) {
            var yy = NFAHXq['HxwEU'](y, dy[i]);
            var xx = NFAHXq['HxwEU'](x, dx[i]);
            if (NFAHXq['KnDpP'](yy, 0x0) || NFAHXq['tvLmI'](xx, 0x0) || NFAHXq['iGBbQ'](yy, 0x2) || NFAHXq['TgQTo'](xx, 0x4))
                continue;
            yx[y][x] = yx[yy][xx];
            var card = yx[yy][xx];
            yx[yy][xx] = 0x0;
            var YX = yx[0x0]['concat'](yx[0x1]);
            var str = YX['join']('');
            if (NFAHXq['MViFT'](obj['hasOwnProperty'](str), ![])) {
                obj[str] = !![];
                P['push']([
                    YX,
                    NFAHXq['HxwEU'](cnt, 0x1)
                ]);
            }
            yx[yy][xx] = card;
            yx[y][x] = 0x0;
        }
    }
});