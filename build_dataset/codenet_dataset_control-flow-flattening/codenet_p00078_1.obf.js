function bomb(y, x) {
    var amzYZP = {
        'mOxJE': function (x, y) {
            return x < y;
        },
        'GTXYj': function (x, y) {
            return x == y;
        },
        'vbFYT': function (x, y) {
            return x >= y;
        },
        'VpBoI': function (x, y) {
            return x - y;
        },
        'dENYm': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'oDKVN': function (x, y) {
            return x + y;
        },
        'OPgZD': function (x, y) {
            return x - y;
        },
        'OOwcG': function (x, y) {
            return x + y;
        }
    };
    var kTPWMU = '1|4|0|2|3|5'['split']('|');
    var lFxndO = 0x0;
    while (!![]) {
        switch (kTPWMU[lFxndO++]) {
        case '0':
            if (amzYZP['mOxJE'](y, 0x0))
                y = n - 0x1;
            continue;
        case '1':
            if (amzYZP['GTXYj'](N, max))
                return;
            continue;
        case '2':
            if (amzYZP['vbFYT'](x, n))
                x = 0x0;
            continue;
        case '3':
            if (y >= n)
                y = 0x0;
            continue;
        case '4':
            if (amzYZP['mOxJE'](x, 0x0))
                x = amzYZP['VpBoI'](n, 0x1);
            continue;
        case '5':
            if (yx[y][x] != -0x1) {
                amzYZP['dENYm'](bomb, amzYZP['oDKVN'](y, 0x1), amzYZP['OPgZD'](x, 0x1));
            } else {
                yx[y][x] = amzYZP['OOwcG']('\x20\x20\x20', N)['slice'](-0x4);
                N++;
                amzYZP['dENYm'](bomb, amzYZP['oDKVN'](y, 0x1), amzYZP['OOwcG'](x, 0x1));
            }
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var n = Arr[i];
    var max = n * n + 0x1;
    if (n == 0x0)
        break;
    var yx = [];
    for (var j = 0x0; j < n; j++) {
        yx[j] = [];
        for (var k = 0x0; k < n; k++) {
            yx[j][k] = -0x1;
        }
    }
    var N = 0x1;
    bomb(Math['floor'](n / 0x2) + 0x1, Math['floor'](n / 0x2));
    console['log'](yx['join']('\x0a')['replace'](/\,/g, ''));
}