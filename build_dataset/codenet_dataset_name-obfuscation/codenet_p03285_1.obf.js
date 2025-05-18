'use strict';
function Main(_0x1afa1c) {
    let _0x2fa179 = Number(_0x1afa1c);
    const _0x55d3f6 = () => {
        if (_0x2fa179 < 0x4) {
            console['log']('No');
        } else if (_0x2fa179 % 0x4 === 0x0) {
            console['log']('Yes');
        } else if (_0x2fa179 % 0x7 === 0x0) {
            console['log']('Yes');
        } else {
            _0x2fa179 -= 0x4;
            _0x55d3f6();
        }
    };
    _0x55d3f6();
}
;
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());