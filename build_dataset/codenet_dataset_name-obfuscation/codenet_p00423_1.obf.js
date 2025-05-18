(function (_0x1b2656) {
    var _0x2f8a16 = _0x1b2656['trim']()['split']('\x0a');
    while (0x1) {
        var _0x24ee4b = _0x2f8a16['shift']();
        if (_0x24ee4b == '0') {
            break;
        }
        var _0x20b497 = Number(_0x24ee4b);
        var _0x4289f7 = 0x0, _0x75a9b5 = 0x0;
        for (var _0x190f41 = 0x0; _0x190f41 < _0x20b497; _0x190f41++) {
            var _0x4552d5 = _0x2f8a16['shift']()['split']('\x20')['map'](Number);
            if (_0x4552d5[0x0] == _0x4552d5[0x1]) {
                _0x4289f7 += _0x4552d5[0x0];
                _0x75a9b5 += _0x4552d5[0x0];
            } else if (_0x4552d5[0x0] > _0x4552d5[0x1]) {
                _0x4289f7 += _0x4552d5[0x0] + _0x4552d5[0x1];
            } else {
                _0x75a9b5 += _0x4552d5[0x0] + _0x4552d5[0x1];
            }
        }
        console['log']([
            _0x4289f7,
            _0x75a9b5
        ]['join']('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));