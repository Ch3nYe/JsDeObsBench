function main(_0x12f61f) {
    var _0x4c3a4e = parseInt(_0x12f61f);
    var _0x1eb28f = {};
    for (var _0xefe60c = 0x2; _0xefe60c <= _0x4c3a4e; _0xefe60c++) {
        var _0x3b6e81 = _0xefe60c;
        for (var _0x2c6720 = 0x2; _0x2c6720 * _0x2c6720 <= _0x3b6e81; _0x2c6720++) {
            if (_0x3b6e81 % _0x2c6720 == 0x0) {
                var _0x1750ce = 0x0;
                while (_0x3b6e81 % _0x2c6720 == 0x0) {
                    _0x1750ce++;
                    _0x3b6e81 /= _0x2c6720;
                }
                if (_0x1eb28f[_0x2c6720]) {
                    _0x1eb28f[_0x2c6720] = _0x1eb28f[_0x2c6720] + _0x1750ce;
                } else {
                    _0x1eb28f[_0x2c6720] = _0x1750ce;
                }
            }
        }
        if (_0x3b6e81 != 0x1) {
            if (_0x1eb28f[_0x3b6e81]) {
                _0x1eb28f[_0x3b6e81]++;
            } else {
                _0x1eb28f[_0x3b6e81] = 0x1;
            }
        }
    }
    var _0x1d8215 = 0x1;
    var _0x1be8a4 = 0x3b9aca07;
    for (var _0x818c3e in _0x1eb28f) {
        _0x1d8215 = _0x1d8215 * (_0x1eb28f[_0x818c3e] + 0x1) % _0x1be8a4;
    }
    console['log'](_0x1d8215);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));