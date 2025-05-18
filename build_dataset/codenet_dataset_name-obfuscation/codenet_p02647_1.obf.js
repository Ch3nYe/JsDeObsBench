function Main(_0x5829e8) {
    _0x5829e8 = _0x5829e8['split']('\x0a');
    var _0x24c593 = _0x5829e8[0x0]['split']('\x20');
    var _0x3b3574 = _0x5829e8[0x1]['split']('\x20')['map'](Number);
    for (var _0x100cc1 = 0x0; _0x100cc1 < _0x24c593[0x1]; _0x100cc1++) {
        var _0x252f9d = new Array(_0x3b3574['length'])['fill'](0x0);
        for (var _0x377d7d = 0x0; _0x377d7d < _0x3b3574['length']; _0x377d7d++) {
            var _0x535a12 = _0x3b3574[_0x377d7d];
            var _0x17b5dd = _0x377d7d - _0x535a12;
            var _0x907185 = _0x377d7d + _0x535a12;
            if (_0x17b5dd < 0x0)
                _0x17b5dd = 0x0;
            if (_0x907185 > _0x3b3574['length'] - 0x1)
                _0x907185 = _0x3b3574['length'] - 0x1;
            for (var _0x13ed3f = _0x17b5dd; _0x13ed3f <= _0x907185; _0x13ed3f++) {
                _0x252f9d[_0x13ed3f]++;
            }
        }
        var _0x5da4a8 = !![];
        for (var _0x377d7d = 0x0; _0x377d7d < _0x3b3574['length']; _0x377d7d++) {
            if (_0x3b3574[_0x377d7d] != _0x252f9d[_0x377d7d])
                _0x5da4a8 = ![];
            _0x3b3574[_0x377d7d] = _0x252f9d[_0x377d7d];
        }
        if (_0x5da4a8)
            break;
    }
    console['log'](_0x3b3574['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());