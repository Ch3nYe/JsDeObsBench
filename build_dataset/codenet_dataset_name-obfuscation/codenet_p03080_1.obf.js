function Main(_0x591bb2) {
    let _0xbe8334 = 0x0;
    let _0x2aa434 = 0x0;
    const _0x15b8b0 = _0x591bb2['split']('\x0a');
    inputS = _0x15b8b0[0x1]['split']('');
    for (i = 0x0; i < inputS['length']; i++) {
        if (inputS[i] === 'R') {
            _0xbe8334++;
        } else {
            _0x2aa434++;
        }
    }
    console['log'](_0xbe8334 > _0x2aa434 ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));