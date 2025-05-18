function Main(_0x1316ab) {
    var _0x52287c = parseInt(_0x1316ab[0x0], 0xa);
    var _0x3dddb4 = parseInt(_0x1316ab[0x1], 0xa);
    var _0x35f132 = parseInt(_0x1316ab[0x2], 0xa);
    if (_0x52287c < _0x3dddb4) {
        if (_0x52287c < _0x35f132 && _0x35f132 < _0x3dddb4) {
            console['log']('Yes');
        } else {
            console['log']('No');
        }
    } else {
        if (_0x3dddb4 < _0x35f132 && _0x35f132 < _0x52287c) {
            console['log']('Yes');
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\n|\s/));