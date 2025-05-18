'use strict';
const main = _0x380d0e => {
    const _0x1a06e8 = _0x380d0e['trim']()['split']('\x20');
    const _0x12cfe3 = parseInt(_0x1a06e8[0x0], 0xa);
    const _0x542830 = parseInt(_0x1a06e8[0x1], 0xa);
    const _0x4e34c2 = parseInt(_0x1a06e8[0x2], 0xa);
    if (_0x4e34c2 >= _0x12cfe3 && _0x4e34c2 <= _0x542830)
        console['log']('Yes');
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));