var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['forEach'](function (value) {
    var BrrJBt = {
        'VNLvY': '2|9|8|7|10|4|0|12|3|5|1|11|6',
        'kEiyR': function (x, y) {
            return x - y;
        },
        'QZwzc': function (x, y) {
            return x < y;
        },
        'GesDT': function (x, y) {
            return x <= y;
        },
        'TOUgO': function (x, y) {
            return x % y;
        },
        'lCjKi': function (x, y) {
            return x + y;
        }
    };
    var bMDzYy = BrrJBt['VNLvY']['split']('|');
    var sVHKIY = 0x0;
    while (!![]) {
        switch (bMDzYy[sVHKIY++]) {
        case '0':
            f[0x1] = 0x2;
            continue;
        case '1':
            var cnt = 0x0;
            continue;
        case '2':
            var YSlJuP = {
                'kNKrU': function (x, y) {
                    return x - y;
                }
            };
            continue;
        case '3':
            f['shift']();
            continue;
        case '4':
            f[0x0] = 0x1;
            continue;
        case '5':
            f['sort'](function (a, b) {
                return YSlJuP['kNKrU'](a, b);
            });
            continue;
        case '6':
            console['log'](BrrJBt['kEiyR'](f['length'], cnt));
            continue;
        case '7':
            var d = vd[0x1];
            continue;
        case '8':
            var v = vd[0x0];
            continue;
        case '9':
            var vd = value['split']('\x20')['map'](Number);
            continue;
        case '10':
            var f = [];
            continue;
        case '11':
            for (var i = 0x1; BrrJBt['QZwzc'](i, f['length']); i++) {
                if (BrrJBt['QZwzc'](BrrJBt['kEiyR'](f[i], f[BrrJBt['kEiyR'](i, 0x1)]), d))
                    cnt++;
            }
            continue;
        case '12':
            for (var i = 0x2; BrrJBt['GesDT'](i, v); i++) {
                f[i] = BrrJBt['TOUgO'](BrrJBt['lCjKi'](f[BrrJBt['kEiyR'](i, 0x1)], f[BrrJBt['kEiyR'](i, 0x2)]), 0x3e9);
            }
            continue;
        }
        break;
    }
});