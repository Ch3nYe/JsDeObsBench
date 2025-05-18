function Main(input) {
    var VMIKOK = {
        'itNdt': '1|9|0|5|4|7|3|10|6|2|8',
        'IZybJ': function (callee, param1) {
            return callee(param1);
        },
        'DdBqQ': function (x, y) {
            return x == y;
        },
        'pZtxY': 'AMBIGUOUS',
        'ItTry': function (x, y) {
            return x >= y;
        },
        'jDlmZ': function (x, y) {
            return x == y;
        },
        'cMUSQ': function (x, y) {
            return x == y;
        },
        'rdUQt': function (x, y) {
            return x == y;
        },
        'IAfKQ': function (x, y) {
            return x == y;
        },
        'rWgZb': 'MMYY',
        'opodE': function (x, y) {
            return x >= y;
        },
        'DYLal': function (x, y) {
            return x <= y;
        },
        'MPOhQ': function (x, y) {
            return x + y;
        },
        'thwEj': 'YYMM'
    };
    var Oubamp = VMIKOK['itNdt']['split']('|');
    var sIfQaG = 0x0;
    while (!![]) {
        switch (Oubamp[sIfQaG++]) {
        case '0':
            var r = 0x0;
            continue;
        case '1':
            var a = VMIKOK['IZybJ'](parseInt, input['charAt'](0x0) + input['charAt'](0x1));
            continue;
        case '2':
            if (VMIKOK['DdBqQ'](r, 0x3)) {
                console['log'](VMIKOK['pZtxY']);
            }
            continue;
        case '3':
            if (VMIKOK['ItTry'](a, 0xd) && VMIKOK['ItTry'](b, 0xd) || a >= 0xd && VMIKOK['jDlmZ'](b, 0x0) || VMIKOK['cMUSQ'](a, 0x0) && VMIKOK['ItTry'](b, 0xd) || VMIKOK['rdUQt'](a, 0x0) && VMIKOK['cMUSQ'](b, 0x0)) {
                r = 0x4;
            }
            continue;
        case '4':
            if (b >= 0xd || VMIKOK['cMUSQ'](b, 0x0)) {
                r = 0x2;
            }
            continue;
        case '5':
            if (a >= 0xd || VMIKOK['jDlmZ'](a, 0x0)) {
                r = 0x1;
            }
            continue;
        case '6':
            if (VMIKOK['IAfKQ'](r, 0x2)) {
                console['log'](VMIKOK['rWgZb']);
            }
            continue;
        case '7':
            if (a >= 0x1 && a <= 0xc && VMIKOK['opodE'](b, 0x1) && VMIKOK['DYLal'](b, 0xc)) {
                r = 0x3;
            }
            continue;
        case '8':
            if (VMIKOK['DdBqQ'](r, 0x4)) {
                console['log']('NA');
            }
            continue;
        case '9':
            var b = parseInt(VMIKOK['MPOhQ'](input['charAt'](0x2), input['charAt'](0x3)));
            continue;
        case '10':
            if (VMIKOK['DdBqQ'](r, 0x1)) {
                console['log'](VMIKOK['thwEj']);
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));