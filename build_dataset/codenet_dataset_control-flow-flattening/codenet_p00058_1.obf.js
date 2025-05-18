var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var eHwYBh = {
            'gLFhw': '1|2|6|4|3|5|7|8|0',
            'kcyRf': function (x, y) {
                return x !== y;
            },
            'YFiMU': function (x, y) {
                return x - y;
            },
            'jFFEU': function (x, y) {
                return x / y;
            },
            'nZAfl': function (x, y) {
                return x - y;
            },
            'tkIDF': function (x, y) {
                return x == y;
            },
            'XKYag': function (x, y) {
                return x == y;
            },
            'bmSLI': 'YES',
            'uAHjc': function (x, y) {
                return x - y;
            },
            'fQtfQ': function (x, y) {
                return x == y;
            },
            'aXyGM': function (x, y) {
                return x * y;
            },
            'NrBof': function (x, y) {
                return x != y;
            }
        };
        var BLSgni = eHwYBh['gLFhw']['split']('|');
        var wYTHXk = 0x0;
        while (!![]) {
            switch (BLSgni[wYTHXk++]) {
            case '0':
                console['log'](ans);
                continue;
            case '1':
                var k1;
                continue;
            case '2':
                var k2;
                continue;
            case '3':
                var ans = 'NO';
                continue;
            case '4':
                if (eHwYBh['kcyRf'](eHwYBh['YFiMU'](x4, x3), 0x0))
                    k2 = eHwYBh['jFFEU'](y4 - y3, eHwYBh['nZAfl'](x4, x3)['toFixed'](0xb));
                else
                    k2 = Infinity;
                continue;
            case '5':
                if (eHwYBh['tkIDF'](k1, 0x0) && eHwYBh['XKYag'](k2, Infinity))
                    ans = eHwYBh['bmSLI'];
                continue;
            case '6':
                if (eHwYBh['kcyRf'](eHwYBh['uAHjc'](x2, x1), 0x0))
                    k1 = (eHwYBh['YFiMU'](y2, y1) / (x2 - x1))['toFixed'](0xb);
                else
                    k1 = Infinity;
                continue;
            case '7':
                if (eHwYBh['fQtfQ'](k2, 0x0) && k1 == Infinity)
                    ans = eHwYBh['bmSLI'];
                continue;
            case '8':
                if (k1 == eHwYBh['aXyGM'](-0x1, k2) && (eHwYBh['NrBof'](k1, 0x0) && eHwYBh['NrBof'](k2, 0x0)))
                    ans = eHwYBh['bmSLI'];
                continue;
            }
            break;
        }
    }['apply'](null, arr));
}