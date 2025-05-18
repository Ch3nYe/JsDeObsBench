function Main(input) {
    var CaeoEh = {
        'oWPeC': function (callee, param1) {
            return callee(param1);
        },
        'OUHiW': function (callee, param1) {
            return callee(param1);
        },
        'NTwBf': function (x, y) {
            return x / y;
        },
        'bzNOO': function (x, y) {
            return x + y;
        },
        'IUUPO': function (x, y) {
            return x >= y;
        },
        'uATob': function (x, y) {
            return x <= y;
        },
        'WGiCe': function (x, y) {
            return x + y;
        },
        'iKfXa': function (x, y) {
            return x * y;
        },
        'XPHCE': function (x, y) {
            return x * y;
        },
        'mFPbv': function (x, y) {
            return x - y;
        },
        'uQEWy': function (x, y) {
            return x + y;
        },
        'ghJym': function (x, y) {
            return x / y;
        },
        'COoBC': function (x, y) {
            return x + y;
        },
        'ebHhR': function (callee, param1) {
            return callee(param1);
        }
    };
    var fvuCSR = '2|0|5|7|3|6|1|4|8'['split']('|');
    var jZJkMh = 0x0;
    while (!![]) {
        switch (fvuCSR[jZJkMh++]) {
        case '0':
            A = CaeoEh['oWPeC'](parseInt, input[0x0]['split']('\x20')[0x0]);
            continue;
        case '1':
            var ans = 0x0;
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            X = CaeoEh['OUHiW'](parseInt, input[0x0]['split']('\x20')[0x3]);
            continue;
        case '4':
            if (C <= CaeoEh['NTwBf'](CaeoEh['bzNOO'](A, B), 0x2) && CaeoEh['IUUPO'](C, Math['min'](A, B))) {
                if (CaeoEh['uATob'](X, Y)) {
                    ans = CaeoEh['WGiCe'](CaeoEh['iKfXa'](CaeoEh['XPHCE'](C, X), 0x2), CaeoEh['iKfXa'](B, CaeoEh['mFPbv'](Y, X)));
                } else {
                    ans = CaeoEh['uQEWy'](C * Y * 0x2, CaeoEh['XPHCE'](A, CaeoEh['mFPbv'](X, Y)));
                }
            } else if (CaeoEh['uATob'](C, CaeoEh['ghJym'](CaeoEh['uQEWy'](A, B), 0x2)) && C < Math['min'](A, B)) {
                ans = CaeoEh['iKfXa'](CaeoEh['XPHCE'](C, Math['max'](X, Y)), 0x2);
            } else {
                ans = CaeoEh['COoBC'](CaeoEh['XPHCE'](X, A), CaeoEh['XPHCE'](Y, B));
            }
            continue;
        case '5':
            B = CaeoEh['oWPeC'](parseInt, input[0x0]['split']('\x20')[0x1]);
            continue;
        case '6':
            Y = CaeoEh['ebHhR'](parseInt, input[0x0]['split']('\x20')[0x4]);
            continue;
        case '7':
            C = CaeoEh['OUHiW'](parseInt, input[0x0]['split']('\x20')[0x2]);
            continue;
        case '8':
            console['log']('%s', ans);
            continue;
        }
        break;
    }
}
function debug() {
    var YZHOeR = { 'VSicn': 'input' };
    var input = document['getElementById'](YZHOeR['VSicn'])['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));