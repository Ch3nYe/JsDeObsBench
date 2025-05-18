function Main(_0x6133c2) {
    _0x6133c2 = _0x6133c2['split']('\x0a');
    const _0x910dd8 = _0x6133c2['shift']();
    const _0x26d2dc = _0x6133c2['map'](_0xe36575 => parseInt(_0xe36575));
    f = ![];
    for (i = 0x0; i < _0x26d2dc['length']; i++) {
        if (_0x26d2dc[i] % 0x2 == 0x0) {
            if (_0x26d2dc[i] % 0x3 != 0x0 && _0x26d2dc[i] % 0x5 != 0x0) {
                f = !![];
            }
        }
    }
    if (f) {
        console['log']('DENIED');
    } else {
        console['log']('APPROVED');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));