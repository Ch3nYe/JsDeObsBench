function perm(_0x2026c1, _0x325de8, _0x2193fb, _0x13a584) {
    var _0x19054c, _0x3d2545, _0x44279b = _0x2026c1['length'];
    _0x2193fb = _0x2193fb || [];
    if (_0x325de8 === 0x0) {
        _0x13a584(_0x2193fb);
    } else {
        for (_0x3d2545 = 0x0; _0x3d2545 < _0x44279b; _0x3d2545++) {
            _0x19054c = _0x2026c1['shift']();
            _0x2193fb['push'](_0x19054c);
            perm(_0x2026c1, _0x325de8 - 0x1, _0x2193fb, _0x13a584);
            _0x2193fb['pop']();
            _0x2026c1['push'](_0x19054c);
        }
    }
}
function main() {
    input['forEach'](function (_0x63db2a) {
        var _0x1ae291, _0x48b94d, _0x4be271 = 0x0;
        if (_0x63db2a['trim']() === '')
            return;
        _0x63db2a = _0x63db2a['split']('\x20')['map'](parseFloat);
        _0x1ae291 = _0x63db2a[0x0];
        _0x48b94d = _0x63db2a[0x1];
        perm([
            0x0,
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x6,
            0x7,
            0x8,
            0x9
        ], _0x1ae291, [], function (_0x4e32ef) {
            _0x4be271 += _0x4e32ef['reduce'](function (_0x488dbb, _0x13fbda, _0x41b328) {
                return _0x488dbb + _0x13fbda * (_0x41b328 + 0x1);
            }, 0x0) === _0x48b94d ? 0x1 : 0x0;
        });
        console['log'](_0x4be271);
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x3dbc06) {
    input += _0x3dbc06;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});