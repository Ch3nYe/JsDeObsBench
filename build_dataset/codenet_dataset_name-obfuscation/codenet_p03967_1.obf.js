console['log']((_0x183ab3 => {
    const _0x191c61 = _0x183ab3['trim']();
    const _0x37e420 = _0x191c61['length'];
    const _0x5b9a66 = Array(_0x37e420)['fill'](0x0);
    for (let _0x20d975 = _0x37e420; --_0x20d975;)
        _0x5b9a66[_0x20d975 - 0x1] = _0x5b9a66[_0x20d975] + (_0x191c61[_0x20d975] === 'p');
    let _0xd84ea5 = 0x0, _0xee11f8 = 0x0;
    for (let _0x3fae71 = 0x0; _0x3fae71 < _0x37e420; _0x3fae71++) {
        if (_0x191c61[_0x3fae71] === 'g') {
            if (_0xd84ea5 > _0x5b9a66[_0x3fae71]) {
                _0xd84ea5--;
                _0xee11f8++;
            } else
                _0xd84ea5++;
        } else
            _0xd84ea5--;
    }
    return '' + _0xee11f8;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));