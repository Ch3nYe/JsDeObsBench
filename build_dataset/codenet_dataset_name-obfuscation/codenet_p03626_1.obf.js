function main(_0x1b816d) {
    var _0x4308e3 = _0x1b816d['split'](/\r\n|\r|\n/);
    var _0x21c88f = Number(_0x4308e3[0x0]);
    var _0x3d8b73 = _0x4308e3[0x1]['split']('');
    var _0x2a558e;
    var _0x30342f = 0x0;
    var _0x1d2749;
    if (_0x3d8b73[_0x30342f] == _0x3d8b73[_0x30342f + 0x1]) {
        _0x2a558e = 0x6;
        _0x30342f = _0x30342f + 0x2;
        _0x1d2749 = !![];
    } else {
        _0x2a558e = 0x3;
        _0x30342f++;
        _0x1d2749 = ![];
    }
    for (; _0x30342f < _0x21c88f - 0x1; _0x30342f++) {
        if (_0x3d8b73[_0x30342f] == _0x3d8b73[_0x30342f + 0x1]) {
            if (_0x1d2749) {
                _0x2a558e = _0x2a558e * 0x3;
            } else {
                _0x2a558e = _0x2a558e * 0x2;
            }
            _0x30342f++;
            _0x1d2749 = !![];
        } else {
            if (!_0x1d2749) {
                _0x2a558e = _0x2a558e * 0x2;
            }
            _0x1d2749 = ![];
        }
    }
    if (_0x30342f < _0x21c88f) {
        if (!_0x1d2749) {
            _0x2a558e = _0x2a558e * 0x2;
        }
    }
    console['log'](_0x2a558e % 0x3b9aca07);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));