'use strict';
const main = _0x6bfea2 => {
    const _0xfe04fc = _0x6bfea2['trim']()['split']('\x0a');
    const _0xdd8c0a = parseInt(_0xfe04fc[0x0], 0xa);
    if (_0xdd8c0a === 0x1) {
        console['log']('Hello\x20World');
    } else {
        const _0xbdd83e = parseInt(_0xfe04fc[0x1], 0xa);
        const _0x2a9b26 = parseInt(_0xfe04fc[0x2], 0xa);
        console['log'](_0xbdd83e + _0x2a9b26);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));