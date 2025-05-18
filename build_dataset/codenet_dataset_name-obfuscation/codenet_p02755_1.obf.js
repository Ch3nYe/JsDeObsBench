'use strict';
const main = _0x54d344 => {
    _0x54d344 = _0x54d344['trim']()['split']('\x0a');
    const _0x44e1cc = parseInt(_0x54d344[0x0]['split']('\x20')[0x0]);
    const _0x386ede = parseInt(_0x54d344[0x0]['split']('\x20')[0x1]);
    for (let _0x529fc4 = 0x1; _0x529fc4 <= 0x2710; _0x529fc4++) {
        const _0x54407a = Math['floor'](_0x529fc4 * 0.08);
        const _0x595ca9 = Math['floor'](_0x529fc4 * 0.1);
        if (_0x54407a === _0x44e1cc && _0x595ca9 === _0x386ede) {
            console['log'](_0x529fc4);
            return;
        }
    }
    console['log'](-0x1);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));