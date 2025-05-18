(function main() {
    let _0x3b972f = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    let [_0x43a15c, _0x51f302] = _0x3b972f['shift']()['split']('\x20')['map'](Number);
    let _0x4c756c = _0x3b972f['map'](Number);
    const _0x3ab40d = _0x410cdc => {
        let _0xbf0b8c = 0x0, _0x3ba93d = 0x0;
        for (let _0x283358 = 0x0; _0x283358 < _0x51f302; _0x283358++) {
            for (_0x3ba93d = 0x0; _0x3ba93d + _0x4c756c[_0xbf0b8c] <= _0x410cdc;) {
                _0x3ba93d += _0x4c756c[_0xbf0b8c++];
                if (_0xbf0b8c === _0x43a15c)
                    return _0x43a15c;
            }
        }
        return _0xbf0b8c;
    };
    let _0x202dbd, _0x372abd = 0x0, _0x3cc08b = 0x3b9aca00;
    while (_0x3cc08b - _0x372abd > 0x1) {
        _0x202dbd = (_0x3cc08b + _0x372abd) / 0x2;
        if (_0x3ab40d(_0x202dbd) >= _0x43a15c)
            _0x3cc08b = _0x202dbd;
        else
            _0x372abd = _0x202dbd;
    }
    console['log'](Math['floor'](_0x3cc08b));
}());