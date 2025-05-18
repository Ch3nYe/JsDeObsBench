var count = 0x0;
function isPrime(num) {
    var HiJeDU = {
        'nhOyI': function (x, y) {
            return x < y;
        },
        'jigRh': function (x, y) {
            return x < y;
        },
        'ZrrMB': function (x, y) {
            return x == y;
        },
        'rYfMK': function (x, y) {
            return x % y;
        }
    };
    if (HiJeDU['nhOyI'](num, 0x2))
        return ![];
    for (var i = 0x2; HiJeDU['jigRh'](i, num); i++) {
        if (HiJeDU['ZrrMB'](HiJeDU['rYfMK'](num, i), 0x0))
            return ![];
    }
    count++;
    return !![];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var p = input['split']('\x0a');
for (var i = 0x0; i < p['length']; i++) {
    count = 0x0;
    for (var j = 0x2; j <= p[i]; j++) {
        isPrime(j);
    }
    console['log'](count);
}