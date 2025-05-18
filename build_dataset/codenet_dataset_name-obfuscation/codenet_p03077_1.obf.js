'use strict';
function main(_0x1eb717) {
    const _0x75aa5b = _0x1eb717['split']('\x0a');
    const _0x51a62a = parseInt(_0x75aa5b[0x0]);
    const _0x3e788d = parseInt(_0x75aa5b[0x1]);
    const _0x26a919 = parseInt(_0x75aa5b[0x2]);
    const _0x2ad3e3 = parseInt(_0x75aa5b[0x3]);
    const _0x28b5e5 = parseInt(_0x75aa5b[0x4]);
    const _0x39ffbf = parseInt(_0x75aa5b[0x5]);
    const _0x1512b8 = [
        _0x3e788d,
        _0x26a919,
        _0x2ad3e3,
        _0x28b5e5,
        _0x39ffbf
    ];
    let _0x3688e9 = Math['min'](..._0x1512b8);
    console['log'](Math['ceil'](_0x51a62a / _0x3688e9) + 0x4);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));