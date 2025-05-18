'use strict';
const main = _0x599f51 => {
    _0x599f51 = _0x599f51['trim']()['split']('\x0a');
    const _0x2f9592 = parseInt(_0x599f51[0x0]['split']('\x20')[0x0]);
    let _0x3f0766 = _0x599f51[0x1]['split']('\x20')['map'](_0x71213d => parseInt(_0x71213d))['sort']((_0x37902f, _0x2a5f4a) => _0x2a5f4a - _0x37902f);
    const _0x588421 = _0x3f0766['shift']();
    const _0xbbe2a5 = _0x3f0766['reduce']((_0xdc17a6, _0x33a04c) => _0xdc17a6 + _0x33a04c);
    console['log'](_0x588421 < _0xbbe2a5 ? 'Yes' : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));