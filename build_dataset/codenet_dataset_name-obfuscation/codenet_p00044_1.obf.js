function isPrime(_0x43e333) {
    if (_0x43e333 == 0x2 || _0x43e333 == 0x3)
        return !![];
    if (_0x43e333 < 0x2 || _0x43e333 % 0x2 == 0x0 || _0x43e333 % 0x3 == 0x0)
        return ![];
    var _0x56b9b1 = Math['round'](Math['sqrt'](_0x43e333));
    var _0x139a0e = 0x1;
    while (_0x139a0e * 0x6 - 0x1 <= _0x56b9b1) {
        if (_0x43e333 % (_0x139a0e * 0x6 - 0x1) == 0x0 || _0x43e333 % (_0x139a0e * 0x6 + 0x1) == 0x0)
            return ![];
        _0x139a0e++;
    }
    return !![];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var num = +line;
    var mp;
    var lp;
    if (num == 0x3)
        mp = 0x2;
    var i = 0x3;
    while (!![]) {
        if (isPrime(i) && i < num) {
            mp = i;
        }
        if (isPrime(i) && i > num) {
            lp = i;
            break;
        }
        i += 0x2;
    }
    console['log'](mp, lp);
}