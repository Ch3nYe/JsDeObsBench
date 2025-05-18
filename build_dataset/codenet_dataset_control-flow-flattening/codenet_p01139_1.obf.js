function bomb(y, x) {
    var HEGRpS = {
        'pLpMl': function (x, y) {
            return x < y;
        },
        'IJTVi': function (x, y) {
            return x + y;
        },
        'RvGqL': function (x, y) {
            return x >= y;
        },
        'UnWQS': function (x, y) {
            return x == y;
        },
        'llkLG': 'bad'
    };
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
    for (var i = 0x0; HEGRpS['pLpMl'](i, 0x4); i++) {
        var X = HEGRpS['IJTVi'](x, dx[i]);
        var Y = HEGRpS['IJTVi'](y, dy[i]);
        if (Y >= h || HEGRpS['pLpMl'](Y, 0x0) || HEGRpS['RvGqL'](X, w) || HEGRpS['pLpMl'](X, 0x0))
            continue;
        if (HEGRpS['UnWQS'](yx[Y][X], 'S'))
            continue;
        else if (HEGRpS['UnWQS'](yx[Y][X], '.')) {
            yx[Y][X] = 'S';
            bomb(Y, X);
        } else {
            if (color == '' || HEGRpS['UnWQS'](color, yx[Y][X]))
                color = yx[Y][X];
            else
                color = HEGRpS['llkLG'];
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