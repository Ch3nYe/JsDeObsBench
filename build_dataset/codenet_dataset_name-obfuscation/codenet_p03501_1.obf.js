function Main(_0x467938) {
    const _0x16acb3 = _0x467938['split']('\x20')['map'](_0x3489ac => Number(_0x3489ac));
    const _0xf4ca5f = _0x16acb3[0x0] * _0x16acb3[0x1];
    const _0x40eb08 = _0x16acb3[0x2];
    if (_0xf4ca5f > _0x40eb08) {
        console['log'](_0x40eb08);
    } else {
        console['log'](_0xf4ca5f);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));