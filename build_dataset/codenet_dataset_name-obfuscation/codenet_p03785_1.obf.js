function Main(_0x5cfe15) {
    var _0x5cfe15 = _0x5cfe15['split']('\x0a');
    var _0x45fdea = _0x5cfe15[0x0]['split']('\x20')['map'](_0xea275e => parseInt(_0xea275e, 0xa));
    var _0x3620f2 = _0x5cfe15['slice'](0x1)['map'](_0x49823c => parseInt(_0x49823c, 0xa))['sort']((_0x5a231f, _0x5693e6) => _0x5a231f - _0x5693e6);
    var _0x526e80 = 0x1;
    var _0x5bc6d8 = _0x45fdea[0x1];
    for (var _0x390cb6 = 0x1; _0x390cb6 < _0x45fdea[0x0]; _0x390cb6++) {
        if (_0x3620f2[_0x390cb6 - 0x1] <= _0x3620f2[_0x390cb6] && _0x3620f2[_0x390cb6] <= _0x3620f2[_0x390cb6 - 0x1] + _0x45fdea[0x2]) {
            _0x5bc6d8--;
            if (_0x5bc6d8 === 0x0) {
                _0x526e80++;
                _0x5bc6d8 = _0x45fdea[0x1];
            }
        } else {
            _0x526e80++;
            _0x5bc6d8 = _0x45fdea[0x1];
        }
    }
    console['log'](_0x526e80);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));