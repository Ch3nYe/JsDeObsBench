'use strict';
const main = _0x2a513f => {
    const _0x50f64a = _0x2a513f['trim']()['split']('\x0a');
    let _0xc28358 = Number(_0x50f64a[0x0]['split']('\x20')[0x0]);
    if (_0xc28358 % 0xb > 0x6) {
        console['log'](Math['floor'](_0xc28358 / 0xb) * 0x2 + 0x2);
    } else if (_0xc28358 % 0xb > 0x0) {
        console['log'](Math['floor'](_0xc28358 / 0xb) * 0x2 + 0x1);
    } else {
        console['log'](Math['floor'](_0xc28358 / 0xb) * 0x2);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));