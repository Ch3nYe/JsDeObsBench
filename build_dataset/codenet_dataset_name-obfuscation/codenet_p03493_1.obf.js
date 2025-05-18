function Main(_0x478b74) {
    var _0xb4a917 = _0x478b74['split']('\x20');
    var _0x2577ac = parseInt(_0xb4a917[0x0], 0xa);
    var _0x1ab6cf = _0x2577ac['toString'](0xa);
    var _0x197aa0 = 0x0;
    for (var _0x4f25c5 = 0x0; _0x4f25c5 < _0x1ab6cf['length']; _0x4f25c5++) {
        if (_0x1ab6cf[_0x4f25c5] == '1') {
            _0x197aa0 += 0x1;
        }
    }
    console['log'](_0x197aa0);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));