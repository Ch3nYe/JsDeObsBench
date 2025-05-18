function Main(input) {
    var xqfaRh = {
        'wiObN': function (x, y) {
            return x < y;
        },
        'BplwM': function (x, y) {
            return x == y;
        },
        'uFJOU': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var n = parseInt(input, 0xa);
    var count = 0x0;
    for (i = 0x1; xqfaRh['wiObN'](i, n); i++) {
        if (xqfaRh['BplwM'](xqfaRh['uFJOU'](gcd, n, i), 0x1))
            count++;
    }
    console['log'](count);
}
function gcd(n, m) {
    var JLZHXU = {
        'DpnZJ': function (x, y) {
            return x == y;
        },
        'rbLgx': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var KlNVLw = '1|0|3|2|4'['split']('|');
    var FpgmAp = 0x0;
    while (!![]) {
        switch (KlNVLw[FpgmAp++]) {
        case '0':
            a = Math['max'](n, m);
            continue;
        case '1':
            var a, b, c;
            continue;
        case '2':
            c = a % b;
            continue;
        case '3':
            b = Math['min'](n, m);
            continue;
        case '4':
            if (JLZHXU['DpnZJ'](c, 0x0)) {
                return b;
            } else {
                return JLZHXU['rbLgx'](gcd, b, c);
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));