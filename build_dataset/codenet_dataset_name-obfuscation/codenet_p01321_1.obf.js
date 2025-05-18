var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var S = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20')['map'](Number);
        var sum = arr['reduce'](function (_0x3033c9, _0x2adf05) {
            return _0x3033c9 + _0x2adf05;
        });
        S['push'](sum);
    }
    S['sort'](function (_0x2c1ab4, _0xdf942d) {
        return _0xdf942d - _0x2c1ab4;
    });
    console['log'](S[0x0] + '\x20' + S[S['length'] - 0x1]);
}