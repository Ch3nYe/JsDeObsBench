function Main(input) {
    var tFvEsG = {
        'VSNWu': function (x, y) {
            return x - y;
        },
        'WJIno': function (x, y) {
            return x === y;
        },
        'nBTPq': function (x, y) {
            return x - y;
        },
        'zSXXF': function (x, y) {
            return x - y;
        },
        'lpecY': function (x, y) {
            return x - y;
        },
        'EHhZd': function (x, y) {
            return x >= y;
        },
        'xalWP': function (x, y) {
            return x - y;
        },
        'dSWEs': function (x, y) {
            return x + y;
        },
        'xiUBR': function (x, y) {
            return x < y;
        },
        'xzSmE': function (x, y) {
            return x * y;
        },
        'aKoai': function (x, y) {
            return x + y;
        },
        'RkHQW': function (x, y) {
            return x - y;
        },
        'JRnmI': function (x, y) {
            return x + y;
        },
        'dtbjS': function (x, y) {
            return x + y;
        },
        'Stnov': function (x, y) {
            return x + y;
        },
        'BellO': function (x, y) {
            return x + y;
        },
        'cmNrm': function (x, y) {
            return x + y;
        },
        'NbFVl': function (x, y) {
            return x + y;
        },
        'yhKIF': function (x, y) {
            return x + y;
        },
        'uLnOs': function (x, y) {
            return x + y;
        },
        'rHlKR': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    if (tFvEsG['WJIno'](input[tFvEsG['nBTPq'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = tFvEsG['zSXXF'](input[0x0]['split']('\x20')[0x0], 0x0);
    const K = tFvEsG['lpecY'](input[0x0]['split']('\x20')[0x1], 0x0);
    const x = input[0x1]['split']('\x20')['map'](e => {
        return tFvEsG['VSNWu'](e, 0x0);
    });
    var pointer = x['findIndex'](e => {
        return e => 0x0;
    }) - K;
    if (pointer < 0x0) {
        pointer = 0x0;
    }
    var temp;
    var ret = Infinity;
    for (var i = 0x0; i < K; i++) {
        if (tFvEsG['EHhZd'](tFvEsG['xalWP'](tFvEsG['dSWEs'](pointer + i, K), 0x1), x['length'])) {
            break;
        }
        if (tFvEsG['xiUBR'](tFvEsG['xzSmE'](x[tFvEsG['aKoai'](pointer, i)], x[tFvEsG['RkHQW'](tFvEsG['JRnmI'](tFvEsG['dtbjS'](pointer, i), K), 0x1)]), 0x0)) {
            temp = tFvEsG['Stnov'](tFvEsG['lpecY'](Math['min'](-x[pointer + i], x[tFvEsG['lpecY'](tFvEsG['BellO'](tFvEsG['cmNrm'](pointer, i), K), 0x1)]), x[tFvEsG['NbFVl'](pointer, i)]), x[tFvEsG['yhKIF'](tFvEsG['cmNrm'](pointer, i), K) - 0x1]);
        } else {
            temp = Math['max'](Math['abs'](x[tFvEsG['uLnOs'](pointer, i)]), Math['abs'](x[tFvEsG['rHlKR'](tFvEsG['aKoai'](pointer, i), K) - 0x1]));
        }
        ret = Math['min'](ret, temp);
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));