'use strict';
const main = _0x346892 => {
    _0x346892 = _0x346892['trim']()['split']('\x0a');
    const _0x588434 = parseInt(_0x346892[0x0]['split']('\x20')[0x0]);
    const _0x42eea4 = parseInt(_0x346892[0x0]['split']('\x20')[0x1]);
    console['log'](0x1f4 * _0x588434 >= _0x42eea4 ? 'Yes' : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));