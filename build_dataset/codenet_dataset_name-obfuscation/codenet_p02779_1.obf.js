'use strict';
function Main(_0x5baeea) {
    _0x5baeea = _0x5baeea['trim']()['split']('\x0a');
    const _0x58b2ef = Number(_0x5baeea[0x0]['trim']());
    const _0x454c49 = _0x5baeea[0x1]['trim']()['split']('\x20')['map'](Number);
    let _0x12e661 = 'YES';
    for (let _0x1b507b = 0x0; _0x1b507b < _0x58b2ef; _0x1b507b++) {
        let _0x17eded = _0x454c49['slice'](_0x1b507b + 0x1);
        let _0x2cc91d = _0x17eded['indexOf'](_0x454c49[_0x1b507b]);
        if (_0x2cc91d !== -0x1) {
            _0x12e661 = 'NO';
            break;
        }
    }
    console['log'](_0x12e661);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));