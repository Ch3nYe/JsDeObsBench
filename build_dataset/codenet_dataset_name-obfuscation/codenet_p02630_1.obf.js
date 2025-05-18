function main(_0x36c562) {
    const [_0x5a272c] = parseNumberLine(_0x36c562[0x0]);
    const _0x5ee156 = parseNumberLine(_0x36c562[0x1]);
    const [_0x346d8c] = parseNumberLine(_0x36c562[0x2]);
    const _0x33d56c = _0x36c562['slice'](0x3);
    let _0x4c9408 = _0x5ee156['reduce']((_0x35feb1, _0x2e222b) => _0x35feb1 + _0x2e222b, 0x0);
    for (let _0x391c3c = 0x0; _0x391c3c < _0x346d8c; ++_0x391c3c) {
        const [_0x410047, _0x28fe79] = parseNumberLine(_0x33d56c[_0x391c3c]);
        while (!![]) {
            const _0x2a2a22 = _0x5ee156['indexOf'](_0x410047);
            if (_0x2a2a22 < 0x0)
                break;
            _0x5ee156[_0x2a2a22] = _0x28fe79;
            _0x4c9408 += _0x28fe79 - _0x410047;
        }
        console['log'](_0x4c9408);
    }
}
function parseNumberLine(_0x3cb61e, _0x548e9d = 0xa) {
    return _0x3cb61e['split'](/\s+/)['map'](_0x41c69d => parseInt(_0x41c69d, _0x548e9d));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));