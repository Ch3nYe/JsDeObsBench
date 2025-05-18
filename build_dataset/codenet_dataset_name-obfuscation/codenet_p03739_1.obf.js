function Main(_0x1d86c1) {
    var _0x1d86c1 = _0x1d86c1['split']('\x0a');
    var _0x4c236f = parseInt(_0x1d86c1[0x0], 0xa);
    var _0x5c72e9 = _0x1d86c1[0x1]['split']('\x20')['map'](_0x33fa90 => parseInt(_0x33fa90, 0xa));
    var _0x10035f = 0x0, _0x1597ac = 0x0, _0x561f77 = [];
    for (var _0x18e6ff = 0x0; _0x18e6ff < _0x4c236f; _0x18e6ff++) {
        _0x10035f += _0x5c72e9[_0x18e6ff];
        if (_0x18e6ff === 0x0) {
            if (_0x10035f === 0x0) {
                if (_0x5c72e9[_0x18e6ff + 0x1] >= 0x0) {
                    _0x10035f -= _0x5c72e9[_0x18e6ff + 0x1] - 0x1;
                    if (_0x10035f === 0x0)
                        _0x10035f--;
                    _0x1597ac += Math['abs'](_0x10035f);
                } else {
                    _0x10035f += Math['abs'](_0x5c72e9[_0x18e6ff + 0x1]) - 0x1;
                    if (_0x10035f === 0x0)
                        _0x10035f++;
                    _0x1597ac += _0x10035f;
                }
            }
        } else {
            if (_0x561f77[_0x18e6ff - 0x1] > 0x0) {
                if (_0x10035f >= 0x0) {
                    _0x1597ac += _0x10035f + 0x1;
                    _0x10035f -= _0x10035f + 0x1;
                }
            } else {
                if (_0x10035f <= 0x0) {
                    _0x1597ac += Math['abs'](_0x10035f) + 0x1;
                    _0x10035f += Math['abs'](_0x10035f) + 0x1;
                }
            }
        }
        _0x561f77['push'](_0x10035f);
    }
    console['log'](_0x1597ac);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));