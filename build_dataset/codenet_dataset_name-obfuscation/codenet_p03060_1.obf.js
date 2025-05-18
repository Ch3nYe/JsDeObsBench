function Main(_0x3f5f48) {
    _0x3f5f48 = _0x3f5f48['split']('\x0a');
    n = Number(_0x3f5f48[0x0]['split']('\x20'));
    V = _0x3f5f48[0x1]['split']('\x20')['map'](Number);
    C = _0x3f5f48[0x2]['split']('\x20')['map'](Number);
    var _0x41e0e9 = 0x0;
    for (var _0x126123 = 0x0; _0x126123 < n; _0x126123++) {
        y = V[_0x126123] - C[_0x126123];
        if (y >= 0x0) {
            _0x41e0e9 = _0x41e0e9 + y;
        }
    }
    console['log'](_0x41e0e9);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));