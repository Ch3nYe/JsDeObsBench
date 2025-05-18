function Main(_0x5318b3) {
    _0x5318b3 = _0x5318b3['split']('\x0a');
    for (i = 0x0; i < _0x5318b3['length']; i = i + 0x2) {
        var _0x5ad52b = parseInt(_0x5318b3[i]);
        var _0x56935f = _0x5318b3[i + 0x1]['split']('');
        var _0x19ac26 = _0x56935f['map'](Number);
        for (j = _0x5ad52b; j > 0x1; j--) {
            for (k = 0x0; k < j; k++) {
                var _0x50d1b3 = Math['abs'](_0x19ac26[0x0] - _0x19ac26[0x1]);
                _0x19ac26['push'](_0x50d1b3);
                _0x19ac26['shift']();
            }
            _0x19ac26['pop']();
        }
        console['log'](_0x19ac26[0x0]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));