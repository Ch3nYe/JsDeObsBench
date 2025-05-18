function Main(input) {
    var iNevdk = {
        'iEQEL': function (x, y) {
            return x - y;
        },
        'IOXfC': function (x, y) {
            return x == y;
        }
    };
    var xLsmiM = '3|2|4|0|5|6|1'['split']('|');
    var dFCrMy = 0x0;
    while (!![]) {
        switch (xLsmiM[dFCrMy++]) {
        case '0':
            var sum = 0x1;
            continue;
        case '1':
            console['log'](iNevdk['iEQEL'](n, sum));
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            var umcawW = {
                'xShhH': function (x, y) {
                    return iNevdk['IOXfC'](x, y);
                }
            };
            continue;
        case '4':
            var n = Math['pow'](0x3, input[0x0]);
            continue;
        case '5':
            var arr = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '6':
            arr['forEach'](function (val) {
                if (umcawW['xShhH'](val % 0x2, 0x0))
                    sum *= 0x2;
            });
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());