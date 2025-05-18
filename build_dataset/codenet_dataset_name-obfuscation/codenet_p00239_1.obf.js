var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        var ipqr = Arr['shift']()['split']('\x20')['map'](Number);
        arr['push'](ipqr);
    }
    var PQRC = Arr['shift']()['split']('\x20')['map'](Number);
    var result = [];
    arr['forEach'](function (_0x17814a) {
        var _0x5d7ffb = 0x0;
        if (PQRC[0x0] < _0x17814a[0x1])
            _0x5d7ffb++;
        if (PQRC[0x1] < _0x17814a[0x2])
            _0x5d7ffb++;
        if (PQRC[0x2] < _0x17814a[0x3])
            _0x5d7ffb++;
        if (PQRC[0x3] < 0x4 * (_0x17814a[0x1] + _0x17814a[0x3]) + 0x9 * _0x17814a[0x2])
            _0x5d7ffb++;
        if (_0x5d7ffb == 0x0)
            result['push'](_0x17814a[0x0]);
    });
    console['log'](result['length'] == 0x0 ? 'NA' : result['join']('\x0a'));
}