function median(_0x26a67f) {
    return _0x26a67f['sort']()[Math['floor'](_0x26a67f['length'] / 0x2)];
}
function Main(_0x1f0365) {
    _0x1f0365 = _0x1f0365['split']('\x0a');
    N = parseInt(_0x1f0365[0x0]);
    a = _0x1f0365[0x1]['split']('\x20');
    m = [];
    for (var _0x29b666 = 0x0; _0x29b666 < N; _0x29b666++) {
        for (var _0x1cf704 = _0x29b666 + 0x1; _0x1cf704 < N + 0x1; _0x1cf704++) {
            m['push'](median(a['slice'](_0x29b666, _0x1cf704)));
        }
    }
    console['log'](median(m));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));