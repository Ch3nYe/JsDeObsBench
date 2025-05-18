'use strict';
const main = _0x2b03bf => {
    _0x2b03bf = _0x2b03bf['trim']()['split']('\x0a');
    const _0x135b54 = _0x2b03bf[0x0]['split']('');
    const _0x43414c = _0x135b54['filter'](_0x56e626 => _0x56e626 === 'o')['length'];
    const _0x554048 = 0xf - _0x135b54['length'];
    console['log'](_0x554048 + _0x43414c >= 0x8 ? 'YES' : 'NO');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));