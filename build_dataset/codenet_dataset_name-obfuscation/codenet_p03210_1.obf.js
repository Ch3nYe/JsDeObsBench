'use strict';
function Main(_0x341705) {
    const _0x2bb885 = _0x341705['split']('\x0a')[0x0];
    if (_0x2bb885 == 0x7 || _0x2bb885 == 0x5 || _0x2bb885 == 0x3) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));