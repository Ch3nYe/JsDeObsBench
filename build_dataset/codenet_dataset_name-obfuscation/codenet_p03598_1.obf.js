function Main(_0x5c7756) {
    var _0x5c7756 = _0x5c7756['split']('\x0a');
    var _0x553832 = _0x5c7756[0x2]['split']('\x20');
    var _0x1a96e5 = 0x0;
    for (var _0x909856 = 0x0; _0x909856 < _0x5c7756[0x0]; _0x909856++) {
        var _0x559cd9 = _0x553832[_0x909856];
        var _0x3ec8ab = _0x5c7756[0x1] - _0x553832[_0x909856];
        var _0x1a96e5 = _0x1a96e5 + (_0x559cd9 < _0x3ec8ab ? _0x559cd9 : _0x3ec8ab) * 0x2;
    }
    console['log'](_0x1a96e5);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));