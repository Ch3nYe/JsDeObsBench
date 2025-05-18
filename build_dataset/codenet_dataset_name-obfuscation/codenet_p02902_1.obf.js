function Main(_0x472ebc) {
    _0x472ebc = _0x472ebc['split']('\x0a');
    if (_0x472ebc[_0x472ebc['length'] - 0x1] === '') {
        _0x472ebc['pop']();
    }
    const _0x546998 = _0x472ebc[0x0]['split']('\x20')[0x0] - 0x0;
    const _0x563c45 = _0x472ebc[0x0]['split']('\x20')[0x1] - 0x0;
    var _0xd21c22 = [];
    for (var _0x522b23 = 0x0; _0x522b23 <= _0x546998; _0x522b23++) {
        _0xd21c22['push']([]);
    }
    for (var _0x522b23 = 0x1; _0x522b23 < _0x472ebc['length']; _0x522b23++) {
        _0xd21c22[_0x472ebc[_0x522b23]['split']('\x20')[0x0] - 0x0]['push'](_0x472ebc[_0x522b23]['split']('\x20')[0x1] - 0x0);
    }
    var _0x5287de = [];
    for (var _0x522b23 = 0x1; _0x522b23 <= _0x546998; _0x522b23++) {
        _0x5287de['push']([_0x522b23]);
    }
    var _0x3c2e3f;
    var _0x407e1c;
    while (_0x5287de['length'] > 0x0) {
        _0x407e1c = '';
        _0x3c2e3f = [];
        _0x5287de['forEach'](_0x193cc2 => {
            _0xd21c22[_0x193cc2[_0x193cc2['length'] - 0x1]]['forEach'](_0x17f24a => {
                _0x3c2e3f['push'](_0x193cc2['concat']([_0x17f24a]));
            });
        });
        _0x5287de = _0x3c2e3f['slice']();
        _0x5287de['forEach'](_0x3923e8 => {
            if (_0x3923e8[_0x3923e8['length'] - 0x1] === _0x3923e8[0x0]) {
                _0x3c2e3f = _0x3923e8['slice']();
                _0x3c2e3f['shift']();
                _0x407e1c = _0x3c2e3f['length'] + '\x0a' + _0x3c2e3f['join']('\x0a');
            }
        });
        if (_0x407e1c !== '') {
            console['log'](_0x407e1c);
            return;
        }
    }
    console['log'](-0x1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));