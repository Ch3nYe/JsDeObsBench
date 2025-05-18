function Main(_0x5c7202) {
    var [_0x1ad3eb, _0x3ca7f1] = _0x5c7202['split']('\x20')['map'](Number);
    if (_0x3ca7f1 > _0x1ad3eb)
        [_0x1ad3eb, _0x3ca7f1] = [
            _0x3ca7f1,
            _0x1ad3eb
        ];
    var _0x38de01;
    do {
        _0x38de01 = _0x1ad3eb % _0x3ca7f1;
        _0x1ad3eb = _0x3ca7f1;
        _0x3ca7f1 = _0x38de01;
    } while (_0x38de01);
    console['log'](_0x1ad3eb);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));