'use strict';
const main = _0x2e9af1 => {
    _0x2e9af1 = _0x2e9af1['split']('\x0a');
    const _0x5ee898 = parseInt(_0x2e9af1[0x0]['split']('\x20')[0x0]);
    const _0x336a80 = parseInt(_0x2e9af1[0x0]['split']('\x20')[0x1]);
    const _0x207404 = _0x2e9af1[0x1]['split']('\x20')['map'](_0x58f146 => parseInt(_0x58f146))['sort']((_0x2507f8, _0x37c3a8) => _0x2507f8 - _0x37c3a8);
    let _0x45603e = 0x174876e800;
    _0x207404['forEach'](_0x261d02 => {
        let _0x1b2367 = Math['abs'](_0x336a80 - _0x261d02);
        if (_0x1b2367 < _0x45603e) {
            _0x45603e = _0x1b2367;
        }
    });
    for (let _0x2d813d = _0x45603e; _0x2d813d >= 0x0; _0x2d813d--) {
        for (let _0x1be485 of _0x207404) {
            let _0x42691d = Math['abs'](_0x1be485 - _0x336a80);
            if (_0x42691d % _0x45603e !== 0x0) {
                break;
            }
            console['log'](_0x2d813d);
            return;
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));