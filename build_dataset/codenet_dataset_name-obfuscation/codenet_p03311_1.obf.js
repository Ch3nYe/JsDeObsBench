function Main(_0x2c1ace) {
    _0x2c1ace = _0x2c1ace['split']('\x0a');
    if (_0x2c1ace[_0x2c1ace['length'] - 0x1] === '') {
        _0x2c1ace['pop']();
    }
    const _0x413634 = _0x2c1ace[0x0]['split']('\x20')[0x0] - 0x0;
    var _0x531537 = _0x2c1ace[0x1]['split']('\x20')['map']((_0x9f2992, _0xe85f65) => {
        return _0x9f2992 - _0xe85f65 - 0x1;
    })['sort']((_0x2047dc, _0x42a9b2) => {
        return _0x2047dc - _0x42a9b2;
    });
    console['log'](_0x531537['reduce']((_0x51fc96, _0x4a401e) => {
        return _0x51fc96 + Math['abs'](_0x4a401e - _0x531537[Math['floor'](_0x531537['length'] / 0x2)]);
    }, 0x0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function permutation(_0x295aa8, _0x186959) {
    var _0x25be6d = [[]];
    var _0x4f8abd;
    for (var _0x38aae3 = 0x0; _0x38aae3 < _0x186959; _0x38aae3++) {
        _0x4f8abd = [];
        _0x25be6d['forEach'](_0x400744 => {
            for (var _0x330e4a = 0x1; _0x330e4a <= _0x295aa8; _0x330e4a++) {
                if (!_0x400744['includes'](_0x330e4a)) {
                    _0x4f8abd['push'](_0x400744['concat']([_0x330e4a]));
                }
            }
        });
        _0x25be6d = _0x4f8abd['concat']([]);
    }
    return _0x25be6d;
}