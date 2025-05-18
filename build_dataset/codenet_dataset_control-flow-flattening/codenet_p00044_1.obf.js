function isPrime(num) {
    var jZDice = {
        'HRdNc': '1|3|0|4|5|2',
        'BQVce': function (x, y) {
            return x == y;
        },
        'XRiDn': function (x, y) {
            return x == y;
        },
        'eVLXx': function (x, y) {
            return x % y;
        },
        'DBkHg': function (x, y) {
            return x <= y;
        },
        'VTlSr': function (x, y) {
            return x - y;
        },
        'ZbrKB': function (x, y) {
            return x * y;
        },
        'rJrnK': function (x, y) {
            return x % y;
        },
        'tNiAR': function (x, y) {
            return x + y;
        }
    };
    var UKZjEP = jZDice['HRdNc']['split']('|');
    var QTqzxJ = 0x0;
    while (!![]) {
        switch (UKZjEP[QTqzxJ++]) {
        case '0':
            var limit = Math['round'](Math['sqrt'](num));
            continue;
        case '1':
            if (jZDice['BQVce'](num, 0x2) || num == 0x3)
                return !![];
            continue;
        case '2':
            return !![];
        case '3':
            if (num < 0x2 || jZDice['XRiDn'](jZDice['eVLXx'](num, 0x2), 0x0) || jZDice['BQVce'](num % 0x3, 0x0))
                return ![];
            continue;
        case '4':
            var i = 0x1;
            continue;
        case '5':
            while (jZDice['DBkHg'](jZDice['VTlSr'](jZDice['ZbrKB'](i, 0x6), 0x1), limit)) {
                if (jZDice['XRiDn'](jZDice['rJrnK'](num, jZDice['VTlSr'](jZDice['ZbrKB'](i, 0x6), 0x1)), 0x0) || jZDice['BQVce'](num % jZDice['tNiAR'](i * 0x6, 0x1), 0x0))
                    return ![];
                i++;
            }
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var zRziFs = '5|4|3|2|6|1|0'['split']('|');
    var dLDjtE = 0x0;
    while (!![]) {
        switch (zRziFs[dLDjtE++]) {
        case '0':
            console['log'](mp, lp);
            continue;
        case '1':
            while (!![]) {
                if (isPrime(i) && i < num) {
                    mp = i;
                }
                if (isPrime(i) && i > num) {
                    lp = i;
                    break;
                }
                i += 0x2;
            }
            continue;
        case '2':
            if (num == 0x3)
                mp = 0x2;
            continue;
        case '3':
            var lp;
            continue;
        case '4':
            var mp;
            continue;
        case '5':
            var num = +line;
            continue;
        case '6':
            var i = 0x3;
            continue;
        }
        break;
    }
}