function hamming() {
    var _0x47fb18 = {};
    for (var _0x1a600d = 0x1; _0x1a600d <= 0xf4240; _0x1a600d++) {
        var _0x2c8415 = _0x1a600d;
        while (_0x2c8415 % 0x2 == 0x0)
            _0x2c8415 /= 0x2;
        while (_0x2c8415 % 0x3 == 0x0)
            _0x2c8415 /= 0x3;
        while (_0x2c8415 % 0x5 == 0x0)
            _0x2c8415 /= 0x5;
        if (_0x2c8415 == 0x1)
            _0x47fb18[_0x1a600d] = !![];
    }
    return _0x47fb18;
}
var Numbers = hamming();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var mn = Arr['shift']()['split']('\x20')['map'](Number);
    if (mn[0x0] == 0x0)
        break;
    var cnt = 0x0;
    for (var i = mn[0x0]; i <= mn[0x1]; i++) {
        if (Numbers[i])
            cnt++;
    }
    console['log'](cnt);
}