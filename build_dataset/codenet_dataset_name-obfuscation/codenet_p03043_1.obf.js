function main(_0x277262) {
    _0x277262 = _0x277262['split']('\x20')['map'](Number);
    const _0x44edc8 = _0x277262[0x0];
    const _0x5cfac3 = _0x277262[0x1];
    var _0x5a8ce3 = 0x0;
    for (i = 0x1; i <= _0x44edc8; i++) {
        var _0x93f642 = 0x1 / _0x44edc8;
        var _0x37dcb7 = i;
        while (_0x37dcb7 < _0x5cfac3) {
            _0x37dcb7 *= 0x2;
            _0x93f642 /= 0x2;
        }
        _0x5a8ce3 += _0x93f642;
    }
    console['log'](_0x5a8ce3['toString']()['slice'](0x0, 0xe));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));