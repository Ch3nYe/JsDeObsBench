function f(use, x, n, acc) {
    var eeryHw = {
        'AmTHP': '1|3|2|5|4|0',
        'ApDuO': function (x, y) {
            return x > y;
        },
        'ZruJe': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'HxaIz': function (x, y) {
            return x + y;
        },
        'VHoUh': function (x, y) {
            return x * y;
        },
        'cNVKj': function (x, y) {
            return x === y;
        },
        'GbbDA': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'BhvfB': function (x, y) {
            return x | y;
        },
        'HrahI': function (x, y) {
            return x * y;
        },
        'sXeki': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'KHUEp': function (x, y) {
            return x + y;
        }
    };
    var jzzGSW = eeryHw['AmTHP']['split']('|');
    var wvXIqq = 0x0;
    while (!![]) {
        switch (jzzGSW[wvXIqq++]) {
        case '0':
            return acc;
        case '1':
            if (eeryHw['ApDuO'](x, n))
                return acc;
            continue;
        case '2':
            acc += eeryHw['ZruJe'](f, use | 0x1, eeryHw['HxaIz'](eeryHw['VHoUh'](x, 0xa), 0x3), n, 0x0);
            continue;
        case '3':
            if (eeryHw['cNVKj'](use, 0x7))
                acc += 0x1;
            continue;
        case '4':
            acc += eeryHw['GbbDA'](f, eeryHw['BhvfB'](use, 0x4), eeryHw['HxaIz'](eeryHw['HrahI'](x, 0xa), 0x7), n, 0x0);
            continue;
        case '5':
            acc += eeryHw['sXeki'](f, eeryHw['BhvfB'](use, 0x2), eeryHw['KHUEp'](eeryHw['HrahI'](x, 0xa), 0x5), n, 0x0);
            continue;
        }
        break;
    }
}
function Main(input) {
    var YhsjSw = {
        'gVZeY': function (callee, param1) {
            return callee(param1);
        }
    };
    var n = YhsjSw['gVZeY'](parseInt, input);
    console['log'](f(0x0, 0x0, n, 0x0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));