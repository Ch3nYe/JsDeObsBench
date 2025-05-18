function Main(_0x5290e6) {
    'use strict';
    const _0x216a4a = _0x5290e6['split']('\x0a');
    let _0x4dc789 = ![];
    let _0x1a8a23 = 0x0;
    let _0x25a2dc = 0x0;
    for (let _0x32a041 = 0x0; _0x32a041 < _0x216a4a[0x0]; _0x32a041++) {
        if (_0x4dc789 === ![] && _0x216a4a[0x1][_0x32a041] === '#') {
            _0x4dc789 = !![];
        }
        if (_0x4dc789 === !![] && _0x216a4a[0x1][_0x32a041] === '.') {
            _0x25a2dc++;
        }
        if (_0x216a4a[0x1][_0x32a041] === '#') {
            _0x1a8a23++;
        }
    }
    if (_0x25a2dc === 0x0 && _0x4dc789 === ![]) {
        console['log']('0');
    } else if (_0x25a2dc === 0x0 && _0x4dc789 === !![]) {
        console['log'](_0x1a8a23);
    } else if (_0x1a8a23 <= _0x25a2dc) {
        console['log'](_0x1a8a23);
    } else {
        console['log'](_0x25a2dc);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));