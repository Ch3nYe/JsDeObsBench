'use strict';
function main(_0x23eaef) {
    const _0x3c9f40 = _0x23eaef['split']('\x0a');
    const _0x17f629 = _0x3c9f40[0x0]['split']('\x20')['map'](_0x1a9a5e => parseInt(_0x1a9a5e))[0x0];
    const _0x5d82ba = _0x3c9f40[0x0]['split']('\x20')['map'](_0x3e3d95 => parseInt(_0x3e3d95))[0x1];
    let _0x3c5cc6 = ((_0x17f629 - _0x5d82ba) * 0x64 + _0x5d82ba * 0x76c) * Math['pow'](0x2, _0x5d82ba);
    console['log'](_0x3c5cc6);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));