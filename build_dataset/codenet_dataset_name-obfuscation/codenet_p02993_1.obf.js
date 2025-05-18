function Main(_0x5780da) {
    _0x5780da = _0x5780da['split']('\x20');
    var _0x1e714e = _0x5780da;
    var _0x1cabc4 = _0x1e714e;
    var _0x5bacb6 = String(_0x1e714e)['split']('');
    var _0x4a6f1f = parseInt(_0x5bacb6[0x0], 0xa);
    var _0x345b3e = parseInt(_0x5bacb6[0x1], 0xa);
    var _0x41e826 = parseInt(_0x5bacb6[0x2], 0xa);
    var _0x572a05 = parseInt(_0x5bacb6[0x3], 0xa);
    if (_0x4a6f1f == _0x345b3e) {
        console['log']('Bad');
    } else if (_0x345b3e == _0x41e826) {
        console['log']('Bad');
    } else if (_0x41e826 == _0x572a05) {
        console['log']('Bad');
    } else {
        console['log']('Good');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));