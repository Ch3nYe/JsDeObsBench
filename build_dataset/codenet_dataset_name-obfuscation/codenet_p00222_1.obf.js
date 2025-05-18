function prime(_0x44c91d) {
    var _0x576887 = [];
    for (var _0x52418c = 0x0; _0x52418c <= _0x44c91d; _0x52418c++)
        _0x576887[_0x52418c] = _0x52418c;
    _0x576887[0x0] = ![];
    _0x576887[0x1] = ![];
    var _0x4fe6b5 = Math['floor'](Math['sqrt'](_0x44c91d));
    for (var _0x52418c = 0x2; _0x52418c <= _0x4fe6b5; _0x52418c++) {
        if (_0x576887[_0x52418c] == ![])
            continue;
        for (var _0x45d3ac = _0x52418c + _0x52418c; _0x45d3ac <= _0x44c91d; _0x45d3ac += _0x52418c) {
            _0x576887[_0x45d3ac] = ![];
        }
    }
    var _0x4e1bf8 = [];
    for (var _0x52418c = 0x0; _0x52418c <= _0x44c91d; _0x52418c++) {
        if (_0x576887[_0x52418c] !== ![])
            _0x4e1bf8['push'](_0x576887[_0x52418c]);
    }
    return _0x4e1bf8;
}
var p = prime(0x98967f);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    var quad = '';
    for (var j = 0x5; j < p['length']; j++) {
        if (p[j] > a)
            break;
        var x = p[j] - 0x8;
        if (x == p[j - 0x3] && x + 0x2 == p[j - 0x2] && x + 0x6 == p[j - 0x1])
            quad = p[j];
    }
    console['log'](quad);
}