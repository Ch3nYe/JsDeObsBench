'use strict';
function Main(_0x26f379) {
    const _0xf17b37 = parseInt(_0x26f379);
    let _0x2ca8ff = 0x0;
    for (let _0x305ff1 = 0x1; _0x305ff1 * _0x305ff1 < _0xf17b37; _0x305ff1++) {
        const _0x13fce2 = _0x305ff1 - 0x1;
        if (_0x13fce2 !== 0x0 && _0xf17b37 % _0x13fce2 === Math['trunc'](_0xf17b37 / _0x13fce2)) {
            _0x2ca8ff += _0x13fce2;
        }
        const _0x48270c = Math['trunc'](_0xf17b37 / _0x305ff1) - 0x1;
        if (_0xf17b37 % _0x48270c === _0x305ff1) {
            _0x2ca8ff += _0x48270c;
        }
    }
    console['log'](_0x2ca8ff);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));