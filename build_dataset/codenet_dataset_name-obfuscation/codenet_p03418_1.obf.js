function Main(_0x40f8ae) {
    var _0x5e1eb8 = _0x40f8ae['split']('\x0a');
    var _0x29841f = _0x5e1eb8[0x0]['split']('\x20');
    var _0x39337a = Number(_0x29841f[0x0]);
    var _0x13d9b1 = Number(_0x29841f[0x1]);
    var _0x40671f = 0x0;
    for (var _0x2d7fda = _0x13d9b1 || 0x1; _0x2d7fda <= _0x39337a; _0x2d7fda++) {
        for (var _0x461834 = _0x13d9b1 || 0x1; _0x461834 <= _0x39337a; _0x461834++) {
            if (_0x2d7fda < _0x461834) {
                _0x40671f++;
            } else {
                if (_0x2d7fda % _0x461834 >= _0x13d9b1)
                    _0x40671f++;
            }
        }
    }
    console['log'](_0x40671f);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));