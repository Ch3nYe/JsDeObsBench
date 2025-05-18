function prime(_0x4fedc6) {
    var _0x3ef4ce = [];
    for (var _0x17dfc2 = 0x0; _0x17dfc2 <= _0x4fedc6; _0x17dfc2++)
        _0x3ef4ce[_0x17dfc2] = _0x17dfc2;
    _0x3ef4ce[0x0] = ![];
    _0x3ef4ce[0x1] = ![];
    var _0x13825f = Math['floor'](Math['sqrt'](_0x4fedc6));
    for (var _0x17dfc2 = 0x2; _0x17dfc2 <= _0x13825f; _0x17dfc2++) {
        if (_0x3ef4ce[_0x17dfc2] == ![])
            continue;
        for (var _0x440e1c = _0x17dfc2 + _0x17dfc2; _0x440e1c <= _0x4fedc6; _0x440e1c += _0x17dfc2) {
            _0x3ef4ce[_0x440e1c] = ![];
        }
    }
    var _0xa3ed1a = {};
    for (var _0x17dfc2 = 0x0; _0x17dfc2 <= _0x4fedc6; _0x17dfc2++) {
        if (_0x3ef4ce[_0x17dfc2] !== ![])
            _0xa3ed1a[_0x3ef4ce[_0x17dfc2]] = !![];
    }
    return _0xa3ed1a;
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