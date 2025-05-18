'use strict';
const Main = _0x175763 => {
    let _0x59680f = _0x175763['trim']()['split']('');
    let _0x2db869 = _0x59680f['length'];
    let _0x26f8c3 = 0x0;
    for (let _0x402bac = 0x0; _0x402bac <= _0x2db869; _0x402bac++) {
        if (_0x402bac % 0x2 == 0x0 && _0x59680f[_0x402bac] == 'h' && [_0x402bac + 0x1] != 'h') {
            _0x26f8c3 += 0x1;
        } else if (_0x402bac % 0x2 == 0x1 && _0x59680f[_0x402bac] == 'i' && _0x59680f[_0x402bac + 0x1] != 'i') {
            _0x26f8c3 += 0x1;
        } else {
            _0x26f8c3 += 0x0;
        }
    }
    if (_0x26f8c3 >= 0x2) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));