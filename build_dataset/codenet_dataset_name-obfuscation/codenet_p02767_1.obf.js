function Main(_0x1f17d6) {
    _0x1f17d6 = _0x1f17d6['split']('\x0a');
    var _0x2fb285 = _0x1f17d6[0x1]['split']('\x20');
    function _0x49b128(_0x4997b8) {
        var _0x44a00e = 0x0;
        for (var _0x333bea of _0x4997b8) {
            _0x44a00e += Number(_0x333bea);
        }
        return _0x44a00e / _0x4997b8['length'];
    }
    var _0x56f562 = Math['round'](_0x49b128(_0x2fb285));
    var _0x2fd519 = 0x0;
    for (var _0x36d023 of _0x2fb285) {
        _0x2fd519 += Math['pow'](_0x56f562 - _0x36d023, 0x2);
    }
    console['log'](_0x2fd519);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));