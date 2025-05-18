function main(_0x2bf08d) {
    const _0x288e69 = _0x2bf08d['trim']()['split']('\x0a');
    let [_0x5865c0, _0xc0ded8] = _0x288e69[0x0]['split']('\x20');
    _0x5865c0 = +_0x5865c0;
    _0xc0ded8 = BigInt(_0xc0ded8);
    const _0x4cfd5d = _0x288e69[0x1]['split']('\x20')['map'](Number);
    const _0x50c0f9 = new Map();
    let _0x4469ef = 0x1;
    while (_0xc0ded8 > 0x0) {
        const _0x49083b = _0x50c0f9['get'](_0x4469ef);
        if (!_0x49083b) {
            _0x50c0f9['set'](_0x4469ef, BigInt(_0x50c0f9['size']));
            _0x4469ef = _0x4cfd5d[_0x4469ef - 0x1];
            _0xc0ded8--;
        } else {
            const _0x53a42f = BigInt(_0x50c0f9['size']) - _0x49083b;
            const _0x4bd97f = _0xc0ded8 % _0x53a42f;
            for (let [_0x2bab06, _0x2161c6] of _0x50c0f9) {
                if (_0x2161c6 == _0x49083b + _0x4bd97f) {
                    _0x4469ef = _0x2bab06;
                    break;
                }
            }
            _0xc0ded8 = 0x0;
        }
    }
    console['log'](_0x4469ef);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));