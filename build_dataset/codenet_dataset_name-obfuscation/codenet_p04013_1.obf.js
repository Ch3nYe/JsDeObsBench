function Main(_0x3a196a) {
    _0x3a196a = _0x3a196a['split']('\x0a');
    tmp1 = _0x3a196a[0x0]['split']('\x20');
    var _0x51f6d6 = parseInt(tmp1[0x0]);
    var _0x5043bc = parseInt(tmp1[0x1]);
    tmp = _0x3a196a[0x1]['split']('\x20');
    x = new Array(_0x51f6d6);
    var _0x2f5618 = 0x0;
    for (i = 0x0; i < tmp['length']; i++) {
        x[i] = parseInt(tmp[i]);
    }
    var _0x1e6801 = 0x0;
    for (i = 0x0; i < _0x51f6d6; i++) {
        _0x2f5618 = _0x2f5618 + x[i];
    }
    var _0x540b10 = new Array(_0x2f5618 + 0x1);
    for (var _0x30b261 = 0x0; _0x30b261 < _0x2f5618 + 0x1; _0x30b261++) {
        _0x540b10[_0x30b261] = new Array(_0x51f6d6 + 0x1)['fill'](0x0);
    }
    _0x540b10[0x0][0x0] = 0x1;
    for (j = 0x0; j < _0x51f6d6; j++) {
        for (i = _0x2f5618; i >= 0x0; i--) {
            for (k = 0x0; k < _0x51f6d6 + 0x1; k++) {
                if (_0x540b10[i][k] >= 0x1) {
                    _0x540b10[i + x[j]][k + 0x1] = _0x540b10[i + x[j]][k + 0x1] + _0x540b10[i][k];
                }
            }
        }
    }
    for (i = 0x1; i <= _0x51f6d6 && i * _0x5043bc <= _0x2f5618; i++) {
        _0x1e6801 = _0x1e6801 + _0x540b10[i * _0x5043bc][i];
    }
    console['log']('%s', _0x1e6801);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));