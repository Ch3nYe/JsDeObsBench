function Main(input) {
    var RREcdy = {
        'AFYCH': '6|8|9|5|0|7|4|2|10|3|1',
        'pLLIZ': function (x, y) {
            return x % y;
        },
        'dEZDb': function (x, y) {
            return x < y;
        },
        'xXjDT': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'xTYOT': function (x, y) {
            return x / y;
        },
        'GbooX': function (x, y) {
            return x + y;
        },
        'mjFMo': function (x, y) {
            return x * y;
        },
        'PrfAu': function (x, y) {
            return x < y;
        },
        'TAkPn': function (x, y) {
            return x - y;
        },
        'nkvsw': function (x, y) {
            return x < y;
        },
        'XKvJP': function (x, y) {
            return x ^ y;
        },
        'ZDBvD': function (x, y) {
            return x / y;
        },
        'XrDbU': function (x, y) {
            return x % y;
        },
        'JPSwl': function (x, y) {
            return x ^ y;
        }
    };
    var LmGyNM = RREcdy['AFYCH']['split']('|');
    var gpkSWJ = 0x0;
    while (!![]) {
        switch (LmGyNM[gpkSWJ++]) {
        case '0':
            var count = 0x0;
            continue;
        case '1':
            console['log'](RREcdy['pLLIZ'](count, a));
            continue;
        case '2':
            for (var i = 0x0; RREcdy['dEZDb'](i, n); i++) {
                x[i] = RREcdy['xXjDT'](parseInt, x[i], 0xa);
                y[i] = Math['floor'](RREcdy['xTYOT'](x[i], 0x100000000));
                x[i] = x[i] % 0x100000000;
            }
            continue;
        case '3':
            count = RREcdy['GbooX'](count, RREcdy['mjFMo'](count2, 0x100000000));
            continue;
        case '4':
            var a = 0x3b9aca07;
            continue;
        case '5':
            var y = new Array(n);
            continue;
        case '6':
            input = input['split']('\x0a');
            continue;
        case '7':
            var count2 = 0x0;
            continue;
        case '8':
            var n = RREcdy['xXjDT'](parseInt, input[0x0], 0xa);
            continue;
        case '9':
            var x = input[0x1]['split']('\x20');
            continue;
        case '10':
            for (var i = 0x0; RREcdy['PrfAu'](i, RREcdy['TAkPn'](n, 0x1)); i++) {
                for (var j = RREcdy['GbooX'](i, 0x1); RREcdy['nkvsw'](j, n); j++) {
                    count += RREcdy['XKvJP'](x[i], x[j]);
                    if (count > RREcdy['ZDBvD'](0x100000000, 0x2)) {
                        count = RREcdy['XrDbU'](count, RREcdy['ZDBvD'](0x100000000, 0x2));
                        count2 += 0.5;
                    }
                    count2 += RREcdy['JPSwl'](y[i], y[j]);
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));