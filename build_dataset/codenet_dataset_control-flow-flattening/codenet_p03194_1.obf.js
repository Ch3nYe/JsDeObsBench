function Main(input) {
    var tpHwTB = {
        'LthJb': '5|11|2|8|12|10|4|0|9|6|3|7|1',
        'BWLyw': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ncaQg': function (x, y) {
            return x < y;
        },
        'lKyUK': function (x, y) {
            return x + y;
        },
        'JsLVQ': function (x, y) {
            return x >= y;
        },
        'oQRph': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'Sjfrl': function (x, y) {
            return x <= y;
        },
        'bmZWq': function (x, y) {
            return x === y;
        }
    };
    var bkeLii = tpHwTB['LthJb']['split']('|');
    var mnkqtF = 0x0;
    while (!![]) {
        switch (bkeLii[mnkqtF++]) {
        case '0':
            var i = 0x2;
            continue;
        case '1':
            console['log'](ans);
            continue;
        case '2':
            var n = tpHwTB['BWLyw'](parseInt, input[0x0], 0xa);
            continue;
        case '3':
            var b = arr['filter'](function (x, i, self) {
                return pkISAT['Staut'](self['indexOf'](x), i);
            });
            continue;
        case '4':
            var ans = 0x1;
            continue;
        case '5':
            var pkISAT = {
                'Staut': function (x, y) {
                    return x === y;
                }
            };
            continue;
        case '6':
            for (var i = 0x0; tpHwTB['ncaQg'](i, arr['length']); i++) {
                var key = arr[i];
                counts[key] = counts[key] ? tpHwTB['lKyUK'](counts[key], 0x1) : 0x1;
            }
            continue;
        case '7':
            for (var i = 0x0; tpHwTB['ncaQg'](i, b['length']); i++) {
                if (tpHwTB['JsLVQ'](counts[b[i]], n)) {
                    ans *= b[i];
                }
            }
            continue;
        case '8':
            var p = tpHwTB['oQRph'](parseInt, input[0x1], 0xa);
            continue;
        case '9':
            while (tpHwTB['Sjfrl'](i, p)) {
                while (tpHwTB['bmZWq'](p % i, 0x0)) {
                    arr['push'](i);
                    p = Math['floor'](p / i);
                }
                i++;
            }
            continue;
        case '10':
            var counts = [];
            continue;
        case '11':
            var input = input['split']('\x20');
            continue;
        case '12':
            var arr = [];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));