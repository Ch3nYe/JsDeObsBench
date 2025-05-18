function Main(input) {
    var XYRsXr = {
        'BHBDK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'AndUZ': function (x, y) {
            return x > y;
        },
        'DwWxv': function (x, y) {
            return x * y;
        },
        'mYegc': function (x, y) {
            return x - y;
        },
        'rfWiR': function (x, y) {
            return x + y;
        },
        'lPfPj': function (x, y) {
            return x * y;
        },
        'ZcLer': function (x, y) {
            return x * y;
        },
        'sFEsb': function (x, y) {
            return x == y;
        }
    };
    input = input['split']('\x0a');
    const N = XYRsXr['BHBDK'](parseInt, input[0x0], 0xa);
    for (var i = 0x1; XYRsXr['AndUZ'](i, 0x0); i++) {
        var n = XYRsXr['DwWxv'](0.5, XYRsXr['mYegc'](Math['sqrt'](XYRsXr['rfWiR'](XYRsXr['lPfPj'](XYRsXr['ZcLer'](0x8, N), i), 0x1)), 0x1));
        if (XYRsXr['sFEsb'](Number['isInteger'](n), !![])) {
            console['log'](n);
            break;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));