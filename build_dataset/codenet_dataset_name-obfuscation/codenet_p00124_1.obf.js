var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x0;
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    if (I != 0x0)
        console['log']('');
    I++;
    var rank = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var score = 0x3 * (arr[0x1] - 0x0) + (arr[0x3] - 0x0) + (0xa - i) * 0.01;
        rank['push']([
            arr[0x0],
            score
        ]);
    }
    rank['sort'](function (_0x48f09a, _0x51bdab) {
        _0x48f09a = _0x48f09a[0x1];
        _0x51bdab = _0x51bdab[0x1];
        return _0x51bdab - _0x48f09a;
    });
    rank['forEach'](function (_0x498839) {
        console['log'](_0x498839[0x0] + ',' + Math['floor'](_0x498839[0x1]));
    });
}