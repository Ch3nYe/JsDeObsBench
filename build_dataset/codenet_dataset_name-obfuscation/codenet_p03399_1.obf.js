function Main(_0x2c02fe) {
    var _0x291091 = _0x2c02fe['trim']()['split']('\x0a')['map'](_0x3cf2eb => parseInt(_0x3cf2eb, 0xa));
    var _0x20f0f3 = 0x0;
    if (_0x291091[0x0] <= _0x291091[0x1]) {
        _0x20f0f3 = _0x20f0f3 + _0x291091[0x0];
    } else if (_0x291091[0x0] >= _0x291091[0x1]) {
        _0x20f0f3 = _0x20f0f3 + _0x291091[0x1];
    }
    var _0x550552 = 0x0;
    if (_0x291091[0x2] <= _0x291091[0x3]) {
        _0x550552 = _0x550552 + _0x291091[0x2];
    } else if (_0x291091[0x2] >= _0x291091[0x3]) {
        _0x550552 = _0x550552 + _0x291091[0x3];
    }
    console['log'](_0x20f0f3 + _0x550552);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));