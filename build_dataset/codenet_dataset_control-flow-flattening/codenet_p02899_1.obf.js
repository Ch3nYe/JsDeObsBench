function Main(input) {
    var aNWjle = {
        'lHyrR': '3|5|2|1|6|8|7|0|4',
        'nDSRD': function (x, y) {
            return x < y;
        },
        'Ldbad': function (x, y) {
            return x < y;
        },
        'LFwnJ': function (x, y) {
            return x + y;
        }
    };
    var aYnTKD = aNWjle['lHyrR']['split']('|');
    var fTCTmg = 0x0;
    while (!![]) {
        switch (aYnTKD[fTCTmg++]) {
        case '0':
            for (i = 0x0; aNWjle['nDSRD'](i, N['length']); i++) {
                ans += N[i][0x1];
                ans += '\x20';
            }
            continue;
        case '1':
            var arr = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '2':
            var N = [];
            continue;
        case '3':
            var smuzst = {
                'OLiiS': function (x, y) {
                    return x - y;
                }
            };
            continue;
        case '4':
            console['log'](ans['trim']());
            continue;
        case '5':
            input = input['split']('\x0a');
            continue;
        case '6':
            for (var i = 0x0; aNWjle['Ldbad'](i, arr['length']); i++) {
                N['push']([
                    arr[i],
                    aNWjle['LFwnJ'](i, 0x1)
                ]);
            }
            continue;
        case '7':
            var ans = '';
            continue;
        case '8':
            N = N['sort'](function (a, b) {
                return smuzst['OLiiS'](a[0x0], b[0x0]);
            });
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());