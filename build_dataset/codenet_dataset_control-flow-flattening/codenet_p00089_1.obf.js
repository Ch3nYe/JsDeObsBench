function bomb(y, x, sum) {
    var EYvbcw = {
        'Folcs': function (x, y) {
            return x > y;
        },
        'KPpfq': function (x, y) {
            return x / y;
        },
        'WzSig': function (x, y) {
            return x - y;
        },
        'kUCcn': function (x, y) {
            return x < y;
        },
        'sPgmQ': function (x, y) {
            return x + y;
        },
        'hTDJW': function (x, y) {
            return x + y;
        },
        'YvnTd': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'cUYGp': function (x, y) {
            return x + y;
        },
        'QBbeB': function (x, y) {
            return x < y;
        },
        'rCPoH': function (x, y) {
            return x + y;
        },
        'pvLNs': function (x, y) {
            return x + y;
        },
        'EzCcE': function (x, y) {
            return x + y;
        },
        'zGfPa': function (x, y) {
            return x <= y;
        },
        'jgJzA': function (x, y) {
            return x >= y;
        },
        'NSfYF': function (x, y) {
            return x - y;
        },
        'yjfHG': function (x, y) {
            return x < y;
        },
        'YghxS': function (x, y) {
            return x + y;
        },
        'uuQKY': function (x, y) {
            return x + y;
        },
        'SOMav': function (x, y) {
            return x < y;
        },
        'lQjeH': function (x, y) {
            return x + y;
        }
    };
    YX[y][x] = sum;
    if (y == yx['length'] - 0x1) {
        max = Math['max'](max, sum);
    } else if (EYvbcw['Folcs'](EYvbcw['KPpfq'](EYvbcw['WzSig'](yx['length'], 0x1), 0x2), y)) {
        if (EYvbcw['kUCcn'](YX[y + 0x1][x], EYvbcw['sPgmQ'](sum, yx[EYvbcw['hTDJW'](y, 0x1)][x])))
            EYvbcw['YvnTd'](bomb, y + 0x1, x, EYvbcw['hTDJW'](sum, yx[EYvbcw['cUYGp'](y, 0x1)][x]));
        if (EYvbcw['QBbeB'](YX[EYvbcw['cUYGp'](y, 0x1)][EYvbcw['rCPoH'](x, 0x1)], sum + yx[EYvbcw['rCPoH'](y, 0x1)][EYvbcw['cUYGp'](x, 0x1)]))
            bomb(y + 0x1, EYvbcw['cUYGp'](x, 0x1), EYvbcw['pvLNs'](sum, yx[EYvbcw['EzCcE'](y, 0x1)][x + 0x1]));
    } else if (EYvbcw['zGfPa'](EYvbcw['KPpfq'](yx['length'] - 0x1, 0x2), y)) {
        if (EYvbcw['jgJzA'](EYvbcw['NSfYF'](x, 0x1), 0x0)) {
            if (EYvbcw['yjfHG'](YX[EYvbcw['YghxS'](y, 0x1)][x - 0x1], EYvbcw['EzCcE'](sum, yx[EYvbcw['sPgmQ'](y, 0x1)][EYvbcw['WzSig'](x, 0x1)])))
                EYvbcw['YvnTd'](bomb, EYvbcw['hTDJW'](y, 0x1), EYvbcw['WzSig'](x, 0x1), EYvbcw['uuQKY'](sum, yx[y + 0x1][EYvbcw['NSfYF'](x, 0x1)]));
        }
        if (EYvbcw['yjfHG'](x, EYvbcw['NSfYF'](yx[y]['length'], 0x1))) {
            if (EYvbcw['SOMav'](YX[EYvbcw['lQjeH'](y, 0x1)][x], EYvbcw['rCPoH'](sum, yx[EYvbcw['uuQKY'](y, 0x1)][x])))
                bomb(y + 0x1, x, EYvbcw['lQjeH'](sum, yx[EYvbcw['uuQKY'](y, 0x1)][x]));
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
var YX = [];
Arr['forEach'](function (v) {
    var x = v['split'](',')['map'](Number);
    var X = x['map'](function (v) {
        return 0x0;
    });
    yx['push'](x);
    YX['push'](X);
});
var max = 0x0;
bomb(0x0, 0x0, yx[0x0][0x0]);
console['log'](max);