'use strict';
const main = _0x5a4746 => {
    _0x5a4746 = _0x5a4746['trim']()['split']('\x0a');
    const _0x1e358e = _0x5a4746[0x0]['split']('');
    if (_0x1e358e['length'] === 0x2) {
        console['log'](0x1);
        return;
    }
    for (let _0x5340e6 = 0x0; _0x5340e6 < _0x1e358e['length']; _0x5340e6++) {
        _0x1e358e['pop']();
        let _0x1c42fb = Math['floor'](_0x1e358e['length'] / 0x2);
        if (_0x1e358e['slice'](0x0, _0x1c42fb)['join']('') === _0x1e358e['slice'](_0x1c42fb, _0x1e358e['length'] + 0x1)['join']('')) {
            console['log'](_0x1e358e['length']);
            return;
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));