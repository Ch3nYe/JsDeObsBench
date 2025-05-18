const main = _0x3bc8b2 => {
    const _0x5a71d6 = _0x3bc8b2['split'](/\n/);
    const _0x4353d2 = _0x5a71d6[0x0];
    const _0x1d55c8 = _0x5a71d6[0x1]['split'](/\s/)['map'](_0x201b9a => parseInt(_0x201b9a, 0xa))['sort']((_0x3bed12, _0x4e8b51) => {
        if (_0x3bed12 < _0x4e8b51)
            return 0x1;
        if (_0x3bed12 > _0x4e8b51)
            return -0x1;
        return 0x0;
    });
    var _0x2f4d3a = 0x0;
    for (i = 0x0; i < _0x4353d2; i++) {
        _0x2f4d3a += _0x1d55c8[i * 0x2 + 0x1];
    }
    console['log'](_0x2f4d3a);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));