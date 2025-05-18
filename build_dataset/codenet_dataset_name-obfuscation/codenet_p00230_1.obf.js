function bomb() {
    var _0x4cbb67 = {};
    var _0x2f9ddc = 'NA';
    var _0x548abc = [
        [
            0x0,
            0x0,
            0x0
        ],
        [
            0x1,
            0x0,
            0x0
        ]
    ];
    while (!![]) {
        if (_0x548abc['length'] == 0x0)
            break;
        var _0xf9d50e = _0x548abc['shift']();
        var _0x162936 = _0xf9d50e[0x0];
        var _0x16eb40 = _0xf9d50e[0x1];
        if (_0x4cbb67['hasOwnProperty'](_0x162936 + ',' + _0x16eb40))
            continue;
        else
            _0x4cbb67[_0x162936 + ',' + _0x16eb40] = !![];
        var _0x27eef9 = _0xf9d50e[0x2];
        var _0x2bc627 = xy[_0x162936][_0x16eb40];
        if (_0x2bc627 == 0x1) {
            while (!![]) {
                _0x16eb40++;
                if (xy[_0x162936][_0x16eb40] != 0x1) {
                    _0x16eb40--;
                    break;
                }
            }
        } else if (_0x2bc627 == 0x2) {
            while (!![]) {
                _0x16eb40--;
                if (xy[_0x162936][_0x16eb40] != 0x2)
                    break;
            }
        }
        if (_0x16eb40 == n - 0x1) {
            _0x2f9ddc = _0x27eef9;
            break;
        }
        for (var _0x530cc6 = 0x0; _0x530cc6 <= 0x2; _0x530cc6++)
            _0x548abc['push']([
                0x1 - _0x162936,
                _0x16eb40 + _0x530cc6,
                _0x27eef9 + 0x1
            ]);
    }
    return _0x2f9ddc;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var xy = [];
    xy[0x0] = arr['shift']()['split']('\x20')['map'](Number);
    xy[0x1] = arr['shift']()['split']('\x20')['map'](Number);
    console['log'](bomb());
}