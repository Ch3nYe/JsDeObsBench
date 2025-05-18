function Main(_0x1d2b09) {
    const _0x4d06cd = _0x1d2b09['split']('\x20');
    const _0x4585ee = parseInt(_0x4d06cd[0x0], 0xa);
    const _0x4bff85 = parseInt(_0x4d06cd[0x1], 0xa);
    const _0x48a80e = Math['ceil'](_0x4585ee / _0x4bff85);
    console['log'](_0x48a80e);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));