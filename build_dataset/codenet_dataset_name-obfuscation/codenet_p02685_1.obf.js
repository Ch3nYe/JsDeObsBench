const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function pow(_0x400c0c, _0x1c0d49) {
    let _0x1a29e2 = 0x1;
    while (_0x1c0d49 > 0x0) {
        if (_0x1c0d49 & 0x1)
            _0x1a29e2 = mul(_0x1a29e2, _0x400c0c);
        _0x400c0c = mul(_0x400c0c, _0x400c0c);
        _0x1c0d49 >>= 0x1;
    }
    return _0x1a29e2;
}
function inv(_0x1535da) {
    if (_0x1535da == 0x1)
        return 0x1;
    return pow(_0x1535da, mod - 0x2);
}
function mul(_0x5db9b0, _0x3696bf) {
    return ((_0x5db9b0 >> 0x10) * _0x3696bf % mod * 0x10000 + (_0x5db9b0 & 0xffff) * _0x3696bf) % mod;
}
const mod = 0x3b800001;
(_0x1a1091 => {
    const _0x43aa25 = _0x1a1091['split']('\x0a');
    let [_0x1d84ef, _0x42d7d7, _0x2f30fb] = _0x43aa25[0x0]['split']('\x20')['map'](Number);
    let _0x25db8d = 0x0;
    let _0x1b4ede = 0x1;
    let _0x2e9cc1 = 0x1;
    for (let _0x106a39 = 0x0; _0x106a39 <= _0x2f30fb; _0x106a39++) {
        _0x1b4ede = _0x1b4ede * (_0x106a39 || 0x1) % mod;
        _0x2e9cc1 = _0x2e9cc1 * (_0x106a39 ? _0x1d84ef - _0x106a39 : 0x1) % mod;
        let _0x386737 = mul(_0x2e9cc1, inv(_0x1b4ede)) % mod;
        _0x25db8d += mul(_0x386737, pow(_0x42d7d7 - 0x1, _0x1d84ef - (_0x106a39 + 0x1))) * _0x42d7d7 % mod;
    }
    console['log'](_0x25db8d % mod);
})(input);