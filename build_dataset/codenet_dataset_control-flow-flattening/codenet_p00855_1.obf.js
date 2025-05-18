function prime(max) {
    var HlJhbU = {
        'TTrhZ': function (x, y) {
            return x <= y;
        },
        'xuqxj': function (x, y) {
            return x == y;
        },
        'AnLKC': function (x, y) {
            return x + y;
        },
        'ZRuOM': function (x, y) {
            return x <= y;
        },
        'OagFR': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; HlJhbU['TTrhZ'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; HlJhbU['TTrhZ'](i, sqrt); i++) {
        if (HlJhbU['xuqxj'](arr[i], ![]))
            continue;
        for (var j = HlJhbU['AnLKC'](i, i); j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; HlJhbU['ZRuOM'](i, max); i++) {
        if (HlJhbU['OagFR'](arr[i], ![]))
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0x13d4fd);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    for (var j = 0x0; j < p['length']; j++) {
        if (p[j] == a) {
            console['log'](0x0);
            break;
        }
        if (p[j] > a) {
            console['log'](p[j] - p[j - 0x1]);
            break;
        }
    }
}