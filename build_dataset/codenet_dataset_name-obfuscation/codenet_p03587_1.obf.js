'use strict';
const main = _0x7405a4 => {
    _0x7405a4 = _0x7405a4['trim']()['split']('\x0a');
    const _0x349a11 = _0x7405a4[0x0]['split']('');
    console['log'](_0x349a11['filter'](_0x276bb8 => _0x276bb8 === '1')['length']);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));