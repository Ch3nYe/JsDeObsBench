'use strict';
function Main(_0x283564) {
    _0x283564 = _0x283564['split']('\x0a');
    const _0x589828 = _0x283564[0x0]['split']('\x20');
    let _0x3dd06a = parseInt(_0x589828[0x0]);
    let _0x74a02 = parseInt(_0x589828[0x1]);
    if (_0x74a02 % 0x2 === 0x0) {
        console['log'](Math['floor'](_0x3dd06a / _0x74a02) ** 0x3 + Math['floor']((_0x3dd06a + _0x74a02 / 0x2) / _0x74a02) ** 0x3);
    } else {
        console['log'](Math['floor'](_0x3dd06a / _0x74a02) ** 0x3);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));