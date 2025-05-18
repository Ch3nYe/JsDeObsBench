'use strict';
function main(_0x6146ac) {
    const _0x3efcd4 = Number(_0x6146ac['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const _0x42a8b8 = Number(_0x6146ac['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    let _0x4122ce = [];
    let _0x364295 = 0x0;
    for (let _0xeb92a0 = 0x0; _0xeb92a0 < _0x3efcd4; _0xeb92a0++) {
        _0x4122ce[_0xeb92a0] = _0x6146ac['split']('\x0a')[0x1]['split']('\x20')[_0xeb92a0];
        _0x364295 += Number(_0x4122ce[_0xeb92a0]);
    }
    let _0xbb3514 = 0x0;
    for (let _0x4a33b0 = 0x0; _0x4a33b0 < _0x3efcd4; _0x4a33b0++) {
        if (_0x4122ce[_0x4a33b0] * (0x4 * _0x42a8b8) - _0x364295 > 0x0) {
            _0xbb3514++;
        }
    }
    if (_0xbb3514 >= _0x42a8b8) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));