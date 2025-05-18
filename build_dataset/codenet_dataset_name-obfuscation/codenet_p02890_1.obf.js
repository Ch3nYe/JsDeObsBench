function Main(_0xf740c7) {
    var _0x2b00ed = _0xf740c7['split']('\x0a')[0x0] - 0x0;
    var _0x5abd21 = _0xf740c7['split']('\x0a')[0x1]['split']('\x20')['map'](_0x55fa05 => _0x55fa05 - 0x0);
    var _0x485ed0 = new Set(_0x5abd21);
    var _0x4edc80 = [];
    _0x4edc80['push'](_0x2b00ed);
    for (var _0x4b605b = 0x2; _0x4b605b <= _0x2b00ed; _0x4b605b++) {
        if (_0x485ed0['size'] < _0x4b605b) {
            _0x4edc80['push'](0x0);
        } else {
            _0x4edc80['push'](Math['floor'](_0x485ed0['size'] / _0x4b605b));
        }
    }
    console['log'](_0x4edc80['join']('\x0a')['toString']());
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));