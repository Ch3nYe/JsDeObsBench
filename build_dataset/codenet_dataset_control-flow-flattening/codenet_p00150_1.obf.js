function prime(max) {
    var lxxAtI = {
        'NgQXa': function (x, y) {
            return x <= y;
        },
        'ZLnMC': function (x, y) {
            return x + y;
        },
        'sSQpy': function (x, y) {
            return x <= y;
        },
        'rjMWU': function (x, y) {
            return x <= y;
        },
        'sRhmG': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; lxxAtI['NgQXa'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = lxxAtI['ZLnMC'](i, i); lxxAtI['sSQpy'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; lxxAtI['rjMWU'](i, max); i++) {
        if (lxxAtI['sRhmG'](arr[i], ![]))
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0xf423f);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    var twin = '';
    for (var j = 0x1; j < p['length']; j++) {
        if (p[j] > a)
            break;
        if (p[j] - p[j - 0x1] == 0x2)
            twin = p[j - 0x1] + '\x20' + p[j];
    }
    console['log'](twin);
}