function Main(_0x3636d1) {
    var _0x561ea9 = _0x3636d1['split']('');
    var _0x2e4b15 = _0x561ea9['length'];
    var _0x3345ec = '>';
    var _0x207afa = 0x1;
    var _0x4db2af = [];
    var _0x1b6a8e = 0x0;
    var _0x1ff11e = 0x0;
    var _0x21dc7c = 0x0;
    for (var _0x40d613 = 0x0; _0x40d613 < _0x2e4b15; _0x40d613++) {
        if (_0x561ea9[_0x40d613] == _0x3345ec) {
            if (_0x3345ec == '>') {
                _0x1b6a8e++;
            } else {
                _0x1ff11e++;
            }
            _0x207afa = 0x0;
        } else {
            if (_0x3345ec == '<') {
                _0x4db2af['push']({
                    'L': _0x1b6a8e,
                    'R': _0x1ff11e
                });
                _0x3345ec = '>';
                _0x1b6a8e = 0x0;
                _0x1ff11e = 0x0;
                _0x1b6a8e++;
                _0x207afa = 0x1;
            } else {
                _0x3345ec = '<';
                _0x1ff11e++;
                _0x207afa = 0x0;
            }
        }
    }
    if (_0x207afa == 0x0) {
        _0x4db2af['push']({
            'L': _0x1b6a8e,
            'R': _0x1ff11e
        });
    }
    for (var _0x40d613 = 0x1; _0x40d613 < _0x4db2af['length']; _0x40d613++) {
        if (_0x4db2af[_0x40d613 - 0x1]['R'] < _0x4db2af[_0x40d613]['L']) {
            _0x4db2af[_0x40d613 - 0x1]['R']--;
        } else {
            _0x4db2af[_0x40d613]['L']--;
        }
    }
    for (var _0x40d613 = 0x0; _0x40d613 < _0x4db2af['length']; _0x40d613++) {
        _0x21dc7c += _0x4db2af[_0x40d613]['L'] * (_0x4db2af[_0x40d613]['L'] + 0x1) / 0x2;
        _0x21dc7c += _0x4db2af[_0x40d613]['R'] * (_0x4db2af[_0x40d613]['R'] + 0x1) / 0x2;
    }
    console['log'](_0x21dc7c);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));