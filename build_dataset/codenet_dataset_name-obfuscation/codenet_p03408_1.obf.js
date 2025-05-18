'use strict';
function Main(_0x1890ac) {
    const _0x11da47 = _0x1890ac['trim']()['split']('\x0a');
    const _0x4e30da = Number(_0x11da47[0x0]['trim']());
    const _0x1ff725 = Number(_0x11da47[_0x4e30da + 0x1]['trim']());
    const _0x171ebc = _0x11da47['slice'](0x1, _0x4e30da + 0x1);
    const _0x540f45 = _0x11da47['slice'](_0x4e30da + 0x2);
    let _0x479347 = {};
    for (const _0x3bb202 of _0x171ebc) {
        const _0x3d1705 = _0x3bb202['trim']();
        if (_0x479347['hasOwnProperty'](_0x3d1705)) {
            _0x479347[_0x3d1705] = _0x479347[_0x3d1705] + 0x1;
        } else {
            _0x479347[_0x3d1705] = 0x1;
        }
    }
    for (const _0x236fe7 of _0x540f45) {
        const _0x192b4d = _0x236fe7['trim']();
        if (_0x479347['hasOwnProperty'](_0x192b4d)) {
            _0x479347[_0x192b4d] = _0x479347[_0x192b4d] - 0x1;
        } else {
            _0x479347[_0x192b4d] = 0x1;
        }
    }
    let _0x3d9371 = 0x0;
    for (const [_0x10efe3, _0x431cfc] of Object['entries'](_0x479347)) {
        if (_0x3d9371 < _0x431cfc) {
            _0x3d9371 = _0x431cfc;
        }
    }
    console['log'](_0x3d9371);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));