'use strict';
function Main(_0x3577de) {
    _0x3577de = _0x3577de['trim']()['split']('\x0a');
    const _0x4cafc7 = Number(_0x3577de[0x0]);
    const _0x24aa66 = _0x3577de[0x1]['trim']()['split']('\x20')['map'](Number);
    let _0x1720d0 = 0x0;
    for (let _0xd310d7 = 0x1; _0xd310d7 <= _0x4cafc7; _0xd310d7++) {
        let _0x13a6fb = !![];
        let _0x4ef35c = _0x24aa66['slice'](0x0, _0xd310d7);
        let _0x123ca7 = 0x0;
        while (_0x123ca7 < _0x4ef35c['length'] - 0x1) {
            if (_0x4ef35c[_0x123ca7] < _0x24aa66[_0xd310d7 - 0x1])
                _0x13a6fb = ![];
            _0x123ca7++;
        }
        if (_0x13a6fb)
            _0x1720d0++;
    }
    console['log'](_0x1720d0);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));