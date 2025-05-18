function stoneRemove() {
    var qqAlgb = {
        'mXFFp': function (x, y) {
            return x * y;
        },
        'btHhq': function (x, y) {
            return x < y;
        },
        'eNwTa': function (x, y) {
            return x < y;
        },
        'Khdhu': function (x, y) {
            return x != y;
        },
        'KjLtm': function (x, y) {
            return x + y;
        },
        'EHtQN': function (x, y) {
            return x + y;
        }
    };
    yx['forEach'](function (v, i) {
        var str = v['join']('')['replace'](/([1-9])\1{2,}/, function (x) {
            point += qqAlgb['mXFFp'](x[0x0] - 0x0, x['length']);
            return x['replace'](/./g, '0');
        });
        yx[i] = str['split']('')['map'](Number);
    });
    var flag = !![];
    while (flag) {
        flag = ![];
        for (var i = 0x0; qqAlgb['btHhq'](i, H - 0x1); i++) {
            for (var j = 0x0; qqAlgb['eNwTa'](j, 0x5); j++) {
                if (qqAlgb['Khdhu'](yx[i][j], 0x0) && yx[qqAlgb['KjLtm'](i, 0x1)][j] == 0x0) {
                    yx[qqAlgb['EHtQN'](i, 0x1)][j] = yx[i][j];
                    yx[i][j] = 0x0;
                    flag = !![];
                }
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var h = arr['shift']() - 0x0;
    if (h == 0x0)
        break;
    var H = h;
    var yx = [];
    while (h--)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var point = 0x0;
    var p = point;
    while (!![]) {
        stoneRemove();
        if (p == point)
            break;
        p = point;
    }
    console['log'](point);
}