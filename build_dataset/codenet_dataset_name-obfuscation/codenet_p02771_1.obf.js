const Main = _0x1f28d9 => {
    const _0x20ecab = _0x1f28d9['split']('\x20');
    var _0x3cc12c = parseInt(_0x20ecab[0x0]);
    var _0x2d2960 = parseInt(_0x20ecab[0x1]);
    var _0x84f7ee = parseInt(_0x20ecab[0x2]);
    if (_0x3cc12c === _0x2d2960 && _0x2d2960 !== _0x84f7ee || _0x2d2960 === _0x84f7ee && _0x84f7ee !== _0x3cc12c || _0x84f7ee === _0x3cc12c && _0x2d2960 !== _0x84f7ee) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));