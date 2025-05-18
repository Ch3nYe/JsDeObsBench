function Main(_0xd9aa8d) {
    const _0x1d6ba1 = _0xd9aa8d[0x0][0x1];
    const _0x3ada8c = _0xd9aa8d[0x1]['map'](Number);
    const _0x3cff73 = _0x3ada8c['reduce']((_0xc8467e, _0x549f9d, _0x1c9516) => {
        var _0x3a971b = 0x0;
        _0x3ada8c['slice'](_0x1c9516)['reduce']((_0x248dde, _0x1648ce, _0x4dc6e0) => {
            const _0x3036f5 = (_0x248dde + _0x1648ce) % _0x1d6ba1;
            if (_0x3036f5 === _0x4dc6e0 + 0x1) {
                _0x3a971b++;
            }
            return _0x3036f5;
        }, 0x0);
        return _0xc8467e + _0x3a971b;
    }, null);
    console['log'](_0x3cff73);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](_0x584dbb => _0x584dbb['split']('\x20')));