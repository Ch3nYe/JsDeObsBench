var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var OEbibR = {
        'nPmVb': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (OEbibR['nPmVb'](rest[i], val))
            val = rest[i];
    return val;
}
function max() {
    var EYSosH = {
        'kCTbj': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; EYSosH['kCTbj'](i, rest['length']); i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var OSvGbk = {
        'JaoJh': function (x, y) {
            return x < y;
        }
    };
    var InmhfU = '5|0|2|6|3|4|1'['split']('|');
    var tEznZN = 0x0;
    while (!![]) {
        switch (InmhfU[tEznZN++]) {
        case '0':
            var n = toInt(input[0x0]);
            continue;
        case '1':
            console['log'](ans);
            continue;
        case '2':
            var as = toIntArr(input[0x1]['split']('\x20'));
            continue;
        case '3':
            var ans = -n;
            continue;
        case '4':
            for (var i = 0x0; OSvGbk['JaoJh'](i, n); i++) {
                ans += as[i];
            }
            continue;
        case '5':
            var input = input['split']('\x0a');
            continue;
        case '6':
            as['length'] = n;
            continue;
        }
        break;
    }
}