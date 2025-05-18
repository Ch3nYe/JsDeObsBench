function Main(_0x192832) {
    _0x192832 = _0x192832['trim']();
    var _0x43937e = parseInt(_0x192832['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    for (var _0x2fdbd7 = 0x1; _0x2fdbd7 <= _0x43937e; _0x2fdbd7++) {
        console['log'](_0x192832['split']('\x0a')[_0x2fdbd7]);
        console['log'](_0x192832['split']('\x0a')[_0x2fdbd7]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));