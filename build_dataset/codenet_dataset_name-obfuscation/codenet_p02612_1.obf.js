function Main(_0xe71ae4) {
    const _0x4a460e = Number(_0xe71ae4) % 0x3e8;
    console['log'](_0x4a460e === 0x0 ? 0x0 : 0x3e8 - _0x4a460e);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));