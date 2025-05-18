function Main(_0x3b812b) {
    _0x3b812b = _0x3b812b['split']('\x0a');
    tmp = _0x3b812b[0x0]['split']('\x20');
    var _0x23f426 = Number(tmp[0x0]);
    var _0x224187 = Number(tmp[0x1]);
    if (_0x224187 === 0x1)
        return console['log'](0x0);
    var _0x85d9a8 = Math['abs'](_0x23f426 - _0x224187);
    _0x23f426 = _0x85d9a8;
    while (_0x85d9a8 >= _0x23f426) {
        _0x23f426 = _0x85d9a8;
        _0x85d9a8 = Math['abs'](_0x23f426 - _0x224187);
    }
    console['log'](_0x85d9a8);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));