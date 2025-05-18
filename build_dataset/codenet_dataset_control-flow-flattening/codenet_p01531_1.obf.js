var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('');
var x = '';
arr['forEach'](function (v) {
    var iivLUK = {
        'QctFH': '9|0|8|14|13|5|2|10|6|3|11|1|7|4|12',
        'nNLhc': function (x, y) {
            return x == y;
        },
        'eENGx': function (x, y) {
            return x == y;
        },
        'hUWQR': function (x, y) {
            return x == y;
        },
        'XiWHI': function (x, y) {
            return x == y;
        }
    };
    var dOIwHz = iivLUK['QctFH']['split']('|');
    var hXPVDd = 0x0;
    while (!![]) {
        switch (dOIwHz[hXPVDd++]) {
        case '0':
            if (iivLUK['nNLhc'](v, '1'))
                x += '';
            continue;
        case '1':
            if (v == 'L')
                x += 'i';
            continue;
        case '2':
            if (iivLUK['nNLhc'](v, '6'))
                x += 'h';
            continue;
        case '3':
            if (v == '9')
                x += 'r';
            continue;
        case '4':
            if (iivLUK['nNLhc'](v, 'R'))
                x += 'e';
            continue;
        case '5':
            if (iivLUK['eENGx'](v, '5'))
                x += 'n';
            continue;
        case '6':
            if (iivLUK['eENGx'](v, '8'))
                x += 'y';
            continue;
        case '7':
            if (iivLUK['nNLhc'](v, 'U'))
                x += 'u';
            continue;
        case '8':
            if (iivLUK['nNLhc'](v, '2'))
                x += 'k';
            continue;
        case '9':
            if (iivLUK['hUWQR'](v, '0'))
                x += 'w';
            continue;
        case '10':
            if (iivLUK['eENGx'](v, '7'))
                x += 'm';
            continue;
        case '11':
            if (iivLUK['eENGx'](v, 'T'))
                x += 'a';
            continue;
        case '12':
            if (v == 'D')
                x += 'o';
            continue;
        case '13':
            if (iivLUK['XiWHI'](v, '4'))
                x += 't';
            continue;
        case '14':
            if (iivLUK['eENGx'](v, '3'))
                x += 's';
            continue;
        }
        break;
    }
});
x = x['replace'](/wu/g, 'nn');
console['log'](x);