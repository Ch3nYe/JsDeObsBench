function Main(_0x146380) {
    _0x146380 = _0x146380['split']('\x20');
    const _0x55ea95 = parseInt(_0x146380[0x0]);
    const _0x4497cf = parseInt(_0x146380[0x1]);
    const _0x1d6006 = _0x55ea95 <= _0x4497cf ? 'unsafe' : 'safe';
    console['log'](_0x1d6006);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));