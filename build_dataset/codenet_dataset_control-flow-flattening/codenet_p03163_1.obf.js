function main(input) {
    var ujihTd = {
        'UZYuY': function (x, y) {
            return x < y;
        },
        'fiXIk': function (x, y) {
            return x + y;
        },
        'cnbvq': function (callee, param1) {
            return callee(param1);
        },
        'pVqze': function (x, y) {
            return x <= y;
        },
        'tIaqV': function (x, y) {
            return x + y;
        },
        'grGiQ': function (x, y) {
            return x > y;
        },
        'pnQZU': function (x, y) {
            return x + y;
        },
        'ZgiDn': function (x, y) {
            return x + y;
        }
    };
    const lines = input['split']('\x0a');
    const NW = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const N = NW[0x0];
    const W = NW[0x1];
    const items = lines['map'](line => line['split']('\x20')['map'](x => parseInt(x)));
    dp = [];
    for (var i = 0x0; ujihTd['UZYuY'](i, ujihTd['fiXIk'](W, 0x1)); i++) {
        dp['push'](ujihTd['cnbvq'](Array, ujihTd['fiXIk'](N, 0x1))['fill'](0x0));
    }
    var result = 0x0;
    for (var i = 0x0; ujihTd['UZYuY'](i, N); i++) {
        for (var w = 0x0; ujihTd['pVqze'](w, W); w++) {
            var weight = items[i][0x0];
            var value = items[i][0x1];
            if (ujihTd['pVqze'](weight, w)) {
                dp[w][ujihTd['tIaqV'](i, 0x1)] = Math['max'](dp[w][i], ujihTd['fiXIk'](dp[w - weight][i], value));
            } else {
                dp[w][ujihTd['fiXIk'](i, 0x1)] = dp[w][i];
            }
            if (ujihTd['grGiQ'](dp[w][ujihTd['pnQZU'](i, 0x1)], result)) {
                result = dp[w][ujihTd['ZgiDn'](i, 0x1)];
            }
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));