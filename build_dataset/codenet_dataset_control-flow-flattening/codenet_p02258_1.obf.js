function main(input) {
    var DblXBU = {
        'wvVZW': function (x, y) {
            return x >= y;
        },
        'aBwnv': function (x, y) {
            return x + y;
        },
        'aWJGo': function (callee, param1) {
            return callee(param1);
        }
    };
    var EInWfv = '1|6|3|7|5|0|2|4'['split']('|');
    var UuTMCu = 0x0;
    while (!![]) {
        switch (EInWfv[UuTMCu++]) {
        case '0':
            for (var i = 0x1; i <= N - 0x1; i++) {
                if (DblXBU['wvVZW'](min, values[i])) {
                    min = values[i];
                }
                if (DblXBU['wvVZW'](values[DblXBU['aBwnv'](i, 0x1)] - min, val)) {
                    val = values[i + 0x1] - min;
                }
            }
            continue;
        case '1':
            var LbsGFl = {
                'CgAdo': function (callee, param1) {
                    return DblXBU['aWJGo'](callee, param1);
                }
            };
            continue;
        case '2':
            console['log'](val);
            continue;
        case '3':
            var values = input['map'](function (v) {
                return LbsGFl['CgAdo'](parseInt, v);
            });
            continue;
        case '4':
            return val;
        case '5':
            var N = values[0x0];
            continue;
        case '6':
            input = input['split']('\x0a');
            continue;
        case '7':
            var min = Number['MAX_VALUE'], val = -Number['MAX_VALUE'];
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));