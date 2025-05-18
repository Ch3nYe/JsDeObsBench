'use strict';
const main = _0x5c7588 => {
    _0x5c7588 = _0x5c7588['trim']()['split']('\x0a');
    const _0x5bee0d = parseInt(_0x5c7588[0x0]['split']('\x20')[0x0]);
    const _0x10a04f = parseInt(_0x5c7588[0x0]['split']('\x20')[0x1]);
    console['log'](_0x10a04f === 0x1 ? 0x0 : _0x5bee0d - _0x10a04f);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));