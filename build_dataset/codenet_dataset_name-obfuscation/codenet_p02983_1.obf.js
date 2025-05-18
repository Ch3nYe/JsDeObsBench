function Main(_0x15441f) {
    _0x15441f = _0x15441f['split']('\x0a');
    inputStr = _0x15441f[0x0]['split']('\x20');
    const _0x4e3534 = Number['parseInt'](inputStr[0x0]);
    const _0x4df664 = Number['parseInt'](inputStr[0x1]);
    var _0x2ad6b5 = 0x7e2;
    if (_0x4e3534 * _0x4df664 > 0x7e3) {
        if (_0x4df664 - _0x4e3534 < 0x7e3) {
            const _0x45bf9a = _0x4e3534 % 0x7e3;
            const _0x5d4c60 = _0x4df664 % 0x7e3;
            for (var _0x51949f = _0x45bf9a; _0x51949f < _0x5d4c60; _0x51949f++) {
                for (var _0x1a8983 = _0x51949f + 0x1; _0x1a8983 < _0x5d4c60 + 0x1; _0x1a8983++) {
                    _0x2ad6b5 = Math['min'](_0x2ad6b5, _0x51949f * _0x1a8983 % 0x7e3);
                    if (_0x2ad6b5 === 0x0) {
                        break;
                    }
                }
            }
            console['log'](_0x2ad6b5);
        } else {
            console['log'](0x0);
        }
    } else {
        console['log'](_0x4e3534 * (_0x4e3534 + 0x1));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));