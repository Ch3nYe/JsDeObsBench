function Main(_0x5e0506) {
    var _0x300631 = parseInt(_0x5e0506, 0xa);
    var _0xbb0977 = 0x0;
    for (i = 0x1; i < _0x300631; i++) {
        if (gcd(_0x300631, i) == 0x1)
            _0xbb0977++;
    }
    console['log'](_0xbb0977);
}
function gcd(_0xe44ecf, _0x181820) {
    var _0x337705, _0x3bc406, _0x5278e8;
    _0x337705 = Math['max'](_0xe44ecf, _0x181820);
    _0x3bc406 = Math['min'](_0xe44ecf, _0x181820);
    _0x5278e8 = _0x337705 % _0x3bc406;
    if (_0x5278e8 == 0x0) {
        return _0x3bc406;
    } else {
        return gcd(_0x3bc406, _0x5278e8);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));