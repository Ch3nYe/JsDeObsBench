'use strict';
function main(_0x1f9e9c) {
    const _0x1c234f = _0x1f9e9c['split']('\x0a')[0x1]['split']('\x20')['map'](_0x2c52d0 => Number(_0x2c52d0));
    let _0x158884 = 0x0;
    for (let _0x1d8d8b of _0x1c234f) {
        while (_0x1d8d8b % 0x2 === 0x0) {
            _0x1d8d8b = _0x1d8d8b / 0x2;
            _0x158884 += 0x1;
        }
    }
    console['log'](_0x158884);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));