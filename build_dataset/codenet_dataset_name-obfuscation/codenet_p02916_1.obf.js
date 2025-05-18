function Main(_0x2688ff) {
    _0x2688ff = _0x2688ff['split']('\x0a');
    n = Number(_0x2688ff[0x0]['split']('\x20'));
    a = _0x2688ff[0x1]['split']('\x20')['map'](Number);
    b = _0x2688ff[0x2]['split']('\x20')['map'](Number);
    c = _0x2688ff[0x3]['split']('\x20')['map'](Number);
    var _0x515b14 = 0x0;
    for (var _0x30e318 = 0x0; _0x30e318 < n; _0x30e318++) {
        _0x515b14 += b[a[_0x30e318] - 0x1];
        if (a[_0x30e318] === a[_0x30e318 - 0x1] + 0x1) {
            _0x515b14 += c[a[_0x30e318] - 0x2];
        }
    }
    console['log'](_0x515b14);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));