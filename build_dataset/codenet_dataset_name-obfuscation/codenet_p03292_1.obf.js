'use strict';
function main(_0x1b09e9) {
    const _0x3ea2b7 = _0x1b09e9['split']('\x0a')[0x0]['split']('\x20')['map'](_0x2dc883 => Number(_0x2dc883));
    const _0xbd9fac = Math['max'](..._0x3ea2b7) - Math['min'](..._0x3ea2b7);
    console['log'](_0xbd9fac);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));