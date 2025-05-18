var p = require('fs')['readFileSync']('/dev/stdin', 'utf8');
p = p['split']('\x0a')['map'](a => +a);
console['log'](main());
function main() {
    var mSDHzz = {
        'XYWiN': function (x, y) {
            return x <= y;
        },
        'Wrygb': '4|1|2|0|3',
        'eRoZj': function (x, y) {
            return x !== y;
        },
        'qXOlF': function (x, y) {
            return x > y;
        },
        'YHcGJ': function (x, y) {
            return x < y;
        },
        'GgMfn': function (x, y) {
            return x - y;
        },
        'yzdUx': function (x, y) {
            return x > y;
        },
        'OdolI': function (x, y) {
            return x !== y;
        },
        'ByWZf': 'Yes'
    };
    var N = 'No';
    var n = p[0x0];
    var t = 0x0;
    for (i = 0x1; mSDHzz['XYWiN'](i, n); i++) {
        var nzrtIk = mSDHzz['Wrygb']['split']('|');
        var zwxPpv = 0x0;
        while (!![]) {
            switch (nzrtIk[zwxPpv++]) {
            case '0':
                t = j;
                continue;
            case '1':
                var j = i;
                continue;
            case '2':
                while (mSDHzz['eRoZj'](p[j], i)) {
                    j++;
                    if (p[j] !== j)
                        return N;
                    j++;
                }
                continue;
            case '3':
                while (mSDHzz['qXOlF'](j, i)) {
                    if (mSDHzz['YHcGJ'](p[mSDHzz['GgMfn'](j, 0x2)], p[mSDHzz['GgMfn'](j, 0x1)]))
                        return N;
                    p[j] = p[mSDHzz['GgMfn'](j, 0x2)];
                    j -= 0x2;
                }
                continue;
            case '4':
                while (mSDHzz['yzdUx'](t, i)) {
                    if (mSDHzz['OdolI'](p[i], i))
                        return N;
                    i++;
                }
                continue;
            }
            break;
        }
    }
    return mSDHzz['ByWZf'];
}