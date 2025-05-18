'use strict';
const DELIMITER = '\x20';
const A_INDEX = 0x0;
const B_INDEX = 0x1;
const K_INDEX = 0x3;
const LIMIT = Math['pow'](0xa, 0x12);
const process = _0x4876a3 => {
    const _0x248662 = _0x4876a3['split'](DELIMITER);
    const _0x37b78b = parseInt(_0x248662[A_INDEX]) - parseInt(_0x248662[B_INDEX]);
    const _0x359d9a = _0x248662[K_INDEX];
    const _0xb4197a = parseInt(_0x359d9a['charAt'](_0x359d9a['length'] - 0x1));
    if (Math['abs'](_0x37b78b) > LIMIT) {
        console['log']('Unfair');
    } else {
        console['log'](_0xb4197a % 0x2 === 0x0 || _0x37b78b === 0x0 ? _0x37b78b : -_0x37b78b);
    }
};
process(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());