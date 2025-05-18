'use strict';
const main = _0x10d6dc => {
    const _0x32f502 = _0x10d6dc['split']('\x0a');
    if (_0x32f502[0x0]['length'] === 0x1) {
        console['log'](_0x32f502[0x0]);
        return;
    }
    const _0xb2899a = _0x32f502[0x0]['length'] - 0x1;
    const _0x516a55 = parseInt(_0x32f502[0x0][0x0]) - 0x1;
    console['log'](_0x516a55 + _0xb2899a * 0x9);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));