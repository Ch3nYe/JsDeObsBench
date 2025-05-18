console['log']((_0x5bc994 => {
    const [_0x4caaf2, _0x1e8989] = _0x5bc994['trim']()['split']`\n`;
    const _0x7104c7 = _0x4caaf2['length'], _0x21c0c9 = _0x1e8989['length'];
    let _0x5c6b20 = -0x1, _0x158c84 = 0x0;
    _0xa68982:
        for (let _0xe1c1eb = 0x0; _0xe1c1eb < _0x21c0c9; _0xe1c1eb++) {
            for (let _0x2193dc = _0x5c6b20 + 0x1; _0x2193dc < _0x7104c7; _0x2193dc++) {
                if (_0x4caaf2[_0x2193dc] === _0x1e8989[_0xe1c1eb]) {
                    _0x5c6b20 = _0x2193dc;
                    continue _0xa68982;
                }
            }
            if (_0x5c6b20 === -0x1)
                return '-1';
            _0x158c84++;
            _0x5c6b20 = -0x1;
            _0xe1c1eb--;
        }
    return '' + (_0x158c84 * _0x7104c7 + _0x5c6b20 + 0x1);
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));