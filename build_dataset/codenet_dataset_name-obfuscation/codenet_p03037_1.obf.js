'use strict';
function main(_0x2209b6) {
    const _0xc31a56 = _0x2209b6['split']('\x0a');
    const _0x42745e = _0xc31a56['shift']()['split']('\x20')['map'](_0x1f87fb => parseInt(_0x1f87fb, 0xa))[0x0];
    const _0x4df377 = _0xc31a56['map'](_0xf0b536 => _0xf0b536['split']('\x20')['map'](_0x485fe4 => parseInt(_0x485fe4, 0xa)));
    const _0x15c268 = new Array(_0x42745e)['fill'](!![]);
    _0x4df377['forEach'](_0x40c1c3 => {
        for (let _0xdf72c8 = 0x0; _0xdf72c8 < _0x40c1c3[0x0] - 0x1; ++_0xdf72c8) {
            _0x15c268[_0xdf72c8] = ![];
        }
        for (let _0x50b608 = _0x40c1c3[0x1]; _0x50b608 < _0x42745e; ++_0x50b608) {
            _0x15c268[_0x50b608] = ![];
        }
    });
    console['log'](_0x15c268['filter'](_0x28204d => _0x28204d)['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));