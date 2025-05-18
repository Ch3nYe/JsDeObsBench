'use strict';
const main = _0x25d60f => {
    _0x25d60f = _0x25d60f['trim']()['split']('\x0a');
    const _0x1bc4c3 = parseInt(_0x25d60f[0x0]['split']('\x20')[0x0]);
    const _0x47454b = parseInt(_0x25d60f[0x0]['split']('\x20')[0x1]);
    let _0x73c494 = [...Array(_0x1bc4c3 * 0x2)]['fill'](0x0);
    let _0x7c0006 = parseInt(_0x47454b + String(_0x73c494['join']('')));
    let _0x24a951 = parseInt(0x1 + String(_0x73c494['join']('')));
    console['log'](_0x47454b !== 0x64 ? _0x7c0006 : _0x7c0006 + _0x24a951);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));