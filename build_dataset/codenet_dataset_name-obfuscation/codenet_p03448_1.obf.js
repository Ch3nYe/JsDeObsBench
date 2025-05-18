function main(_0x116e7f) {
    const _0x4b2108 = _0x116e7f['split']('\x0a');
    const _0x18780c = _0x4b2108['slice'](0x0, 0x3);
    const _0xb03ab2 = parseInt(_0x4b2108['slice'](-0x1), 0xa);
    var _0x4103ee = 0x0;
    for (i = 0x0; i <= parseInt(_0x18780c[0x0], 0xa); i++) {
        for (j = 0x0; j <= parseInt(_0x18780c[0x1], 0xa); j++) {
            for (k = 0x0; k <= parseInt(_0x18780c[0x2], 0xa); k++) {
                if (0x1f4 * i + 0x64 * j + 0x32 * k == _0xb03ab2) {
                    _0x4103ee++;
                }
            }
        }
    }
    console['log'](_0x4103ee);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));