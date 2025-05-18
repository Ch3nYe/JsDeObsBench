function Main(_0x5c4c22) {
    _0x5c4c22 = _0x5c4c22['split']('\x20');
    var _0x1b9f7a = parseInt(_0x5c4c22[0x0], 0xa);
    var _0x439b8a = parseInt(_0x5c4c22[0x1], 0xa);
    var _0x4bd5a9 = parseInt(_0x5c4c22[0x2], 0xa);
    console['log']('%d', Math['floor']((_0x4bd5a9 + 0.5) / _0x1b9f7a) * _0x439b8a);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));