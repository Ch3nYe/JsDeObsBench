function heron(a, b, c) {
    var OIIlVr = {
        'WEvou': function (x, y) {
            return x / y;
        },
        'phSam': function (x, y) {
            return x + y;
        },
        'tEmMO': function (x, y) {
            return x + y;
        },
        'jxkhQ': function (x, y) {
            return x * y;
        },
        'yEkzF': function (x, y) {
            return x - y;
        }
    };
    var s = OIIlVr['WEvou'](OIIlVr['phSam'](OIIlVr['tEmMO'](a, b), c), 0x2);
    var S = Math['sqrt'](OIIlVr['jxkhQ'](s * (s - a), OIIlVr['yEkzF'](s, b)) * OIIlVr['yEkzF'](s, c));
    return S;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var xy1 = Arr['shift']()['split'](',')['map'](Number);
var xy2 = Arr['shift']()['split'](',')['map'](Number);
var x1 = xy1[0x0];
var y1 = xy1[0x1];
var x2 = xy2[0x0];
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr['length']; I++) {
    var yvipno = '5|7|2|8|3|1|0|6|4'['split']('|');
    var zGgjNp = 0x0;
    while (!![]) {
        switch (yvipno[zGgjNp++]) {
        case '0':
            sum += heron(d12, d13, d23);
            continue;
        case '1':
            var d23 = Math['sqrt'](Math['pow'](x2 - x3, 0x2) + Math['pow'](y2 - y3, 0x2));
            continue;
        case '2':
            var y3 = xy3[0x1];
            continue;
        case '3':
            var d13 = Math['sqrt'](Math['pow'](x1 - x3, 0x2) + Math['pow'](y1 - y3, 0x2));
            continue;
        case '4':
            y2 = xy3[0x1];
            continue;
        case '5':
            var xy3 = Arr[I]['split'](',')['map'](Number);
            continue;
        case '6':
            x2 = xy3[0x0];
            continue;
        case '7':
            var x3 = xy3[0x0];
            continue;
        case '8':
            var d12 = Math['sqrt'](Math['pow'](x1 - x2, 0x2) + Math['pow'](y1 - y2, 0x2));
            continue;
        }
        break;
    }
}
console['log'](sum['toFixed'](0x6));