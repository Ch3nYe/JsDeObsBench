function Main(_0x5f52a2) {
    const _0x379c66 = _0x5f52a2['length'];
    const _0x551e0d = 'a'['charCodeAt']();
    var _0x423f51 = Array(0x1a)['fill'](0x1);
    var _0x2ce290;
    if (_0x379c66 < 0x1a) {
        for (_0x2ce290 = 0x0; _0x2ce290 < _0x379c66; _0x2ce290++) {
            _0x423f51[_0x5f52a2['charCodeAt'](_0x2ce290) - _0x551e0d] = 0x0;
        }
        for (_0x2ce290 = 0x0; _0x2ce290 < 0x1a; _0x2ce290++) {
            if (_0x423f51[_0x2ce290]) {
                _0x5f52a2 += String['fromCharCode'](_0x551e0d + _0x2ce290);
                break;
            }
        }
    } else {
        if (_0x5f52a2 === 'zyxwvutsrqponmlkjihgfedcba') {
            console['log'](-0x1);
            return;
        }
        var _0x399f83 = _0x5f52a2[0x19];
        _0x423f51[_0x5f52a2['charCodeAt'](0x19) - _0x551e0d] = 0x0;
        for (_0x2ce290 = 0x18; _0x2ce290 >= 0x0; _0x2ce290--) {
            if (_0x399f83 > _0x5f52a2[_0x2ce290]) {
                _0x399f83 = _0x5f52a2['charCodeAt'](_0x2ce290) - _0x551e0d;
                _0x5f52a2 = _0x5f52a2['slice'](0x0, _0x2ce290);
                break;
            } else {
                _0x423f51[_0x5f52a2['charCodeAt'](_0x2ce290) - _0x551e0d] = 0x0;
            }
        }
        for (var _0x2e93a5 = _0x399f83 - _0x551e0d; _0x2e93a5 < 0x1a; _0x2e93a5++) {
            if (_0x423f51[_0x2e93a5] === 0x0) {
                _0x5f52a2 += String['fromCharCode'](_0x551e0d + _0x2e93a5);
                break;
            }
        }
    }
    console['log'](_0x5f52a2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());