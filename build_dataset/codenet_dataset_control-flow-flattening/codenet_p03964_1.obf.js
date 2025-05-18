function Main(input) {
    var KAEepH = {
        'MvEkD': '5|3|1|6|4|9|2|8|7|0',
        'AhzNg': function (callee, param1) {
            return callee(param1);
        },
        'cfesK': function (x, y) {
            return x < y;
        },
        'ZsRYc': function (callee, param1) {
            return callee(param1);
        },
        'oufRo': function (x, y) {
            return x + y;
        },
        'iEsLI': function (x, y) {
            return x < y;
        },
        'oDsRs': function (x, y) {
            return x >= y;
        },
        'qVRhp': function (x, y) {
            return x * y;
        },
        'xQOKC': function (x, y) {
            return x * y;
        },
        'SliHh': function (x, y) {
            return x / y;
        },
        'nEnaq': function (x, y) {
            return x * y;
        },
        'UzGQy': function (x, y) {
            return x / y;
        }
    };
    var cZvgtc = KAEepH['MvEkD']['split']('|');
    var oSYGAV = 0x0;
    while (!![]) {
        switch (cZvgtc[oSYGAV++]) {
        case '0':
            console['log']('%s', ans);
            continue;
        case '1':
            t = new Array(n)['fill'](0x0);
            continue;
        case '2':
            var avote = a[0x0];
            continue;
        case '3':
            var n = KAEepH['AhzNg'](parseInt, input[0x0]);
            continue;
        case '4':
            for (i = 0x0; KAEepH['cfesK'](i, n); i++) {
                t[i] = KAEepH['ZsRYc'](parseInt, input[i + 0x1]['split']('\x20')[0x0]);
                a[i] = parseInt(input[i + 0x1]['split']('\x20')[0x1]);
            }
            continue;
        case '5':
            input = input['split']('\x0a');
            continue;
        case '6':
            a = new Array(n)['fill'](0x0);
            continue;
        case '7':
            var ans = KAEepH['oufRo'](avote, tvote);
            continue;
        case '8':
            for (i = 0x1; KAEepH['iEsLI'](i, n); i++) {
                if (KAEepH['oDsRs'](KAEepH['qVRhp'](KAEepH['xQOKC'](Math['ceil'](KAEepH['SliHh'](tvote, t[i])), t[i]) / t[i], a[i]), avote)) {
                    tvote = Math['ceil'](KAEepH['SliHh'](tvote, t[i])) * t[i];
                    avote = KAEepH['nEnaq'](KAEepH['UzGQy'](KAEepH['xQOKC'](Math['ceil'](KAEepH['SliHh'](tvote, t[i])), t[i]), t[i]), a[i]);
                } else {
                    tvote = KAEepH['xQOKC'](KAEepH['SliHh'](KAEepH['qVRhp'](Math['ceil'](KAEepH['SliHh'](avote, a[i])), a[i]), a[i]), t[i]);
                    avote = KAEepH['nEnaq'](Math['ceil'](KAEepH['UzGQy'](avote, a[i])), a[i]);
                }
            }
            continue;
        case '9':
            var tvote = t[0x0];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));