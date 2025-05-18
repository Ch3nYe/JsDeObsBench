'use strict';
const is_palindrome = _0x7476c5 => {
    let _0x19609e = _0x7476c5['length'];
    for (let _0x198420 = 0x0; _0x198420 < _0x19609e; _0x198420++) {
        if (_0x7476c5[_0x198420] !== _0x7476c5[_0x19609e - _0x198420 - 0x1])
            return ![];
    }
    return !![];
};
const main = _0x4710f0 => {
    const _0xd2ee62 = _0x4710f0['split']('\x0a');
    const _0x4e6878 = _0xd2ee62[0x0];
    const _0x2b0661 = _0x4e6878['length'];
    if (is_palindrome(_0x4e6878) && is_palindrome(_0x4e6878['substring'](0x0, (_0x2b0661 - 0x1) / 0x2)) && is_palindrome(_0x4e6878['substr']((_0x2b0661 + 0x3) / 0x2 - 0x1)))
        console['log']('Yes');
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));