function Main(_0x2f1c1c) {
    const _0x3441a9 = _0x2f1c1c['split']('\x20')['map'](_0x35e421 => Number(_0x35e421));
    const _0x2785e7 = _0x3441a9[0x0];
    const _0x50aa2f = _0x3441a9[0x1];
    const _0x1cd5c2 = _0x3441a9[0x2];
    if (_0x2785e7 === _0x50aa2f) {
        console['log'](_0x1cd5c2);
    } else if (_0x50aa2f === _0x1cd5c2) {
        console['log'](_0x2785e7);
    } else {
        console['log'](_0x50aa2f);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));