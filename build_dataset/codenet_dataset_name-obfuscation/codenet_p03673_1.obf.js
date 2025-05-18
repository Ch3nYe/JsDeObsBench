'use strict';
const main = _0x40dd2b => {
    _0x40dd2b = _0x40dd2b['trim']()['split']('\x0a');
    const _0x3ea5d3 = ~~_0x40dd2b[0x0];
    const _0x5315cb = _0x40dd2b[0x1]['split']('\x20')['map'](_0xef4472 => ~~_0xef4472);
    let _0xb4e13b = [];
    for (let _0x5bdf5b = 0x0; _0x5bdf5b < _0x3ea5d3; _0x5bdf5b++) {
        if (_0x5bdf5b % 0x2 === 0x0) {
            _0xb4e13b['push'](_0x5315cb[_0x5bdf5b]);
        } else {
            _0xb4e13b['unshift'](_0x5315cb[_0x5bdf5b]);
        }
    }
    if (_0x3ea5d3 % 0x2 !== 0x0)
        _0xb4e13b = _0xb4e13b['reverse']();
    console['log'](_0xb4e13b['join']('\x20'));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));