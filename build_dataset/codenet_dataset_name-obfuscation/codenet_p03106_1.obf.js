function main(_0x5b13c6) {
    const _0x5d78fe = _0x5b13c6['split']('\x20');
    var _0x36e53b = Number(_0x5d78fe[0x0]);
    var _0x5d94ea = Number(_0x5d78fe[0x1]);
    var _0x456b0a = Number(_0x5d78fe[0x2]);
    var _0x117b10 = 0x0;
    var _0x2257cd;
    var _0x52d2e0 = 0x0;
    for (_0x117b10 = _0x36e53b; _0x117b10 > 0x0; --_0x117b10) {
        if (Number['isInteger'](_0x36e53b / _0x117b10) && Number['isInteger'](_0x5d94ea / _0x117b10)) {
            _0x52d2e0++;
            if (_0x52d2e0 === _0x456b0a) {
                _0x2257cd = _0x117b10;
                break;
            }
        }
    }
    console['log'](_0x2257cd);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));