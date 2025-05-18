function main(_0xe8b1d0) {
    var _0x218883 = _0xe8b1d0[0x1]['trim']()['split']('\x20')['map'](_0x16eda9 => parseInt(_0x16eda9, 0xa));
    var _0x5838b4 = 0xa ** 0x6 + 0x1;
    var _0x28f8ad = new Array(_0x5838b4 + 0x1)['fill'](0x0);
    for (var _0x1df4e3 of _0x218883) {
        _0x28f8ad[_0x1df4e3]++;
    }
    for (var _0x1df4e3 = 0x1; _0x1df4e3 <= _0x5838b4; _0x1df4e3++) {
        if (_0x28f8ad[_0x1df4e3] === 0x0) {
            continue;
        }
        for (var _0x5116e0 = _0x1df4e3 + _0x1df4e3; _0x5116e0 <= _0x5838b4; _0x5116e0 += _0x1df4e3) {
            if (_0x28f8ad[_0x5116e0] !== 0x0) {
                _0x28f8ad[_0x5116e0] = 0x0;
            }
        }
    }
    console['log'](_0x28f8ad['filter'](function (_0xb383e8) {
        return _0xb383e8 == 0x1;
    })['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));