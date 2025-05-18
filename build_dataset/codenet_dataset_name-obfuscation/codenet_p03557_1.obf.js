'use strict';
function main(_0x348dfb) {
    const _0x3f5cad = _0x348dfb['split']('\x0a');
    const _0x21bcc2 = parseInt(_0x3f5cad['shift']());
    const _0x3f4aa8 = _0x3f5cad['shift']()['split']('\x20')['map'](_0x232136 => parseInt(_0x232136))['sort']((_0x4424aa, _0xbceaa1) => _0x4424aa - _0xbceaa1);
    const _0x18bb4c = _0x3f5cad['shift']()['split']('\x20')['map'](_0x327bae => parseInt(_0x327bae))['sort']((_0x214b18, _0x4b65bd) => _0x214b18 - _0x4b65bd);
    const _0x3a0420 = _0x3f5cad['shift']()['split']('\x20')['map'](_0x458dd6 => parseInt(_0x458dd6))['sort']((_0x9c7e01, _0x2aa471) => _0x9c7e01 - _0x2aa471);
    let _0x394a63 = 0x0;
    for (let _0x402373 = 0x0; _0x402373 < _0x21bcc2; _0x402373++) {
        let _0x292666 = _0x18bb4c[_0x402373];
        let _0x4d5009 = _0x21bcc2;
        for (let _0x29202a = 0x0; _0x29202a < _0x21bcc2; _0x29202a++) {
            if (_0x292666 <= _0x3f4aa8[_0x29202a]) {
                _0x4d5009--;
            }
        }
        let _0x1ad8ee = _0x21bcc2;
        for (let _0x30221f = 0x0; _0x30221f < _0x21bcc2; _0x30221f++) {
            if (_0x292666 >= _0x3a0420[_0x30221f]) {
                _0x1ad8ee--;
            }
        }
        _0x394a63 += _0x4d5009 * _0x1ad8ee;
    }
    console['log'](_0x394a63);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));