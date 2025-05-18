function Main(input) {
    var UpVwxz = {
        'fvCAD': '13|8|4|14|10|2|5|12|6|1|3|0|15|7|11|9',
        'HILxI': function (x, y) {
            return x + y;
        },
        'Kzdbf': function (x, y) {
            return x + y;
        },
        'wOgFi': function (x, y) {
            return x < y;
        },
        'kLmnD': function (x, y) {
            return x + y;
        },
        'DYBUO': function (x, y) {
            return x >= y;
        },
        'ceBOH': function (x, y) {
            return x + y;
        },
        'byESY': function (x, y) {
            return x + y;
        },
        'FKMfD': function (x, y) {
            return x <= y;
        },
        'fuBKT': function (x, y) {
            return x * y;
        },
        'AnbHu': function (x, y) {
            return x < y;
        },
        'rUriT': function (callee, param1) {
            return callee(param1);
        }
    };
    var RhohMj = UpVwxz['fvCAD']['split']('|');
    var gderVO = 0x0;
    while (!![]) {
        switch (RhohMj[gderVO++]) {
        case '0':
            for (var y = 0x0; y < sum2 + 0x1; y++) {
                b[y] = new Array(UpVwxz['HILxI'](n, 0x1))['fill'](0x0);
            }
            continue;
        case '1':
            for (i = 0x0; i < n; i++) {
                sum2 = sum2 + x[i];
            }
            continue;
        case '2':
            x = new Array(n);
            continue;
        case '3':
            var b = new Array(UpVwxz['Kzdbf'](sum2, 0x1));
            continue;
        case '4':
            var n = parseInt(tmp1[0x0]);
            continue;
        case '5':
            var sum2 = 0x0;
            continue;
        case '6':
            var s = 0x0;
            continue;
        case '7':
            for (j = 0x0; UpVwxz['wOgFi'](j, n); j++) {
                for (i = sum2; i >= 0x0; i--) {
                    for (k = 0x0; k < UpVwxz['kLmnD'](n, 0x1); k++) {
                        if (UpVwxz['DYBUO'](b[i][k], 0x1)) {
                            b[UpVwxz['ceBOH'](i, x[j])][UpVwxz['kLmnD'](k, 0x1)] = b[i + x[j]][UpVwxz['byESY'](k, 0x1)] + b[i][k];
                        }
                    }
                }
            }
            continue;
        case '8':
            tmp1 = input[0x0]['split']('\x20');
            continue;
        case '9':
            console['log']('%s', s);
            continue;
        case '10':
            tmp = input[0x1]['split']('\x20');
            continue;
        case '11':
            for (i = 0x1; UpVwxz['FKMfD'](i, n) && UpVwxz['FKMfD'](UpVwxz['fuBKT'](i, a), sum2); i++) {
                s = UpVwxz['HILxI'](s, b[i * a][i]);
            }
            continue;
        case '12':
            for (i = 0x0; UpVwxz['AnbHu'](i, tmp['length']); i++) {
                x[i] = parseInt(tmp[i]);
            }
            continue;
        case '13':
            input = input['split']('\x0a');
            continue;
        case '14':
            var a = UpVwxz['rUriT'](parseInt, tmp1[0x1]);
            continue;
        case '15':
            b[0x0][0x0] = 0x1;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));