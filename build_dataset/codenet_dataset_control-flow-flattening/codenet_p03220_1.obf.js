var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var UxcjPO = {
        'PDuyh': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; UxcjPO['PDuyh'](i, rest['length']); i++)
        if (UxcjPO['PDuyh'](rest[i], v))
            v = rest[i];
    return v;
}
function max() {
    var wfrUHL = {
        'zXeHm': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; wfrUHL['zXeHm'](i, rest['length']); i++)
        if (rest[i] > v)
            v = rest[i];
    return v;
}
function gcd() {
    var QSHJUe = {
        'kfnUC': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, v = rest[0x0], temp = (a, b) => b ? temp(b, a % b) : a;
    for (var i = 0x1; QSHJUe['kfnUC'](i, rest['length']); i++)
        v = temp(v, rest[i]);
    return v;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var ELRuTT = {
        'waZye': function (callee, param1) {
            return callee(param1);
        },
        'FEnJe': function (x, y) {
            return x < y;
        },
        'JosHe': function (callee, param1) {
            return callee(param1);
        },
        'IMpIL': function (x, y) {
            return x - y;
        },
        'ibnKW': function (x, y) {
            return x - y;
        },
        'DklZG': function (x, y) {
            return x < y;
        },
        'ELCbS': function (x, y) {
            return x * y;
        },
        'TXrAE': function (callee, param1) {
            return callee(param1);
        }
    };
    var uHcVhb = '0|1|7|8|6|9|5|4|2|3'['split']('|');
    var YqhkSG = 0x0;
    while (!![]) {
        switch (uHcVhb[YqhkSG++]) {
        case '0':
            var input = input['split']('\x0a');
            continue;
        case '1':
            var n = ELRuTT['waZye'](toInt, input[0x0]);
            continue;
        case '2':
            for (var i = 0x1; ELRuTT['FEnJe'](i, n); i++) {
                y = ELRuTT['JosHe'](abs, ELRuTT['IMpIL'](ELRuTT['ibnKW'](t, a), 0.006 * hs[i]));
                if (ELRuTT['DklZG'](y, x)) {
                    ans = i + 0x1;
                    x = y;
                }
            }
            continue;
        case '3':
            console['log'](ans);
            continue;
        case '4':
            var x = ELRuTT['waZye'](abs, t - a - ELRuTT['ELCbS'](0.006, hs[0x0])), y;
            continue;
        case '5':
            var ans = 0x1;
            continue;
        case '6':
            var t = ta[0x0];
            continue;
        case '7':
            var ta = ELRuTT['TXrAE'](toIntArr, input[0x1]['split']('\x20'));
            continue;
        case '8':
            var hs = ELRuTT['JosHe'](toIntArr, input[0x2]['split']('\x20'));
            continue;
        case '9':
            var a = ta[0x1];
            continue;
        }
        break;
    }
}