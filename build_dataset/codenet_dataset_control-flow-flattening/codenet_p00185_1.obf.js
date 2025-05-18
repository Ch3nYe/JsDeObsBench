function prime(max) {
    var AYrewV = {
        'cPCan': function (x, y) {
            return x <= y;
        },
        'qRhpA': function (x, y) {
            return x + y;
        },
        'sVksF': function (x, y) {
            return x <= y;
        },
        'RjsUh': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; AYrewV['cPCan'](i, sqrt); i++) {
        if (arr[i] == ![])
            continue;
        for (var j = AYrewV['qRhpA'](i, i); AYrewV['sVksF'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; AYrewV['cPCan'](i, max); i++) {
        if (AYrewV['RjsUh'](arr[i], ![]))
            result[arr[i]] = !![];
    }
    return result;
}
var p = prime(0xf4240);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var I = 0x0; I < Arr['length']; I++) {
    var v = Arr[I];
    if (v == 0x0)
        break;
    var cnt = 0x0;
    var obj = {};
    for (var k in p) {
        if (k >= v)
            break;
        if (obj['hasOwnProperty'](k))
            continue;
        obj[v - k] = !![];
        if (p['hasOwnProperty'](v - k))
            cnt++;
    }
    console['log'](cnt);
}