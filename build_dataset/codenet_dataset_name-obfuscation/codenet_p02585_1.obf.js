const main = _0x424890 => {
    _0x424890 = _0x424890['trim']()['split']('\x0a');
    const [_0x757d9c, _0x3ee8ec] = _0x424890[0x0]['split']('\x20')['map'](Number);
    const _0x1e0e27 = _0x424890[0x1]['split']('\x20')['map'](_0x1d4e6b => Number(_0x1d4e6b) - 0x1);
    const _0x4411e5 = _0x424890[0x2]['split']('\x20')['map'](Number);
    const _0x56a279 = [new Array(_0x757d9c)['fill'](0x0)];
    for (let _0x4a39ed = 0x0; _0x4a39ed < _0x3ee8ec; _0x4a39ed++)
        _0x56a279['push']([]);
    for (let _0x4ec3ba = 0x0; _0x4ec3ba < _0x3ee8ec; _0x4ec3ba++) {
        for (let _0x47cb63 = 0x0; _0x47cb63 < _0x757d9c; _0x47cb63++) {
            const _0x41149a = _0x56a279[_0x4ec3ba][_0x47cb63];
            _0x56a279[_0x4ec3ba + 0x1][_0x1e0e27[_0x47cb63]] = _0x41149a + _0x4411e5[_0x1e0e27[_0x47cb63]];
        }
    }
    let _0x4160c9 = -Infinity;
    for (let _0x53780e = 0x1; _0x53780e < _0x56a279['length']; _0x53780e++)
        _0x4160c9 = Math['max'](_0x4160c9, Math['max'](..._0x56a279[_0x53780e]));
    return console['log'](_0x4160c9);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));