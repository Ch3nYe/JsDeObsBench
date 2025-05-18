function HW() {
    var _0x3dd0eb = [];
    for (var _0x588efe = 0x1; _0x588efe < 0x96; _0x588efe++) {
        for (var _0x55fa23 = _0x588efe + 0x1; _0x55fa23 <= 0x96; _0x55fa23++) {
            _0x3dd0eb['push']([
                _0x588efe,
                _0x55fa23,
                _0x588efe * _0x588efe + _0x55fa23 * _0x55fa23
            ]);
        }
    }
    _0x3dd0eb['sort'](function (_0x34fd1d, _0x6560f6) {
        if (_0x34fd1d[0x2] == _0x6560f6[0x2])
            return _0x34fd1d[0x0] - _0x6560f6[0x0];
        else
            return _0x34fd1d[0x2] - _0x6560f6[0x2];
    });
    return _0x3dd0eb;
}
var Rectangles = HW();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var hw = Arr['shift']()['split']('\x20')['map'](Number);
    var h = hw[0x0];
    var w = hw[0x1];
    if (h == 0x0 && w == 0x0)
        break;
    var num = h * h + w * w;
    for (var i = 0x0; i < Rectangles['length']; i++) {
        if (Rectangles[i][0x0] == h && Rectangles[i][0x1] == w)
            break;
    }
    console['log'](Rectangles[i + 0x1][0x0] + '\x20' + Rectangles[i + 0x1][0x1]);
}