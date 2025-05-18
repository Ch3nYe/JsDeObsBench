function prime(max) {
    var kLpJkW = {
        'nqaHZ': function (x, y) {
            return x <= y;
        },
        'JssfA': function (x, y) {
            return x == y;
        },
        'HRwXz': function (x, y) {
            return x <= y;
        },
        'pMeHi': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; kLpJkW['nqaHZ'](i, sqrt); i++) {
        if (kLpJkW['JssfA'](arr[i], ![]))
            continue;
        for (var j = i + i; kLpJkW['nqaHZ'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; kLpJkW['HRwXz'](i, max); i++) {
        if (kLpJkW['pMeHi'](arr[i], ![]))
            result[arr[i]] = !![];
    }
    return result;
}
var p = prime(0xf423f);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var v = Arr['shift']();
    if (v == '0\x200\x200')
        break;
    var adn = v['split']('\x20')['map'](Number);
    var cnt = 0x0;
    var sum = adn[0x0] - adn[0x1];
    while (cnt != adn[0x2]) {
        sum += adn[0x1];
        if (p['hasOwnProperty'](sum))
            cnt++;
    }
    console['log'](sum);
}