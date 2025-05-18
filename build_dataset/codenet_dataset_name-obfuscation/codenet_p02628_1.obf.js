function main(_0x1a5ed7) {
    const [_0x18e601, _0x195ad5] = parseNumberLine(_0x1a5ed7[0x0]);
    const _0x5c8c65 = parseNumberLine(_0x1a5ed7[0x1])['sort']((_0x5c37b8, _0xdd2739) => _0x5c37b8 - _0xdd2739);
    let _0x421484 = 0x0;
    for (let _0x5effa9 = 0x0; _0x5effa9 < _0x195ad5; ++_0x5effa9) {
        _0x421484 += _0x5c8c65[_0x5effa9];
    }
    console['log'](_0x421484);
}
function parseNumberLine(_0x84463d, _0x19782c = 0xa) {
    return _0x84463d['split'](/\s+/)['map'](_0x1f9d54 => parseInt(_0x1f9d54, _0x19782c));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));