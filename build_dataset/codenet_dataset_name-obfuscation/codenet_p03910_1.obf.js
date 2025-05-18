function myout(_0x58f1ea) {
    console['log'](_0x58f1ea);
}
function Main(_0xe0feec) {
    _0xe0feec = parseInt(_0xe0feec);
    var _0x40c4b = [];
    var _0x2bff95 = 0x0;
    for (var _0x1f0826 = 0x1; _0x1f0826 <= _0xe0feec; _0x1f0826++) {
        _0x2bff95 += _0x1f0826;
        _0x40c4b['push'](_0x1f0826);
        if (_0x2bff95 == _0xe0feec) {
            myout(_0x40c4b['join']('\x0a'));
            return;
        } else if (_0x2bff95 > _0xe0feec) {
            var _0x549bc3 = _0x2bff95 - _0xe0feec;
            _0x40c4b['splice'](_0x40c4b['indexOf'](_0x549bc3), 0x1);
            myout(_0x40c4b['join']('\x0a'));
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());