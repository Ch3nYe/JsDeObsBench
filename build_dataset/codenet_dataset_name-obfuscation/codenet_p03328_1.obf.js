function Main(_0x4700de) {
    _0x4700de = _0x4700de['split']('\x20');
    var _0xafacce = parseInt(_0x4700de[0x0], 0xa);
    var _0x45a5e0 = parseInt(_0x4700de[0x1], 0xa);
    var _0x5c7d33 = 0x1;
    var _0x331874 = 0x1;
    var _0x6094f6 = 0x1;
    var _0x54b06e = 0x1;
    var _0x188c18 = 0x0;
    while (!![]) {
        while (!![]) {
            _0x6094f6++;
            _0x5c7d33 += _0x6094f6;
            _0x54b06e++;
            _0x331874 += _0x54b06e;
            if (_0x5c7d33 > _0xafacce) {
                break;
            }
        }
        while (!![]) {
            _0x54b06e++;
            _0x331874 += _0x54b06e;
            if (_0x331874 > _0x45a5e0) {
                break;
            }
        }
        if (_0x5c7d33 - _0xafacce == _0x331874 - _0x45a5e0) {
            break;
        }
    }
    _0x188c18 = _0x5c7d33 - _0xafacce;
    console['log'](_0x188c18);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));