function move(x, arr) {
    var jlsGxE = {
        'EJWUI': '9|4|5|2|6|0|3|8|7|10|1|11',
        'GmpCp': function (x, y) {
            return x == y;
        },
        'obcOK': function (x, y) {
            return x == y;
        },
        'EHpnb': function (x, y) {
            return x == y;
        }
    };
    var sLGale = jlsGxE['EJWUI']['split']('|');
    var FlxJkU = 0x0;
    while (!![]) {
        switch (sLGale[FlxJkU++]) {
        case '0':
            var d6 = arr[0x5];
            continue;
        case '1':
            if (jlsGxE['GmpCp'](x, 'W'))
                after = [
                    d3,
                    d2,
                    d6,
                    d1,
                    d5,
                    d4
                ];
            continue;
        case '2':
            var d4 = arr[0x3];
            continue;
        case '3':
            var after = [];
            continue;
        case '4':
            var d2 = arr[0x1];
            continue;
        case '5':
            var d3 = arr[0x2];
            continue;
        case '6':
            var d5 = arr[0x4];
            continue;
        case '7':
            if (jlsGxE['obcOK'](x, 'S'))
                after = [
                    d5,
                    d1,
                    d3,
                    d4,
                    d6,
                    d2
                ];
            continue;
        case '8':
            if (jlsGxE['EHpnb'](x, 'N'))
                after = [
                    d2,
                    d6,
                    d3,
                    d4,
                    d1,
                    d5
                ];
            continue;
        case '9':
            var d1 = arr[0x0];
            continue;
        case '10':
            if (jlsGxE['EHpnb'](x, 'E'))
                after = [
                    d4,
                    d2,
                    d1,
                    d6,
                    d5,
                    d3
                ];
            continue;
        case '11':
            return after;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var diceA = Arr[0x0]['split']('\x20')['map'](Number);
var diceB = Arr[0x1]['split']('\x20')['map'](Number);
var NSEW = 'NSEW'['split']('');
for (var i = 0x0; i < 0x64; i++) {
    var r = Math['floor'](Math['random']() * 0x4);
    diceA = move(NSEW[r], diceA);
    var flag = diceA['every'](function (v, i) {
        var sdWUxN = {
            'NXBEL': function (x, y) {
                return x == y;
            }
        };
        return sdWUxN['NXBEL'](v, diceB[i]);
    });
    if (flag)
        break;
}
console['log'](flag ? 'Yes' : 'No');