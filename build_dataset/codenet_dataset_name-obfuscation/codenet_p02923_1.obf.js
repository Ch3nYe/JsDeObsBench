'use strict';
function Main(_0x4a6a53) {
    _0x4a6a53 = _0x4a6a53['trim']()['split']('\x0a');
    const _0x2f3025 = Number(_0x4a6a53[0x0]);
    const _0x1b0b80 = _0x4a6a53[0x1]['trim']()['split']('\x20')['map'](Number);
    let _0x15785b = 0x0;
    let _0x460411 = 0x0;
    for (let _0x5a06b8 = 0x0; _0x5a06b8 < _0x2f3025; _0x5a06b8++) {
        if (_0x1b0b80[_0x5a06b8] >= _0x1b0b80[_0x5a06b8 + 0x1]) {
            _0x460411 += 0x1;
        } else {
            _0x15785b = Math['max'](_0x15785b, _0x460411);
            _0x460411 = 0x0;
        }
    }
    console['log'](_0x15785b);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));