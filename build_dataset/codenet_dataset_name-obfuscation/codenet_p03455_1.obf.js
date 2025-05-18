'use strict';
function main(_0x3159c7) {
    _0x3159c7 = _0x3159c7['trim']()['split']('\x20')['map'](Number);
    const _0x14f947 = _0x3159c7[0x0];
    const _0x595695 = _0x3159c7[0x1];
    const _0x346859 = _0x14f947 % 0x2 ^ _0x595695 % 0x2 ? 'Even' : 'Odd';
    console['log'](_0x346859);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));