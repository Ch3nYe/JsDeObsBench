function Main(_0xfd7387) {
    k = +_0xfd7387;
    var _0x286ad7 = [];
    var _0x5e667d = 0x1;
    var _0x1f23c5 = '';
    for (var _0x1a13ce = 0x0; _0x1a13ce < k; _0x1a13ce++) {
        _0x286ad7[_0x1a13ce] = _0x5e667d + _0x1f23c5;
        if (_0x5e667d === 0x9) {
            _0x5e667d = 0x1;
            _0x1f23c5 += '9';
        } else
            _0x5e667d++;
    }
    console['log'](_0x286ad7['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));