'use strict';
const main = _0x33789e => {
    _0x33789e = _0x33789e['trim']()['split']('\x0a');
    const _0x2d4967 = parseInt(_0x33789e[0x0]['split']('\x20')[0x0]);
    console['log'](_0x2d4967 >= 0x1e ? 'Yes' : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));