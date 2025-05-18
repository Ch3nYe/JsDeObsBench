'use strict';
const main = _0x4438f2 => {
    _0x4438f2 = _0x4438f2['trim']()['split']('\x0a');
    const _0xb35387 = _0x4438f2[0x0]['split']('');
    let _0x35507f = null;
    for (let _0x5934cc in _0xb35387) {
        if (_0x35507f === 'A' && _0xb35387[_0x5934cc] === 'C') {
            console['log']('Yes');
            return;
        }
        _0x35507f = _0xb35387[_0x5934cc];
    }
    console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));