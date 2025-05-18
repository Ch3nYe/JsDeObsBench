function bomb() {
    var dqhQEf = {
        'WXraQ': function (x, y) {
            return x + y;
        },
        'GdPVi': function (x, y) {
            return x == y;
        },
        'avLGM': function (x, y) {
            return x != y;
        },
        'BnHTR': function (x, y) {
            return x <= y;
        },
        'SvxSP': function (x, y) {
            return x - y;
        },
        'QgGSx': function (x, y) {
            return x + y;
        },
        'yWEuQ': function (x, y) {
            return x + y;
        }
    };
    var obj = {};
    var ans = 'NA';
    var leaf = [
        [
            0x0,
            0x0,
            0x0
        ],
        [
            0x1,
            0x0,
            0x0
        ]
    ];
    while (!![]) {
        if (leaf['length'] == 0x0)
            break;
        var ary = leaf['shift']();
        var x = ary[0x0];
        var y = ary[0x1];
        if (obj['hasOwnProperty'](dqhQEf['WXraQ'](x, ',') + y))
            continue;
        else
            obj[dqhQEf['WXraQ'](x, ',') + y] = !![];
        var cnt = ary[0x2];
        var v = xy[x][y];
        if (dqhQEf['GdPVi'](v, 0x1)) {
            while (!![]) {
                y++;
                if (xy[x][y] != 0x1) {
                    y--;
                    break;
                }
            }
        } else if (v == 0x2) {
            while (!![]) {
                y--;
                if (dqhQEf['avLGM'](xy[x][y], 0x2))
                    break;
            }
        }
        if (dqhQEf['GdPVi'](y, n - 0x1)) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; dqhQEf['BnHTR'](i, 0x2); i++)
            leaf['push']([
                dqhQEf['SvxSP'](0x1, x),
                dqhQEf['QgGSx'](y, i),
                dqhQEf['yWEuQ'](cnt, 0x1)
            ]);
    }
    return ans;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var xy = [];
    xy[0x0] = arr['shift']()['split']('\x20')['map'](Number);
    xy[0x1] = arr['shift']()['split']('\x20')['map'](Number);
    console['log'](bomb());
}