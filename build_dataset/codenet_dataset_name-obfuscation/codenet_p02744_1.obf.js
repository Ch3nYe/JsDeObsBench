function Main(_0x554a0e) {
    var _0x43a609 = _0x554a0e[0x0] - 0x0;
    var _0xe512a4 = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k'
    ];
    var _0x4b066f = {
        0x0: [],
        0x1: ['a']
    };
    for (var _0xb5ab12 = 0x2; _0xb5ab12 <= _0x43a609; _0xb5ab12++) {
        _0x4b066f[_0xb5ab12] = [];
        var _0x8cf959 = _0x4b066f[_0xb5ab12 - 0x1];
        var _0x5781d6 = _0x4b066f[_0xb5ab12];
        _0x8cf959['forEach'](_0x36c72b => {
            var _0x4f3013 = 'a';
            _0x36c72b['split']('')['forEach'](_0x4d9174 => {
                _0x4f3013 = _0x4f3013 < _0x4d9174 ? _0x4d9174 : _0x4f3013;
            });
            var _0x6b855d = ![];
            for (var _0xd8cfb5 = 0x0; _0xd8cfb5 < _0xe512a4['length'] - 0x1; _0xd8cfb5++) {
                _0x5781d6['push'](_0x36c72b + _0xe512a4[_0xd8cfb5]);
                if (_0x6b855d)
                    break;
                if (_0x4f3013 == _0xe512a4[_0xd8cfb5])
                    _0x6b855d = !![];
            }
        });
    }
    console['log'](_0x4b066f[_0x43a609]['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));