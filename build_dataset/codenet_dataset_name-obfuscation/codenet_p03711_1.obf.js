'use strict';
const main = _0x30f03a => {
    const _0x279d50 = _0x30f03a['split']('\x0a')['map'](_0xc89484 => _0xc89484['split']('\x20'));
    const _0x39489f = parseInt(_0x279d50[0x0][0x0], 0xa);
    const _0x5513e6 = parseInt(_0x279d50[0x0][0x1], 0xa);
    const _0x5b5069 = [
        0x1,
        0x3,
        0x5,
        0x7,
        0x8,
        0xa,
        0xc
    ];
    const _0x517580 = [
        0x4,
        0x6,
        0x9,
        0xb
    ];
    if (_0x5b5069['includes'](_0x39489f) && _0x5b5069['includes'](_0x5513e6))
        console['log']('Yes');
    else if (_0x517580['includes'](_0x39489f) && _0x517580['includes'](_0x5513e6))
        console['log']('Yes');
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));