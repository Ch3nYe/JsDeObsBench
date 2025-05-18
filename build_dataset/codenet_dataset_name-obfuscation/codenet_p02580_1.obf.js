'use strict';
function Main(_0x29977c) {
    const _0x4c2cf9 = _0x29977c['trim']()['split']('\x0a');
    const [_0x4a1a80, _0xaeb030, _0x5dbe7d] = _0x4c2cf9['shift']()['split']('\x20')['map'](_0x1574b2 => Number(_0x1574b2));
    const _0x3c782f = _0x4c2cf9['map'](_0x51fc80 => _0x51fc80['split']('\x20')['map'](_0xa51a2f => Number(_0xa51a2f)));
    let _0x408418 = 0x0;
    for (let _0x380a22 = 0x1; _0x380a22 <= _0x4a1a80; _0x380a22++) {
        const _0x49a6b6 = _0x3c782f['filter'](_0x317173 => _0x317173[0x0] !== _0x380a22);
        const _0x471e91 = _0x3c782f['length'] - _0x49a6b6['length'];
        for (let _0x50d40a = 0x1; _0x50d40a <= _0xaeb030; _0x50d40a++) {
            const _0xbdb2aa = _0x49a6b6['filter'](_0x5438ea => _0x5438ea[0x1] === _0x50d40a);
            if (_0x408418 < _0x471e91 + _0xbdb2aa['length']) {
                _0x408418 = _0x471e91 + _0xbdb2aa['length'];
            }
        }
    }
    console['log'](_0x408418);
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));