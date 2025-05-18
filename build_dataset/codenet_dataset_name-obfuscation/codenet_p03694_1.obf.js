'use strict';
function main(_0x2b258c) {
    const _0x2c7439 = _0x2b258c['split']('\x0a')[0x1]['split']('\x20')['map'](_0x25ec55 => Number(_0x25ec55));
    const _0xd346aa = Math['min'](..._0x2c7439);
    const _0x4fb805 = Math['max'](..._0x2c7439);
    const _0x14deac = _0x4fb805 - _0xd346aa;
    console['log'](_0x14deac);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));