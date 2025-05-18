function lcs(x, y) {
    var zRGpkG = {
        'SRraI': '1|4|0|3|2',
        'TaWjK': function (x, y) {
            return x <= y;
        },
        'xXcOB': function (x, y) {
            return x == y;
        },
        'aqumx': function (x, y) {
            return x + y;
        },
        'efKzy': function (x, y) {
            return x - y;
        },
        'fEIHG': function (x, y) {
            return x - y;
        }
    };
    var eJdyxK = zRGpkG['SRraI']['split']('|');
    var nljrsw = 0x0;
    while (!![]) {
        switch (eJdyxK[nljrsw++]) {
        case '0':
            for (var i = 0x1; zRGpkG['TaWjK'](i, m); i++) {
                c[i][0x0] = 0x0;
            }
            continue;
        case '1':
            var m = x['length'];
            continue;
        case '2':
            for (var i = 0x1; i <= m; i++) {
                for (var j = 0x1; j <= n; j++) {
                    if (zRGpkG['xXcOB'](x[i], y[j])) {
                        c[i][j] = zRGpkG['aqumx'](c[zRGpkG['efKzy'](i, 0x1)][zRGpkG['efKzy'](j, 0x1)], 0x1);
                    } else if (c[i - 0x1][j] >= c[i][zRGpkG['efKzy'](j, 0x1)]) {
                        c[i][j] = c[zRGpkG['efKzy'](i, 0x1)][j];
                    } else {
                        c[i][j] = c[i][zRGpkG['fEIHG'](j, 0x1)];
                    }
                }
            }
            continue;
        case '3':
            for (var j = 0x1; j <= n; j++) {
                c[0x0][j] = 0x0;
            }
            continue;
        case '4':
            var n = y['length'];
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var n = +lines['shift']() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
    var rlrWgc = '1|4|0|3|5|2'['split']('|');
    var abdfsh = 0x0;
    while (!![]) {
        switch (rlrWgc[abdfsh++]) {
        case '0':
            var c = [[0x0]];
            continue;
        case '1':
            var a = lines['shift']();
            continue;
        case '2':
            console['log'](c[a['length']][b['length']]);
            continue;
        case '3':
            for (var i = 0x1; i <= a['length']; i++) {
                var arr = [-0x1];
                c['push'](arr);
            }
            continue;
        case '4':
            var b = lines['shift']();
            continue;
        case '5':
            lcs(a, b);
            continue;
        }
        break;
    }
}