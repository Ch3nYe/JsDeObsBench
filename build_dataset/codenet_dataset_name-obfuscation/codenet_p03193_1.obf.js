function Main(_0x36312d) {
    _0x36312d = _0x36312d['split']('\x0a');
    var _0x83cd1c = _0x36312d[0x0]['split']('\x20')['map'](Number);
    var _0x1bd828 = 0x0;
    for (var _0x15d1a1 = 0x1; _0x15d1a1 < _0x36312d['length']; _0x15d1a1++) {
        var _0x38e389 = _0x36312d[_0x15d1a1]['split']('\x20')['map'](Number);
        if (_0x38e389[0x0] >= _0x83cd1c[0x1] && _0x38e389[0x1] >= _0x83cd1c[0x2])
            _0x1bd828++;
    }
    console['log'](_0x1bd828);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());