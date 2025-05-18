function Main(_0x543cd1) {
    var _0x543cd1 = _0x543cd1['split']('\x0a');
    var _0x2c01cb = _0x543cd1[0x0];
    var _0x4c981b, _0x154747, _0x1adbe0 = 0x0;
    for (var _0x58fa00 = 0x0; _0x58fa00 < _0x2c01cb['length']; _0x58fa00++) {
        if (_0x2c01cb[_0x58fa00] == 'C' && !_0x1adbe0) {
            _0x4c981b = _0x58fa00;
            _0x1adbe0++;
        }
        ;
        if (_0x1adbe0 && _0x2c01cb[_0x58fa00] == 'F') {
            _0x154747 = _0x58fa00;
            return console['log']('Yes');
        }
    }
    ;
    return console['log']('No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));