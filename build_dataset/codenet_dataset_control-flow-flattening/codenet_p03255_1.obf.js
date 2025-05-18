var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var yXGQfz = {
        'UQukA': function (x, y) {
            return x < y;
        },
        'MOazn': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; yXGQfz['UQukA'](i, rest['length']); i++)
        if (yXGQfz['MOazn'](rest[i], val))
            val = rest[i];
    return val;
}
function max() {
    var bNcBGY = {
        'vCIke': function (x, y) {
            return x < y;
        },
        'IBXgz': function (x, y) {
            return x > y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; bNcBGY['vCIke'](i, rest['length']); i++)
        if (bNcBGY['IBXgz'](rest[i], val))
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var JqeCud = {
        'gxaWm': '6|10|5|9|0|8|3|7|2|4|1',
        'QkAhc': function (x, y) {
            return x < y;
        },
        'jeKpL': function (x, y) {
            return x + y;
        },
        'mfSBR': function (x, y) {
            return x - y;
        },
        'mxGcs': function (x, y) {
            return x > y;
        },
        'kGLyz': function (x, y) {
            return x < y;
        },
        'kPkuK': function (x, y) {
            return x * y;
        },
        'Ubytt': function (x, y) {
            return x * y;
        },
        'SjHLk': function (x, y) {
            return x * y;
        },
        'oKtWd': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'zlMPu': function (callee, param1) {
            return callee(param1);
        }
    };
    var mZQGTd = JqeCud['gxaWm']['split']('|');
    var eXguzd = 0x0;
    while (!![]) {
        switch (mZQGTd[eXguzd++]) {
        case '0':
            var xs = toIntArr(input[0x1]['split']('\x20'));
            continue;
        case '1':
            console['log'](ans);
            continue;
        case '2':
            var has = 0x0;
            continue;
        case '3':
            for (var i = 0x1; JqeCud['QkAhc'](i, n); i++) {
                ss[i] = JqeCud['jeKpL'](xs[i], ss[JqeCud['mfSBR'](i, 0x1)]);
            }
            continue;
        case '4':
            for (var i = JqeCud['mfSBR'](n, 0x1); JqeCud['mxGcs'](i, -0x1); i--) {
                has++;
                if (has > 0x2 && JqeCud['kGLyz'](x, JqeCud['mfSBR'](JqeCud['kPkuK'](ss[i] * JqeCud['mfSBR'](has, 0x1), 0x2), JqeCud['kPkuK'](xs[i], 0x2)))) {
                    has = 0x1;
                    ans += x;
                }
                ans += JqeCud['Ubytt'](xs[i], JqeCud['SjHLk'](JqeCud['oKtWd'](max, has, 0x2), 0x2) + 0x1);
            }
            continue;
        case '5':
            var n = temp[0x0];
            continue;
        case '6':
            var input = input['split']('\x0a');
            continue;
        case '7':
            var ans = JqeCud['Ubytt'](n + 0x1, x);
            continue;
        case '8':
            var ss = [xs[0x0]];
            continue;
        case '9':
            var x = temp[0x1];
            continue;
        case '10':
            var temp = JqeCud['zlMPu'](toIntArr, input[0x0]['split']('\x20'));
            continue;
        }
        break;
    }
}