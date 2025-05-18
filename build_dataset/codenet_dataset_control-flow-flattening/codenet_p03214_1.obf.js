var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var cudEFc = {
        'gCMXU': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; cudEFc['gCMXU'](i, rest['length']); i++)
        if (cudEFc['gCMXU'](rest[i], val))
            val = rest[i];
    return val;
}
function max() {
    var dKMERk = {
        'PRcMM': function (x, y) {
            return x > y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (dKMERk['PRcMM'](rest[i], val))
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var kWUUOJ = {
        'eIZHk': function (callee, param1) {
            return callee(param1);
        },
        'ixQkT': function (x, y) {
            return x < y;
        }
    };
    var aCfkPB = '9|7|0|6|5|2|3|8|1|4'['split']('|');
    var kxdTtI = 0x0;
    while (!![]) {
        switch (aCfkPB[kxdTtI++]) {
        case '0':
            var as = kWUUOJ['eIZHk'](toIntArr, input[0x1]['split']('\x20'));
            continue;
        case '1':
            for (var i = 0x1; kWUUOJ['ixQkT'](i, n); i++) {
                if (kWUUOJ['ixQkT'](bs[i], min)) {
                    min = bs[i];
                    ans = i;
                }
            }
            continue;
        case '2':
            var bs = as['map']((el, ind, arr) => abs(sum - n * el));
            continue;
        case '3':
            var ans = 0x0;
            continue;
        case '4':
            console['log'](ans);
            continue;
        case '5':
            for (var i = 0x0; kWUUOJ['ixQkT'](i, n); i++) {
                sum += as[i];
            }
            continue;
        case '6':
            var sum = 0x0;
            continue;
        case '7':
            var n = toInt(input[0x0]);
            continue;
        case '8':
            var min = bs[0x0];
            continue;
        case '9':
            var input = input['split']('\x0a');
            continue;
        }
        break;
    }
}