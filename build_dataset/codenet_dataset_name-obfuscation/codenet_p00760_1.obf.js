const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
const lines = input['trim']()['split']('\x0a');
const nextDay = (_0x2c180f, _0x4ad6a7, _0x3ceb40) => {
    _0x3ceb40 = _0x3ceb40 + 0x1;
    if (_0x2c180f % 0x3 === 0x0) {
        if (_0x3ceb40 > 0x14) {
            _0x3ceb40 = 0x1;
            _0x4ad6a7 += 0x1;
            if (_0x4ad6a7 === 0xb) {
                _0x4ad6a7 = 0x1;
                _0x2c180f++;
            }
        }
    } else {
        if (_0x3ceb40 > 0x14) {
            _0x3ceb40 = 0x1;
            _0x4ad6a7 += 0x1;
            if (_0x4ad6a7 === 0xb) {
                _0x4ad6a7 = 0x1;
                _0x2c180f++;
            }
        } else if (_0x3ceb40 > 0x13 && _0x4ad6a7 % 0x2 === 0x0) {
            _0x3ceb40 = 0x1;
            _0x4ad6a7 += 0x1;
            if (_0x4ad6a7 === 0xb) {
                _0x4ad6a7 = 0x1;
                _0x2c180f++;
            }
        }
    }
    return [
        _0x2c180f,
        _0x4ad6a7,
        _0x3ceb40
    ];
};
lines['shift']();
lines['forEach'](_0x370fa2 => {
    let [_0x35cda7, _0x3d0277, _0x5316c6] = _0x370fa2['trim']()['split']('\x20')['map'](Number);
    let _0x2aaec5 = 0x1;
    while (_0x35cda7 !== 0x3e8 || _0x3d0277 !== 0x1 || _0x5316c6 !== 0x1) {
        [_0x35cda7, _0x3d0277, _0x5316c6] = nextDay(_0x35cda7, _0x3d0277, _0x5316c6);
        _0x2aaec5++;
    }
    console['log'](_0x2aaec5 - 0x1);
});