function kumiawase(_0x279521, _0x1867fb, _0x4a03c1) {
    var _0x45633a = [];
    var _0xd476f0 = function (_0x1b6a86, _0x3dda99) {
        if (_0x3dda99['length'] == _0x4a03c1)
            _0x45633a['push'](_0x3dda99);
        else {
            for (var _0x5752f1 = _0x1b6a86; _0x5752f1 <= _0x1867fb; _0x5752f1++)
                _0xd476f0(_0x5752f1 + 0x1, _0x3dda99['concat'](_0x5752f1));
        }
    };
    _0xd476f0(_0x279521, []);
    return _0x45633a;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (_0x523307, _0x5392fc) {
    if (_0x523307 == '0\x200\x200')
        return !![];
    var _0x36dacc = _0x523307['split']('\x20')['map'](Number);
    var _0x28c0dc = kumiawase(0x1, _0x36dacc[0x0], _0x36dacc[0x1]);
    var _0x2b3027 = 0x0;
    _0x28c0dc['forEach'](function (_0x22d9b5) {
        var _0x1dd9df = _0x22d9b5['reduce'](function (_0x1ec100, _0x48d323) {
            return _0x1ec100 + _0x48d323;
        });
        if (_0x1dd9df == _0x36dacc[0x2])
            _0x2b3027++;
    });
    console['log'](_0x2b3027);
});