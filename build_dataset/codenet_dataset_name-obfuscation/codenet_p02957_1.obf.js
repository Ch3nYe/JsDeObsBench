'use strict';
const main = _0x3b1633 => {
    const _0x35459d = _0x3b1633['split']('\x0a')['map'](_0x1636ca => _0x1636ca['split']('\x20'));
    const _0x427091 = parseInt(_0x35459d[0x0][0x0], 0xa);
    const _0x3cdda4 = parseInt(_0x35459d[0x0][0x1], 0xa);
    const _0x2bd0ea = _0x427091 + _0x3cdda4;
    const _0x378d8d = _0x2bd0ea / 0x2;
    if (_0x378d8d % 0x1 === 0x0)
        console['log'](_0x378d8d);
    else
        console['log']('IMPOSSIBLE');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));