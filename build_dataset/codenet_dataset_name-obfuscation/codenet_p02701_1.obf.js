'use strict';
const main = _0x25bfdc => {
    const _0x594071 = _0x25bfdc['trim']()['split']('\x0a');
    const _0x41c9fe = new Set(_0x594071);
    console['log'](_0x41c9fe['size'] - 0x1);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));