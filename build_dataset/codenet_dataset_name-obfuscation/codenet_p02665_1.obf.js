console['log']((_0x131874 => {
    const [[_0x309c2f], _0x212fc7] = _0x131874['trim']()['split']('\x0a')['map'](_0x424d02 => _0x424d02['split']('\x20')['map'](_0x585171 => _0x585171 | 0x0));
    const _0x114348 = [0x1 - _0x212fc7[0x0]];
    for (let _0x2dce14 = 0x1; _0x2dce14 < _0x309c2f; _0x2dce14++)
        _0x114348['push'](_0x114348[_0x2dce14 - 0x1] * 0x2 - _0x212fc7[_0x2dce14]);
    _0x114348['push'](0x0);
    let _0x5328c6 = BigInt(_0x212fc7[_0x309c2f]);
    for (let _0x1cdc23 = _0x309c2f - 0x1; _0x1cdc23 >= 0x0; _0x1cdc23--) {
        const _0x45d198 = _0x114348[_0x1cdc23 + 0x1] + _0x212fc7[_0x1cdc23 + 0x1];
        if (_0x114348[_0x1cdc23] > _0x45d198)
            _0x114348[_0x1cdc23] = _0x45d198;
        else if (_0x114348[_0x1cdc23] * 0x2 < _0x45d198)
            return '-1';
        _0x5328c6 += BigInt(_0x114348[_0x1cdc23] + _0x212fc7[_0x1cdc23]);
    }
    return '' + _0x5328c6;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));