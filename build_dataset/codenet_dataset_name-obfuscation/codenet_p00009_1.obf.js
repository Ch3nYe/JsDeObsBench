var count = 0x0;
function isPrime(_0x47123b) {
    if (_0x47123b < 0x2)
        return ![];
    for (var _0xa23f42 = 0x2; _0xa23f42 < _0x47123b; _0xa23f42++) {
        if (_0x47123b % _0xa23f42 == 0x0)
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