'use strict';
console['log'](function (_0x248c2d) {
    const _0xc7ff1e = _0x248c2d['trim']()['split']('\x0a');
    const _0x1c1f41 = _0xc7ff1e[0x0]['split']('\x20')['map'](_0x5f2486 => _0x5f2486 | 0x0);
    const _0x2c808a = _0x1c1f41[0x0], _0x2259ca = _0x1c1f41[0x1];
    const _0x5c999d = [Array(_0x2259ca + 0x2)['fill'](Infinity)];
    let _0x1ea8c8 = 0x0;
    for (let _0x591701 = 0x1; _0x591701 <= _0x2c808a; _0x591701++) {
        _0x5c999d['push']([Infinity]);
        for (let _0x22a4ec = 0x0; _0x22a4ec < _0x2259ca; _0x22a4ec++) {
            if (_0xc7ff1e[_0x591701][_0x22a4ec] === '.') {
                _0x1ea8c8++;
                _0x5c999d[_0x591701]['push'](0x0);
            } else
                _0x5c999d[_0x591701]['push'](Infinity);
        }
        _0x5c999d[_0x591701]['push'](Infinity);
    }
    _0x5c999d['push'](Array(_0x2259ca + 0x2)['fill'](Infinity));
    const _0x118f22 = [
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
    const _0x31322c = [[
            0x1,
            0x1,
            0x2
        ]];
    do {
        const _0xe70367 = _0x31322c['shift']();
        for (const _0x209c5c of _0x118f22) {
            const _0x28acc0 = _0xe70367[0x0] + _0x209c5c[0x0], _0x29e585 = _0xe70367[0x1] + _0x209c5c[0x1];
            if (_0x28acc0 === _0x2259ca && _0x29e585 === _0x2c808a)
                return _0x1ea8c8 - _0xe70367[0x2];
            if (_0x5c999d[_0x29e585][_0x28acc0] === 0x0) {
                _0x5c999d[_0x29e585][_0x28acc0] = _0xe70367[0x2] + 0x1;
                _0x31322c['push']([
                    _0x28acc0,
                    _0x29e585,
                    _0xe70367[0x2] + 0x1
                ]);
            }
        }
    } while (_0x31322c[0x0]);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));