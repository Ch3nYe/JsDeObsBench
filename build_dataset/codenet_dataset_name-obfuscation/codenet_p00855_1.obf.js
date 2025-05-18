function prime(_0x9c0e05) {
    var _0x4b6883 = [];
    for (var _0x269a39 = 0x0; _0x269a39 <= _0x9c0e05; _0x269a39++)
        _0x4b6883[_0x269a39] = _0x269a39;
    _0x4b6883[0x0] = ![];
    _0x4b6883[0x1] = ![];
    var _0x253227 = Math['floor'](Math['sqrt'](_0x9c0e05));
    for (var _0x269a39 = 0x2; _0x269a39 <= _0x253227; _0x269a39++) {
        if (_0x4b6883[_0x269a39] == ![])
            continue;
        for (var _0x35a5fb = _0x269a39 + _0x269a39; _0x35a5fb <= _0x9c0e05; _0x35a5fb += _0x269a39) {
            _0x4b6883[_0x35a5fb] = ![];
        }
    }
    var _0x21cd77 = [];
    for (var _0x269a39 = 0x0; _0x269a39 <= _0x9c0e05; _0x269a39++) {
        if (_0x4b6883[_0x269a39] !== ![])
            _0x21cd77['push'](_0x4b6883[_0x269a39]);
    }
    return _0x21cd77;
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