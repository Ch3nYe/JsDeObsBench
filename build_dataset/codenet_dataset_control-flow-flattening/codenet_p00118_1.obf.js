function bomb(y, x, v) {
    var HbYuCE = {
        'rEQRV': function (x, y) {
            return x < y;
        },
        'udFwT': function (x, y) {
            return x + y;
        },
        'YoRrF': function (x, y) {
            return x >= y;
        },
        'kqftx': function (x, y) {
            return x == y;
        },
        'HWtyG': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
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
    for (var i = 0x0; HbYuCE['rEQRV'](i, 0x4); i++) {
        var yy = HbYuCE['udFwT'](y, dy[i]);
        var xx = HbYuCE['udFwT'](x, dx[i]);
        if (HbYuCE['rEQRV'](yy, 0x0) || yy >= n[0x0] || xx < 0x0 || HbYuCE['YoRrF'](xx, n[0x1]))
            continue;
        if (HbYuCE['kqftx'](v, yx[yy][xx])) {
            yx[yy][xx] = 0x0;
            HbYuCE['HWtyG'](bomb, yy, xx, v);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']()['split']('\x20')['map'](Number);
    if (n[0x0] == 0x0 && n[0x1] == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n[0x0]; i++) {
        var arr = Arr['shift']()['split']('');
        yx['push'](arr);
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n[0x0]; i++) {
        for (var j = 0x0; j < n[0x1]; j++) {
            var v = yx[i][j];
            if (v == '@' || v == '#' || v == '*') {
                cnt++;
                yx[i][j] = 0x0;
                bomb(i, j, v);
            }
        }
    }
    console['log'](cnt);
}