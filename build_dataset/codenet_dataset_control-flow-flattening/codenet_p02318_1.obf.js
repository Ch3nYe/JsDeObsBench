function LD(a, b) {
    var sFeYbJ = {
        'meLby': function (x, y) {
            return x < y;
        },
        'fKZUu': function (x, y) {
            return x + y;
        },
        'RLPTW': function (x, y) {
            return x < y;
        },
        'eIcME': function (x, y) {
            return x + y;
        },
        'vOuKz': function (x, y) {
            return x < y;
        },
        'eTKCo': function (x, y) {
            return x - y;
        },
        'Ormks': function (x, y) {
            return x - y;
        },
        'OZYjY': function (x, y) {
            return x - y;
        },
        'hgmIM': function (x, y) {
            return x + y;
        },
        'dxQqf': function (x, y) {
            return x + y;
        },
        'mJKGI': function (x, y) {
            return x - y;
        },
        'CJJuH': function (x, y) {
            return x - y;
        },
        'iNlEY': function (x, y) {
            return x < y;
        },
        'SycTw': function (x, y) {
            return x + y;
        },
        'tmKRm': function (x, y) {
            return x + y;
        }
    };
    var QxAvBP = '4|3|1|5|2|0'['split']('|');
    var nnIKLr = 0x0;
    while (!![]) {
        switch (QxAvBP[nnIKLr++]) {
        case '0':
            return ar[a['length']][b['length']];
        case '1':
            for (var i = 0x0; sFeYbJ['meLby'](i, sFeYbJ['fKZUu'](a['length'], 0x1)); i++) {
                ar[i][0x0] = i;
            }
            continue;
        case '2':
            for (var i = 0x1; sFeYbJ['RLPTW'](i, sFeYbJ['eIcME'](a['length'], 0x1)); i++) {
                for (var j = 0x1; sFeYbJ['vOuKz'](j, sFeYbJ['eIcME'](b['length'], 0x1)); j++) {
                    if (a['charAt'](sFeYbJ['eTKCo'](i, 0x1)) == b['charAt'](sFeYbJ['eTKCo'](j, 0x1))) {
                        ar[i][j] = Math['min'](sFeYbJ['fKZUu'](ar[i - 0x1][j], 0x1), sFeYbJ['fKZUu'](ar[i][sFeYbJ['Ormks'](j, 0x1)], 0x1), ar[sFeYbJ['OZYjY'](i, 0x1)][j - 0x1]);
                    } else {
                        ar[i][j] = Math['min'](sFeYbJ['hgmIM'](ar[sFeYbJ['Ormks'](i, 0x1)][j], 0x1), sFeYbJ['hgmIM'](ar[i][j - 0x1], 0x1), sFeYbJ['dxQqf'](ar[sFeYbJ['mJKGI'](i, 0x1)][sFeYbJ['CJJuH'](j, 0x1)], 0x1));
                    }
                }
            }
            continue;
        case '3':
            for (var i = 0x0; sFeYbJ['iNlEY'](i, sFeYbJ['SycTw'](a['length'], 0x1)); i++) {
                var subar = new Array();
                for (var j = 0x0; sFeYbJ['meLby'](j, sFeYbJ['SycTw'](b['length'], 0x1)); j++) {
                    subar['push'](0x0);
                }
                ar['push'](subar);
            }
            continue;
        case '4':
            var ar = new Array();
            continue;
        case '5':
            for (var i = 0x0; sFeYbJ['iNlEY'](i, sFeYbJ['tmKRm'](b['length'], 0x1)); i++) {
                ar[0x0][i] = i;
            }
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var strings = input['split']('\x0a');
console['log'](LD(strings[0x0], strings[0x1]));