var fs = require('fs');
var inn = parseInt(fs['readFileSync'](0x0)['toString']());
function isPrime(_0x2ea4a8) {
    if (_0x2ea4a8 <= 0x3)
        return _0x2ea4a8 > 0x1;
    else if (_0x2ea4a8 % 0x2 === 0x0 || _0x2ea4a8 % 0x3 === 0x0)
        return ![];
    var _0x6aaf66 = 0x5;
    while (Math['pow'](_0x6aaf66, 0x2) <= _0x2ea4a8) {
        if (_0x2ea4a8 % _0x6aaf66 === 0x0 || _0x2ea4a8 % (_0x6aaf66 + 0x2) === 0x0)
            return ![];
        _0x6aaf66 += 0x6;
    }
    return !![];
}
while (!isPrime(inn)) {
    inn++;
}
console['log'](inn);