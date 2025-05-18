var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var QvlVfO = {
        'BXRZg': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; QvlVfO['BXRZg'](i, rest['length']); i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var gAmGQM = {
        'rnVKb': '7|0|5|2|1|4|9|6|3|8',
        'CWKtH': function (x, y) {
            return x < y;
        },
        'BvyiX': function (x, y) {
            return x < y;
        },
        'WSCAj': function (x, y) {
            return x + y;
        }
    };
    var IJZyYD = gAmGQM['rnVKb']['split']('|');
    var NqiwVy = 0x0;
    while (!![]) {
        switch (IJZyYD[NqiwVy++]) {
        case '0':
            var s = input[0x0];
            continue;
        case '1':
            var arr = [];
            continue;
        case '2':
            var l = s['length'];
            continue;
        case '3':
            ans = arr[k - 0x1];
            continue;
        case '4':
            var x;
            continue;
        case '5':
            var k = toInt(input[0x1]);
            continue;
        case '6':
            arr['sort']((a, b) => a < b ? -0x1 : 0x1);
            continue;
        case '7':
            var input = input['split']('\x0a');
            continue;
        case '8':
            console['log'](ans);
            continue;
        case '9':
            for (var i = 0x0; gAmGQM['CWKtH'](i, l); i++) {
                for (var j = i; gAmGQM['BvyiX'](j, gAmGQM['WSCAj'](i, 0x5)); j++) {
                    x = s['slice'](i, gAmGQM['WSCAj'](j, 0x1));
                    if (arr['indexOf'](x) === -0x1)
                        arr['push'](x);
                }
            }
            continue;
        }
        break;
    }
}