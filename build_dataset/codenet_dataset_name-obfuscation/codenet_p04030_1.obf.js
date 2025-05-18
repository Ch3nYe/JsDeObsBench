'use strict';
function Main(_0x5a0f0a) {
    const _0x322fac = _0x5a0f0a['split']('\x0a')[0x0]['split']('');
    const _0x3cf8c1 = [];
    for (const _0x40a157 of _0x322fac) {
        if (_0x40a157 === 'B') {
            _0x3cf8c1['pop']();
        } else {
            _0x3cf8c1['push'](_0x40a157);
        }
    }
    console['log'](_0x3cf8c1['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));