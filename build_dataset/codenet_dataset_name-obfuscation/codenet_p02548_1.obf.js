function Main(_0xed30b6) {
    _0xed30b6 = _0xed30b6['split']('\x0a');
    N = parseInt(_0xed30b6[0x0]['split']('\x20'));
    var _0x492c29 = 0x0;
    for (var _0x4aa377 = 0x1; _0x4aa377 < N; _0x4aa377++) {
        _0x492c29 += Math['floor']((N - 0x1) / _0x4aa377);
    }
    console['log']('%d', _0x492c29);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));