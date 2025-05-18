function main(_0x4e7bf2) {
    const _0x416251 = parseInt(_0x4e7bf2['split']('\x20')[0x0], 0xa);
    const _0x28628b = parseInt(_0x4e7bf2['split']('\x20')[0x1], 0xa);
    ptnAdd = _0x416251 + _0x28628b;
    ptnSub = _0x416251 - _0x28628b;
    ptnMul = _0x416251 * _0x28628b;
    ans = Math['max']['apply'](null, [
        ptnAdd,
        ptnSub,
        ptnMul
    ]);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));