var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20')['map'](Number);
        var a = arr[0x1] * 0x3c + arr[0x2];
        var b = arr[0x3] * 0x3c + arr[0x4];
        var c = arr[0x5] * 0x3c + arr[0x6];
        var d = arr[0x7] * 0x3c + arr[0x8];
        team['push']([
            arr[0x0],
            a + b + c + d
        ]);
    }
    team['sort'](function (_0x3f9056, _0x8aa7f8) {
        _0x3f9056 = _0x3f9056[0x1];
        _0x8aa7f8 = _0x8aa7f8[0x1];
        return _0x3f9056 - _0x8aa7f8;
    });
    console['log'](team[0x0][0x0]);
    console['log'](team[0x1][0x0]);
    console['log'](team[team['length'] - 0x2][0x0]);
}