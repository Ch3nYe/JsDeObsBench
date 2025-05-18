(function (_0x5f5a4a) {
    var _0x3933f8 = _0x5f5a4a['replace'](/\n$/, '')['split']('\x0a');
    var _0x38f9d3 = Number(_0x3933f8['shift']());
    for (var _0x36690d = 0x0; _0x36690d < _0x38f9d3; _0x36690d++) {
        console['log'](conv(_0x3933f8['shift']()));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function conv(_0x5b6f4b) {
    a = _0x5b6f4b['split']('\x20');
    for (var _0x5db6ec = 0x0; _0x5db6ec < a['length']; _0x5db6ec++) {
        var _0x3989c3 = check(a[_0x5db6ec]);
        if (_0x3989c3) {
            return conv_(_0x5b6f4b, _0x3989c3);
        }
    }
    return _0x5b6f4b;
}
function conv_(_0x524386, _0x42606d) {
    var _0x2dd031 = _0x42606d[0x0];
    var _0x4ea9a7 = _0x42606d[0x1];
    var _0x524386 = _0x524386['split']('')['map'](function (_0x184ea5) {
        if (_0x184ea5 === '\x20') {
            return _0x184ea5;
        }
        return String['fromCharCode']((_0x2dd031 * _0x184ea5['charCodeAt'](0x0) + _0x4ea9a7) % 0x1a + 'a'['charCodeAt'](0x0));
    })['join']('');
    return _0x524386;
}
function check(_0x508612) {
    if (_0x508612['length'] !== 0x4) {
        return ![];
    }
    for (var _0xd60360 = 0x0; _0xd60360 < 0x1a; _0xd60360++) {
        for (var _0x25a156 = 0x0; _0x25a156 < 0x1a; _0x25a156++) {
            var _0x21eff = conv_(_0x508612, [
                _0xd60360,
                _0x25a156
            ]);
            if (_0x21eff === 'this' || _0x21eff === 'that') {
                return [
                    _0xd60360,
                    _0x25a156
                ];
            }
        }
    }
    return ![];
}