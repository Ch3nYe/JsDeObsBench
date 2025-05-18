function bomb(y, x) {
    var zSgRpK = {
        'qcodZ': function (x, y) {
            return x == y;
        },
        'rJfDM': function (x, y) {
            return x + y;
        },
        'SZVYl': function (x, y) {
            return x >= y;
        },
        'Kiwvl': function (x, y) {
            return x == y;
        },
        'LDKHf': function (x, y) {
            return x + y;
        },
        'ulnZb': function (x, y) {
            return x + y;
        },
        'BljWS': function (x, y) {
            return x < y;
        },
        'BqOkq': function (x, y) {
            return x >= y;
        },
        'LfYDs': function (x, y) {
            return x == y;
        },
        'HrSvu': function (x, y) {
            return x != y;
        }
    };
    if (zSgRpK['qcodZ'](yx[y][x], 0x1))
        return;
    else if (zSgRpK['qcodZ'](yx[y][x], 0x2)) {
        var Y = zSgRpK['rJfDM'](y, 0x2);
        var X = x;
        if (zSgRpK['SZVYl'](Y, h)) {
            cnt++;
            return;
        }
        bomb(Y, X);
    } else if (zSgRpK['Kiwvl'](yx[y][x], 0x0)) {
        var dx = [
            -0x1,
            0x0,
            0x1
        ];
        for (var i = 0x0; i < dx['length']; i++) {
            var Y = zSgRpK['LDKHf'](y, 0x1);
            var X = zSgRpK['ulnZb'](x, dx[i]);
            if (zSgRpK['BljWS'](X, 0x0) || zSgRpK['SZVYl'](X, w))
                continue;
            if (zSgRpK['BqOkq'](Y, h)) {
                cnt++;
                return;
            }
            if (zSgRpK['LfYDs'](yx[Y][X], 0x2) && zSgRpK['HrSvu'](dx[i], 0x0))
                continue;
            bomb(Y, X);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wh = arr['shift']()['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    if (w == 0x0 && h == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var cnt = 0x0;
    for (var i = 0x0; i < w; i++) {
        bomb(0x0, i);
    }
    console['log'](cnt);
}