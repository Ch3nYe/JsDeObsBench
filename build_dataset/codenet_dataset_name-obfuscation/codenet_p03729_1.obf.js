'use strict';
const main = _0x13ea1e => {
    const _0x28b44c = _0x13ea1e['split']('\x0a')[0x0]['split']('\x20');
    let _0x1e5d53 = _0x28b44c[0x0]['split']('')['pop']();
    for (let _0x17f92c = 0x1; _0x17f92c < _0x28b44c['length']; _0x17f92c++) {
        if (_0x1e5d53 == _0x28b44c[_0x17f92c]['split']('')[0x0]) {
            _0x1e5d53 = _0x28b44c[_0x17f92c]['split']('')['pop']();
        } else {
            console['log']('NO');
            return;
        }
    }
    console['log']('YES');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));