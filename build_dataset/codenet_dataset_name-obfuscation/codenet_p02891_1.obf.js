'use strict';
const main = _0x57db15 => {
    _0x57db15 = _0x57db15['trim']()['split']('\x0a');
    const _0x31ad08 = _0x57db15[0x0]['split']('');
    const _0x4246f4 = parseInt(_0x57db15[0x1]);
    let _0x349c7c = 0x0;
    for (let _0x1f30d2 = 0x1; _0x1f30d2 < _0x31ad08['length']; _0x1f30d2++) {
        if (_0x31ad08[_0x1f30d2] === _0x31ad08[_0x1f30d2 - 0x1]) {
            _0x349c7c++;
            _0x31ad08[_0x1f30d2] = '@';
        }
    }
    console['log'](_0x31ad08['length'] === 0x1 ? Math['floor'](_0x4246f4 / 0x2) : _0x349c7c * _0x4246f4);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));