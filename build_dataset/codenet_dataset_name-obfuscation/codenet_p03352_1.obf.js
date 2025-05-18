'use strict';
function main(_0x1bd9e9) {
    const _0x4ee645 = Number(_0x1bd9e9);
    const _0xa07306 = [...Array(0x1f)]['map']((_0x5393e8, _0x3ef598) => _0x3ef598 + 0x1);
    _0xa07306['shift']();
    const _0x1365fc = [0x1];
    for (let _0x4e2fe6 = 0x0; _0x4e2fe6 < _0xa07306['length']; _0x4e2fe6++) {
        let _0x4343b0 = 0x2;
        let _0x5ea3e5 = _0xa07306[_0x4e2fe6];
        let _0x78bf83 = Math['pow'](_0x5ea3e5, _0x4343b0);
        if (_0x78bf83 > _0x4ee645)
            continue;
        while (_0x78bf83 <= _0x4ee645) {
            _0x4343b0 += 0x1;
            _0x78bf83 = Math['pow'](_0x5ea3e5, _0x4343b0);
        }
        _0x78bf83 = Math['pow'](_0x5ea3e5, _0x4343b0 - 0x1);
        _0x1365fc['push'](_0x78bf83);
    }
    const _0x366e90 = Math['max'](..._0x1365fc);
    console['log'](_0x366e90);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));