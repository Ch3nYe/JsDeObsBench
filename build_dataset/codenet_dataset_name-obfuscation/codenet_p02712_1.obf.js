function Main(_0x191132) {
    inputs = _0x191132['split']('\x0a');
    const _0x229020 = Number(inputs[0x0]);
    const _0x1b7ee3 = [];
    for (let _0x5946c1 = 0x1; _0x5946c1 <= _0x229020; _0x5946c1++) {
        if (_0x5946c1 % 0x3 !== 0x0 && _0x5946c1 % 0x5 !== 0x0) {
            _0x1b7ee3['push'](_0x5946c1);
        }
    }
    const _0x45378d = _0x1b7ee3['reduce']((_0xed4d90, _0x223b43) => {
        return _0xed4d90 + _0x223b43;
    });
    console['log'](_0x45378d);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));