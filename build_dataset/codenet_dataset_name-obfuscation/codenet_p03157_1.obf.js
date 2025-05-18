console['log']((_0x5707d3 => {
    const [_0x5e84c5, ..._0x4ab93b] = _0x5707d3['trim']()['split']('\x0a');
    const [_0x55c34f, _0x25c24d] = _0x5e84c5['split']('\x20')['map'](_0x372f80 => parseInt(_0x372f80));
    const _0x2917b3 = Array['from']({ 'length': _0x55c34f }, _0x3842b9 => Array(_0x25c24d)['fill'](![]));
    const _0x50b5e5 = [
        [
            -0x1,
            0x0
        ],
        [
            0x0,
            -0x1
        ],
        [
            0x1,
            0x0
        ],
        [
            0x0,
            0x1
        ]
    ];
    let _0x4f510c = 0x0;
    for (let _0x34c39c = 0x0; _0x34c39c < _0x55c34f; _0x34c39c++) {
        for (let _0x4bf812 = 0x0; _0x4bf812 < _0x25c24d; _0x4bf812++) {
            if (_0x2917b3[_0x34c39c][_0x4bf812])
                continue;
            const _0x306fdb = [[
                    _0x34c39c,
                    _0x4bf812
                ]];
            _0x2917b3[_0x34c39c][_0x4bf812] = !![];
            let _0x344aa5 = _0x4ab93b[_0x34c39c][_0x4bf812] === '.' | 0x0, _0x2921eb = _0x344aa5 ^ 0x1;
            while (_0x306fdb['length']) {
                const [_0x48269a, _0x520861] = _0x306fdb['pop']();
                for (const [_0x579cda, _0x2794f7] of _0x50b5e5) {
                    const _0x1915ce = _0x48269a + _0x579cda, _0x284583 = _0x520861 + _0x2794f7;
                    if (_0x1915ce < 0x0 || _0x55c34f <= _0x1915ce || _0x284583 < 0x0 || _0x25c24d <= _0x284583 || _0x2917b3[_0x1915ce][_0x284583] || _0x4ab93b[_0x48269a][_0x520861] === _0x4ab93b[_0x1915ce][_0x284583])
                        continue;
                    _0x2917b3[_0x1915ce][_0x284583] = !![];
                    if (_0x4ab93b[_0x1915ce][_0x284583] === '#')
                        _0x2921eb++;
                    else
                        _0x344aa5++;
                    _0x306fdb['push']([
                        _0x1915ce,
                        _0x284583
                    ]);
                }
            }
            _0x4f510c += _0x344aa5 * _0x2921eb;
        }
    }
    return '' + _0x4f510c;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));