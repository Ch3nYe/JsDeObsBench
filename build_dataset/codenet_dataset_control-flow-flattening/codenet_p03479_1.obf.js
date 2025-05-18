var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var RnJtmZ = {
        'xSPJi': function (x, y) {
            return x < y;
        },
        'ErdUh': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; RnJtmZ['xSPJi'](i, rest['length']); i++)
        if (RnJtmZ['ErdUh'](rest[i], val))
            val = rest[i];
    return val;
}
function max() {
    var WkZJoc = {
        'baUHT': function (x, y) {
            return x < y;
        },
        'IeVCS': function (x, y) {
            return x > y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; WkZJoc['baUHT'](i, rest['length']); i++)
        if (WkZJoc['IeVCS'](rest[i], val))
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var EgSCmF = {
        'mQJNb': '2|4|5|1|0|8|6|7|3',
        'GqPeE': function (x, y) {
            return x <= y;
        }
    };
    var CocIQT = EgSCmF['mQJNb']['split']('|');
    var GNbtJz = 0x0;
    while (!![]) {
        switch (CocIQT[GNbtJz++]) {
        case '0':
            var a = y / x;
            continue;
        case '1':
            var y = nk[0x1];
            continue;
        case '2':
            var input = input['split']('\x0a');
            continue;
        case '3':
            console['log'](ans);
            continue;
        case '4':
            var nk = toIntArr(input[0x0]['split']('\x20'));
            continue;
        case '5':
            var x = nk[0x0];
            continue;
        case '6':
            var ans = 0x0;
            continue;
        case '7':
            while (EgSCmF['GqPeE'](temp, a)) {
                temp *= 0x2;
                ans++;
            }
            continue;
        case '8':
            var temp = 0x1;
            continue;
        }
        break;
    }
}