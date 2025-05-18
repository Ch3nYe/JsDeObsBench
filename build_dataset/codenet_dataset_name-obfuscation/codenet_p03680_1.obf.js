'use strict';
const main = _0x12ecab => {
    _0x12ecab = _0x12ecab['trim']()['split']('\x0a');
    const _0x2bc863 = ~~_0x12ecab[0x0];
    const _0x3255c1 = _0x12ecab['slice'](0x1, _0x2bc863 + 0x1)['map'](_0x1b467e => ~~_0x1b467e);
    let _0x48eb2c = 0x1;
    let _0x5b5e6b = 0x0;
    while (_0x48eb2c !== 0x2) {
        _0x48eb2c = _0x3255c1[_0x48eb2c - 0x1];
        _0x5b5e6b++;
        if (_0x5b5e6b > _0x2bc863) {
            console['log'](-0x1);
            return;
        }
    }
    console['log'](_0x5b5e6b);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));