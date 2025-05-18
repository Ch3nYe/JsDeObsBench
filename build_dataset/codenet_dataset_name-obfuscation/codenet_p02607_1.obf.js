'use strict';
function main(_0x3908ce) {
    let _0x3f0e43 = _0x3908ce['trim']()['split']('\x0a')[0x1]['split']('\x20')['map'](Number);
    let _0x2ea6e3 = _0x3f0e43['length'];
    let _0x598dbc = 0x0;
    for (let _0x5c5f3a = 0x0; _0x5c5f3a < _0x2ea6e3; _0x5c5f3a++) {
        if ((_0x5c5f3a + 0x1) % 0x2 === 0x0) {
            continue;
        }
        if (_0x3f0e43[_0x5c5f3a] % 0x2 === 0x0) {
            continue;
        }
        _0x598dbc++;
    }
    console['log'](_0x598dbc);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));