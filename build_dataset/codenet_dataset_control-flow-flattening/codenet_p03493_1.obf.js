function Main(input) {
    var BGSbZS = {
        'WYopA': function (x, y) {
            return x < y;
        },
        'mXRoj': function (x, y) {
            return x == y;
        },
        'lysSn': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var FRORcW = '5|3|4|2|0|1'['split']('|');
    var OxXsAP = 0x0;
    while (!![]) {
        switch (FRORcW[OxXsAP++]) {
        case '0':
            for (var i = 0x0; BGSbZS['WYopA'](i, str['length']); i++) {
                if (BGSbZS['mXRoj'](str[i], '1')) {
                    count += 0x1;
                }
            }
            continue;
        case '1':
            console['log'](count);
            continue;
        case '2':
            var count = 0x0;
            continue;
        case '3':
            var num = BGSbZS['lysSn'](parseInt, args[0x0], 0xa);
            continue;
        case '4':
            var str = num['toString'](0xa);
            continue;
        case '5':
            var args = input['split']('\x20');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));