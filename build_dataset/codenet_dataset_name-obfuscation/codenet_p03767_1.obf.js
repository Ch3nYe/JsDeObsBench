'use strict';
function Main(_0x4b3987) {
    const _0x1ec926 = _0x4b3987['trim']()['split']('\x0a');
    const _0x5be66d = Number(_0x1ec926[0x0]['trim']());
    const _0x5ed9b0 = _0x1ec926[0x1]['trim']()['split']('\x20')['map'](Number)['sort']((_0x211ee4, _0x1e8bd4) => _0x1e8bd4 - _0x211ee4);
    let _0x7c6513 = 0x0;
    for (let _0x42cf4 = 0x0; _0x42cf4 < _0x5be66d; _0x42cf4++) {
        _0x7c6513 += _0x5ed9b0[_0x42cf4 * 0x2 + 0x1];
    }
    console['log'](_0x7c6513);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));