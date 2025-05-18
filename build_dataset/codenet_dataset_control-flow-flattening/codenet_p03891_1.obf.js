function Main(input) {
    var QrEfUr = {
        'ADmzv': '3|12|0|7|6|4|5|8|1|10|11|2|9',
        'rlOCN': function (x, y) {
            return x - y;
        },
        'JVLCK': function (x, y) {
            return x - y;
        },
        'xNChH': function (x, y) {
            return x + y;
        },
        'xGAnK': function (x, y) {
            return x + y;
        },
        'SidqW': function (x, y) {
            return x - y;
        },
        'LSBiY': function (x, y) {
            return x - y;
        },
        'TwBkO': function (x, y) {
            return x * y;
        },
        'xqpLI': function (x, y) {
            return x - y;
        },
        'gLPAq': function (x, y) {
            return x + y;
        },
        'LRKZt': function (x, y) {
            return x + y;
        },
        'DDuXj': function (x, y) {
            return x + y;
        }
    };
    var koaVYw = QrEfUr['ADmzv']['split']('|');
    var Adtnri = 0x0;
    while (!![]) {
        switch (koaVYw[Adtnri++]) {
        case '0':
            var x = [
                [
                    data[0x0],
                    data[0x1],
                    0x0
                ],
                [
                    0x0,
                    data[0x2],
                    0x0
                ],
                [
                    0x0,
                    0x0,
                    0x0
                ]
            ];
            continue;
        case '1':
            x[0x1][0x0] = QrEfUr['rlOCN'](QrEfUr['JVLCK'](sum, x[0x0][0x0]), x[0x2][0x0]);
            continue;
        case '2':
            console['log'](QrEfUr['xNChH'](QrEfUr['xGAnK'](QrEfUr['xNChH'](x[0x1][0x0], '\x20'), x[0x1][0x1]) + '\x20', x[0x1][0x2]));
            continue;
        case '3':
            var rbPKmT = {
                'nAkum': function (callee, param1) {
                    return callee(param1);
                }
            };
            continue;
        case '4':
            x[0x2][0x1] = QrEfUr['SidqW'](QrEfUr['LSBiY'](sum, x[0x0][0x1]), x[0x1][0x1]);
            continue;
        case '5':
            x[0x2][0x2] = QrEfUr['JVLCK'](sum - x[0x0][0x0], x[0x1][0x1]);
            continue;
        case '6':
            x[0x0][0x2] = QrEfUr['JVLCK'](QrEfUr['JVLCK'](sum, x[0x0][0x0]), x[0x0][0x1]);
            continue;
        case '7':
            var sum = QrEfUr['TwBkO'](0x3, x[0x1][0x1]);
            continue;
        case '8':
            x[0x2][0x0] = QrEfUr['xqpLI'](sum - x[0x2][0x1], x[0x2][0x2]);
            continue;
        case '9':
            console['log'](QrEfUr['xNChH'](QrEfUr['gLPAq'](QrEfUr['xNChH'](x[0x2][0x0], '\x20') + x[0x2][0x1], '\x20'), x[0x2][0x2]));
            continue;
        case '10':
            x[0x1][0x2] = QrEfUr['SidqW'](QrEfUr['SidqW'](sum, x[0x0][0x2]), x[0x2][0x2]);
            continue;
        case '11':
            console['log'](QrEfUr['LRKZt'](QrEfUr['gLPAq'](QrEfUr['DDuXj'](QrEfUr['gLPAq'](x[0x0][0x0], '\x20'), x[0x0][0x1]), '\x20'), x[0x0][0x2]));
            continue;
        case '12':
            var data = input['split'](/\a\n|\a|\n/)['map'](function (s) {
                return rbPKmT['nAkum'](parseInt, s);
            });
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));