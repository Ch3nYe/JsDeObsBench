console['log'](function (_0x27512a) {
    const _0x90aee3 = _0x27512a['trim']()['split']('\x0a')['map'](_0x436bed => _0x436bed['split']('\x20')['map'](_0x35d25a => _0x35d25a | 0x0));
    const _0xe66ac9 = _0x90aee3[0x0][0x0], _0x531561 = _0x90aee3[_0xe66ac9 + 0x1][0x0];
    const _0x5138f1 = [0x0], _0x447bb3 = [0x0], _0x3fd20f = [], _0x31e8e8 = [];
    for (let _0x3fbb04 = 0x1; _0x3fbb04 <= _0xe66ac9; _0x3fbb04++) {
        _0x5138f1['push'](_0x90aee3[_0x3fbb04][0x0]);
        _0x447bb3['push'](_0x90aee3[_0x3fbb04][0x1]);
    }
    let _0x3732fa = 0x0;
    for (let _0x292745 = 0x1; _0x292745 <= _0x531561; _0x292745++) {
        _0x3fd20f['push'](_0x90aee3[_0xe66ac9 + 0x1 + _0x292745][0x0]);
        _0x31e8e8['push'](_0x90aee3[_0xe66ac9 + 0x1 + _0x292745][0x1]);
        if (_0x31e8e8[_0x292745 - 0x1] > _0x3732fa)
            _0x3732fa = _0x31e8e8[_0x292745 - 0x1];
    }
    const _0x4bb69c = [Array(_0x3732fa + 0x1)['fill'](0x0)];
    for (let _0x49787e = 0x1; _0x49787e <= _0xe66ac9; _0x49787e++) {
        _0x4bb69c[_0x49787e] = [];
        for (let _0x352bb6 = 0x0; _0x352bb6 <= _0x3732fa; _0x352bb6++) {
            if (_0x352bb6 >= _0x447bb3[_0x49787e])
                _0x4bb69c[_0x49787e][_0x352bb6] = Math['max'](_0x4bb69c[_0x49787e >> 0x1][_0x352bb6 - _0x447bb3[_0x49787e]] + _0x5138f1[_0x49787e], _0x4bb69c[_0x49787e >> 0x1][_0x352bb6]);
            else
                _0x4bb69c[_0x49787e][_0x352bb6] = _0x4bb69c[_0x49787e >> 0x1][_0x352bb6];
        }
    }
    const _0x59a73f = [];
    for (let _0x257ff9 = 0x0; _0x257ff9 < _0x531561; _0x257ff9++) {
        _0x59a73f['push'](_0x4bb69c[_0x3fd20f[_0x257ff9]][_0x31e8e8[_0x257ff9]]);
    }
    return _0x59a73f['join']('\x0a');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));