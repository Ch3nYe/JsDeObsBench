'use strict';
const Main = _0x18e54e => {
    const _0x3defb8 = _0x18e54e['trim']()['split']('\x0a');
    const _0x5de8a6 = parseInt(_0x3defb8[0x0]['split']('\x20')[0x0]);
    const _0x51f6ba = parseInt(_0x3defb8[0x0]['split']('\x20')[0x1]);
    const _0x7c1dd0 = parseInt(_0x3defb8[0x0]['split']('\x20')[0x2]);
    const _0x5c1a4d = _0x3defb8[0x1];
    let _0x26acb9 = [];
    let _0x2f282c = 0x0;
    let _0x178408 = 0x0;
    for (let _0x36034a = 0x0; _0x36034a < _0x5de8a6; _0x36034a++) {
        const _0x34c467 = _0x5c1a4d['split']('')[_0x36034a];
        if (_0x34c467 === 'a') {
            if (_0x2f282c < _0x51f6ba + _0x7c1dd0) {
                _0x26acb9['push']('Yes');
                _0x2f282c += 0x1;
            } else {
                _0x26acb9['push']('No');
            }
        } else if (_0x34c467 === 'b') {
            if (_0x2f282c < _0x51f6ba + _0x7c1dd0 && _0x178408 < _0x7c1dd0) {
                _0x26acb9['push']('Yes');
                _0x2f282c += 0x1;
                _0x178408 += 0x1;
            } else {
                _0x26acb9['push']('No');
            }
        } else {
            _0x26acb9['push']('No');
        }
    }
    _0x26acb9 = _0x26acb9['join']('\x0a');
    console['log'](_0x26acb9);
    return _0x26acb9;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));