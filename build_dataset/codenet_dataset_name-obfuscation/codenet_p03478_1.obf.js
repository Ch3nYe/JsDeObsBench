function Main(_0x139f79) {
    var _0x139f79 = _0x139f79['split']('\x20');
    var _0x451771 = _0x139f79[0x0];
    var _0x5441d3 = _0x139f79[0x1];
    var _0x51ff7b = _0x139f79[0x2];
    var _0x550754 = 0x0;
    for (j = 0x1; j <= _0x451771; j++) {
        if (0x0 <= j && j <= 0x9) {
            if (_0x5441d3 <= j && j <= _0x51ff7b) {
                _0x550754 += j;
            }
        } else {
            var _0x563928 = j['toString']();
            var _0xca2da9 = _0x563928['split']('')['map'](_0x53d6dc => parseInt(_0x53d6dc));
            var _0x214dc2 = _0xca2da9['reduce'](function (_0x2847f6, _0x36ce97, _0x3be676, _0x416304) {
                return _0x2847f6 + _0x36ce97;
            });
        }
        ;
        if (_0x5441d3 <= _0x214dc2 && _0x214dc2 <= _0x51ff7b) {
            _0x550754 += j;
        }
    }
    console['log'](_0x550754);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));