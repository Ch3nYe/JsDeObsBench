function Main(_0x5e7131) {
    var _0x43f06e = _0x5e7131['split']('\x20')[0x0];
    var _0x4bfe97 = _0x5e7131['split']('\x20')[0x1];
    _0x43f06e = parseInt(_0x43f06e, 0xa);
    _0x4bfe97 = parseInt(_0x4bfe97, 0xa);
    var _0x14ef93 = _0x43f06e % _0x4bfe97 === 0x0;
    if (_0x14ef93) {
        console['log'](0x0);
    } else {
        console['log'](0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));