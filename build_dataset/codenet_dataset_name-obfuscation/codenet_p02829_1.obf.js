'use strict';
function main(_0x5e53a3) {
    const _0x47af65 = _0x5e53a3['split']('\x0a');
    const _0x139007 = _0x47af65['map'](_0x2a68bc => parseInt(_0x2a68bc));
    const _0x27f137 = [
        0x1,
        0x2,
        0x3
    ];
    let _0x1c2fed = _0x27f137['filter'](_0x9b068b => _0x9b068b !== _0x139007[0x0]);
    _0x1c2fed = _0x1c2fed['find'](_0x21f332 => _0x21f332 !== _0x139007[0x1]);
    console['log'](_0x1c2fed);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));