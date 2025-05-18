function heron(a, b, c) {
    var dWfYZU = {
        'pnlUV': function (x, y) {
            return x + y;
        },
        'zKood': function (x, y) {
            return x * y;
        },
        'lDsKM': function (x, y) {
            return x - y;
        },
        'UQppp': function (x, y) {
            return x - y;
        }
    };
    var s = dWfYZU['pnlUV'](dWfYZU['pnlUV'](a, b), c) / 0x2;
    var S = Math['sqrt'](dWfYZU['zKood'](s * (s - a) * dWfYZU['lDsKM'](s, b), dWfYZU['UQppp'](s, c)));
    return S;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var otNIQB = '1|2|6|4|7|0|5|3'['split']('|');
    var SliwAb = 0x0;
    while (!![]) {
        switch (otNIQB[SliwAb++]) {
        case '0':
            sum += heron(A, L, L);
            continue;
        case '1':
            var ALX = Arr[i]['split']('\x20')['map'](Number);
            continue;
        case '2':
            var A = ALX[0x0];
            continue;
        case '3':
            console['log'](sum['toFixed'](0xa));
            continue;
        case '4':
            var X = ALX[0x2];
            continue;
        case '5':
            sum += heron(L, (L + X) / 0x2, (L + X) / 0x2) * 0x2;
            continue;
        case '6':
            var L = ALX[0x1];
            continue;
        case '7':
            var sum = 0x0;
            continue;
        }
        break;
    }
}