function Main(input) {
    var Wxpkry = {
        'WNLFH': '2|4|1|5|3|0|6|7',
        'leUvu': function (callee, param1) {
            return callee(param1);
        },
        'EwGqO': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'DBtgR': function (x, y) {
            return x < y;
        },
        'EGckj': function (x, y) {
            return x >= y;
        },
        'mKxzo': function (x, y) {
            return x / y;
        }
    };
    var fyWnui = Wxpkry['WNLFH']['split']('|');
    var NKhLaG = 0x0;
    while (!![]) {
        switch (fyWnui[NKhLaG++]) {
        case '0':
            var max = 0x0;
            continue;
        case '1':
            var N = parseInt(tmp[0x0], 0xa);
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            var divisors = Wxpkry['leUvu'](divisor, M);
            continue;
        case '4':
            tmp = input[0x0]['split']('\x20');
            continue;
        case '5':
            var M = Wxpkry['EwGqO'](parseInt, tmp[0x1], 0xa);
            continue;
        case '6':
            for (var i = 0x0; Wxpkry['DBtgR'](i, divisors['length']); i++) {
                var d = divisors[i];
                if (Wxpkry['EGckj'](Wxpkry['mKxzo'](M, d), N)) {
                    max = Math['max'](max, d);
                }
            }
            continue;
        case '7':
            console['log']('%d', max);
            continue;
        }
        break;
    }
}
function divisor(n) {
    var ENhiyY = {
        'rMYmX': function (x, y) {
            return x <= y;
        },
        'NsVxG': function (x, y) {
            return x * y;
        },
        'FEity': function (x, y) {
            return x / y;
        },
        'WvNAu': function (x, y) {
            return x / y;
        }
    };
    var res = [];
    for (var i = 0x1; ENhiyY['rMYmX'](ENhiyY['NsVxG'](i, i), n); i++) {
        if (n % i == 0x0) {
            res['push'](i);
            if (ENhiyY['FEity'](n, i) != i) {
                res['push'](ENhiyY['WvNAu'](n, i));
            }
        }
    }
    return res;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));