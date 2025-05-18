function Main(input) {
    var dUHnSp = {
        'TjMLd': function (x, y) {
            return x * y;
        },
        'LEkHn': function (x, y) {
            return x - y;
        },
        'qwtVF': function (x, y) {
            return x < y;
        },
        'ZgXTG': function (x, y) {
            return x << y;
        },
        'gEBTT': function (x, y) {
            return x * y;
        },
        'QsEuC': function (x, y) {
            return x != y;
        }
    };
    lines = input['split']('\x0a');
    lines = input['split']('\x0a');
    n = dUHnSp['TjMLd'](lines[0x0]['split']('\x20')[0x0], 0x1);
    m = lines[0x0]['split']('\x20')[0x1] * 0x1;
    ps = lines[dUHnSp['LEkHn'](lines['length'], 0x1)]['split']('\x20');
    lines = lines['slice'](0x1, -0x1)['map'](function (l) {
        return l['split']('\x20')['slice'](0x1);
    });
    ans = 0x0;
    for (i = 0x0; dUHnSp['qwtVF'](i, dUHnSp['ZgXTG'](0x1, n)); i++) {
        s = ('0000000000' + i['toString'](0x2))['slice'](dUHnSp['gEBTT'](-0x1, n));
        flg = !![];
        for (j = 0x0; j < lines['length']; j++) {
            on = 0x0;
            if (!flg)
                break;
            for (k = 0x0; dUHnSp['qwtVF'](k, lines[j]['length']); k++) {
                on += s[dUHnSp['LEkHn'](n, lines[j][k])] * 0x1;
            }
            if (dUHnSp['QsEuC'](on % 0x2, ps[j])) {
                flg = ![];
            }
        }
        if (flg) {
            ans++;
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));