'use strict';
function Main(_0x3a6920) {
    const _0x29221b = _0x3a6920['split']('\x0a')[0x0];
    if (_0x29221b['length'] <= 0x2) {
        console['log'](_0x29221b);
    } else {
        console['log'](_0x29221b['split']('')['reverse']()['join'](''));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));