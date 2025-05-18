function MainD(_0x2ef74b) {
    const _0x2d43d2 = _0x2ef74b['split']('\x0a');
    const _0x4f1bd8 = _0x2d43d2[0x0];
    const _0x193dce = _0x2d43d2[0x1]['split']('');
    let _0x524935 = 0x0;
    let _0x3819b4 = 0x0;
    for (let _0x380441 = 0x0; _0x380441 < _0x193dce['length']; _0x380441++) {
        if (_0x193dce[_0x380441] === 'W') {
            _0x3819b4++;
        }
    }
    if (_0x3819b4 === 0x0)
        return console['log'](0x0);
    for (let _0x36cc74 = _0x3819b4 - 0x1; _0x36cc74 < _0x193dce['length']; _0x36cc74++) {
        if (_0x193dce[_0x36cc74] === 'R') {
            _0x524935++;
        }
    }
    console['log'](_0x524935);
}
MainD(require('fs')['readFileSync']('/dev/stdin', 'utf8'));