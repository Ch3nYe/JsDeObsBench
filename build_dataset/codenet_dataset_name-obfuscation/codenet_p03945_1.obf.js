function Main(_0x168783) {
    _0x168783 = _0x168783['split']('\x0a');
    var _0x49cfee = _0x168783[0x0];
    if (_0x49cfee['match'](/BW/g)) {
        var _0x57cd6f = _0x49cfee['match'](/BW/g)['length'];
    } else {
        _0x57cd6f = 0x0;
    }
    if (_0x49cfee['match'](/WB/g)) {
        var _0x27c46e = _0x49cfee['match'](/WB/g)['length'];
    } else {
        _0x27c46e = 0x0;
    }
    console['log']('%s', _0x57cd6f + _0x27c46e);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));