function Main(_0x5eaa15) {
    const _0x45d637 = _0x5eaa15['split']('\x0a')[0x0];
    var _0x232bc2 = 0x0;
    if (_0x45d637 >= 0x9dd) {
        _0x232bc2 = 0x1;
        console['log'](_0x232bc2);
    } else {
        for (var _0x59d767 = 0x1; _0x59d767 <= 0x19; _0x59d767++) {
            if (_0x45d637 >= _0x59d767 * 0x65 && _0x45d637 <= _0x59d767 * 0x69) {
                _0x232bc2 = 0x1;
                break;
            }
        }
    }
    console['log'](_0x232bc2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));