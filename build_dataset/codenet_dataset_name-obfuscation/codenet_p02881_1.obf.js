'use strict';
function main(_0x3e1789) {
    const _0x5d70b2 = parseInt(_0x3e1789);
    let _0x4ecbb5 = _0x5d70b2 - 0x1;
    for (let _0xfa7f36 = 0x2; _0xfa7f36 <= Math['sqrt'](_0x5d70b2); ++_0xfa7f36) {
        let _0x4c4d49 = _0x5d70b2 / _0xfa7f36;
        if (Number['isInteger'](_0x4c4d49) && _0xfa7f36 + _0x4c4d49 - 0x2 < _0x4ecbb5) {
            _0x4ecbb5 = _0xfa7f36 + _0x4c4d49 - 0x2;
        }
    }
    console['log'](_0x4ecbb5);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));