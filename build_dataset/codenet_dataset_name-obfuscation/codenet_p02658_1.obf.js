function Main(_0x4026ee) {
    _0x4026ee = _0x4026ee['split']('\x0a');
    const _0x44863f = _0x4026ee[0x0]['trim']();
    const _0x4df44 = _0x4026ee[0x1]['split']('\x20');
    for (let _0x3f36bb = 0x0; _0x3f36bb < _0x44863f; _0x3f36bb++) {
        if (_0x4df44[_0x3f36bb] == 0x0) {
            console['log']('0');
            return;
        }
    }
    let _0x3bc3f9 = BigInt(0x1);
    for (let _0x104eb7 = 0x0; _0x104eb7 < _0x44863f; _0x104eb7++) {
        const _0x4712cd = BigInt(_0x4df44[_0x104eb7]);
        if (_0x4712cd > BigInt(0xde0b6b3a7640000)) {
            console['log']('-1');
            return;
        }
        _0x3bc3f9 = _0x3bc3f9 * _0x4712cd;
        if (_0x3bc3f9 > BigInt(0xde0b6b3a7640000)) {
            console['log']('-1');
            return;
        }
    }
    console['log'](Number(_0x3bc3f9)['toString']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));