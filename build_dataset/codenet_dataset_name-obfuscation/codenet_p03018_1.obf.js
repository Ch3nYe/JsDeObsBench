'use strict';
function Main(_0x4f97da) {
    let _0x21a0f7 = _0x4f97da;
    let _0x10176a = _0x21a0f7['split']('ABC');
    let _0x2b0770 = _0x10176a['length'] - 0x1;
    while (_0x10176a['length'] !== 0x1) {
        _0x21a0f7 = _0x10176a['join']('BCA');
        _0x10176a = _0x21a0f7['split']('ABC');
        _0x2b0770 += _0x10176a['length'] - 0x1;
    }
    console['log'](_0x2b0770);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));