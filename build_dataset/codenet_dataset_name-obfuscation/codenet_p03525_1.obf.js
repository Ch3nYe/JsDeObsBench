console['log']((_0x212def => {
    const [[_0x54aa09], _0x3e5efe] = _0x212def['trim']()['split']('\x0a')['map'](_0x47c32f => _0x47c32f['split']('\x20')['map'](_0x5a9ee0 => _0x5a9ee0 | 0x0));
    if (_0x54aa09 === 0x1)
        return '' + _0x3e5efe[0x0];
    const _0x166d61 = Array(0xd)['fill'](0x0);
    let _0x1bbb0f = 0xc, _0x16e142 = 0x1;
    for (let _0x2b00fd = 0x0; _0x2b00fd < _0x54aa09; _0x2b00fd++) {
        if (++_0x166d61[_0x3e5efe[_0x2b00fd]] > 0x2)
            return '0';
        if (_0x3e5efe[_0x2b00fd] < _0x1bbb0f)
            _0x1bbb0f = _0x3e5efe[_0x2b00fd];
        if (_0x166d61[_0x3e5efe[_0x2b00fd]] === 0x2)
            _0x1bbb0f = Math['min'](_0x1bbb0f, 0x18 - 0x2 * _0x3e5efe[_0x2b00fd]);
    }
    if (_0x166d61[0xc] > 0x1 || _0x166d61[0x0] > 0x0)
        return '0';
    const _0x30fa14 = _0x166d61['reduce']((_0x38880a, _0x40aff4, _0x2c6a47) => _0x38880a | (_0x40aff4 === 0x1 ? 0x0 : 0x1 << _0x2c6a47), 0x1);
    for (let _0x51fb0b = 0x0; _0x51fb0b < 0x1 << 0xd; _0x51fb0b = _0x51fb0b + 0x1 | _0x30fa14) {
        let _0xfffc75 = _0x1bbb0f;
        for (let _0x44927b = 0x1; _0x44927b <= 0xc; _0x44927b++) {
            if (!_0x166d61[_0x44927b])
                continue;
            for (let _0x281015 = _0x44927b + 0x1; _0x281015 <= 0xc; _0x281015++) {
                if (!_0x166d61[_0x281015])
                    continue;
                let _0x416f63 = _0x281015 - _0x44927b;
                if (_0x166d61[_0x44927b] === 0x1 && _0x166d61[_0x281015] === 0x1)
                    _0x416f63 = _0x51fb0b >> _0x44927b & 0x1 ^ _0x51fb0b >> _0x281015 & 0x1 ? 0x18 - _0x44927b - _0x281015 : _0x416f63;
                _0xfffc75 = Math['min'](_0xfffc75, _0x416f63);
            }
        }
        if (_0x16e142 < _0xfffc75)
            _0x16e142 = _0xfffc75;
    }
    return '' + _0x16e142;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));