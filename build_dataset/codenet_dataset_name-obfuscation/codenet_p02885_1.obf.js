function Main(_0x5dbae1) {
    var _0x145030 = _0x5dbae1['trim']()['split']('\x20')['map'](Number);
    var _0x19bee9 = _0x145030[0x1] * 0x2;
    var _0x59e0ae = 0x0;
    if (_0x19bee9 <= _0x145030[0x0]) {
        _0x59e0ae = _0x145030[0x0] - _0x19bee9;
    }
    console['log'](_0x59e0ae);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));