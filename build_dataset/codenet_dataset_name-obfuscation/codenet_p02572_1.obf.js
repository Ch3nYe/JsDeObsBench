'use strict';
function main(_0xfcae5b) {
    _0xfcae5b = _0xfcae5b['trim']()['split']('\x0a');
    const _0x116a6b = Number(_0xfcae5b[0x0]);
    const _0x13a368 = _0xfcae5b[0x1]['split']('\x20');
    let _0x22adc4 = 0x0;
    for (let _0x29acdf = 0x0; _0x29acdf < _0x116a6b; _0x29acdf++) {
        if (Number(_0x13a368[_0x29acdf]) == 0x0)
            continue;
        for (let _0x5e7cda = _0x29acdf + 0x1; _0x5e7cda < _0x116a6b; _0x5e7cda++) {
            _0x22adc4 = _0x22adc4 + Number(_0x13a368[_0x29acdf]) * Number(_0x13a368[_0x5e7cda]);
        }
    }
    console['log'](_0x22adc4 % 0x3b9aca07);
}
function numberSort(_0x368a01) {
    _0x368a01['sort'](f);
    return _0x368a01;
}
var f = function (_0x38e6d3, _0x4b82ea) {
    return _0x38e6d3 - _0x4b82ea;
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));