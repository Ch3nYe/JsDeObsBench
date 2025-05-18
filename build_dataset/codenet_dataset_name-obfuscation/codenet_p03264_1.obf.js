function Main(_0x1e37be) {
    var _0x13d369 = parseInt(_0x1e37be['split']('\x0a')[0x0], 0xa);
    var _0x1b5248 = 0x0;
    var _0x2ecce9 = 0x0;
    for (i = 0x1; i <= _0x13d369; i++) {
        if (i % 0x2 == 0x0) {
            _0x1b5248++;
        } else {
            _0x2ecce9++;
        }
    }
    console['log'](_0x1b5248 * _0x2ecce9);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));