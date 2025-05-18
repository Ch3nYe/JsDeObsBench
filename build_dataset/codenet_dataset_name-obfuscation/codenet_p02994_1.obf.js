'use strict';
function main(_0x189716) {
    const _0x4f0f59 = _0x189716['split']('\x20')['map'](_0x406136 => parseInt(_0x406136, 0xa));
    const _0x374c26 = _0x4f0f59[0x0];
    const _0x3a7e99 = _0x4f0f59[0x1];
    let _0x1aa2c7 = 0x0;
    let _0x2f10d2 = Infinity;
    for (let _0x2a5f82 = _0x3a7e99; _0x2a5f82 < _0x3a7e99 + _0x374c26; ++_0x2a5f82) {
        _0x1aa2c7 += _0x2a5f82;
        if (Math['abs'](_0x2a5f82) < Math['abs'](_0x2f10d2))
            _0x2f10d2 = _0x2a5f82;
    }
    console['log'](_0x1aa2c7 - _0x2f10d2);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));