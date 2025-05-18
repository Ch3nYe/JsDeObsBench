function prime(_0xbedb4a) {
    var _0x28768a = [];
    for (var _0x5dad47 = 0x0; _0x5dad47 <= _0xbedb4a; _0x5dad47++)
        _0x28768a[_0x5dad47] = _0x5dad47;
    _0x28768a[0x0] = ![];
    _0x28768a[0x1] = ![];
    var _0x320a60 = Math['floor'](Math['sqrt'](_0xbedb4a));
    for (var _0x5dad47 = 0x2; _0x5dad47 <= _0x320a60; _0x5dad47++) {
        if (_0x28768a[_0x5dad47] == ![])
            continue;
        for (var _0x423662 = _0x5dad47 + _0x5dad47; _0x423662 <= _0xbedb4a; _0x423662 += _0x5dad47) {
            _0x28768a[_0x423662] = ![];
        }
    }
    var _0x44b55d = [];
    for (var _0x5dad47 = 0x0; _0x5dad47 <= _0xbedb4a; _0x5dad47++) {
        if (_0x28768a[_0x5dad47] !== ![])
            _0x44b55d['push'](_0x28768a[_0x5dad47]);
    }
    return _0x44b55d;
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