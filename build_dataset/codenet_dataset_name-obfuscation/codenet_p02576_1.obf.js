'use strict';
function main(_0xe04702) {
    _0xe04702 = _0xe04702['trim']()['split']('\x20');
    const _0x2e38a2 = Number(_0xe04702[0x0]);
    const _0x7b0acb = Number(_0xe04702[0x1]);
    const _0xf63b92 = Number(_0xe04702[0x2]);
    let _0x571198 = 0x0;
    let _0x214803;
    for (_0x214803 = 0x0; _0x571198 < _0x2e38a2; _0x214803++) {
        _0x571198 += _0x7b0acb;
    }
    console['log'](_0xf63b92 * _0x214803);
}
function numberSort(_0x20095e) {
    _0x20095e['sort'](f);
    return _0x20095e;
}
var f = function (_0x3bb015, _0x1746e1) {
    return _0x3bb015 - _0x1746e1;
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));