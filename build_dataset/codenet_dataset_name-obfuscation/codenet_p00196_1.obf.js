var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var name = arr['shift']();
        var scoreA = 0x0;
        var scoreB = 0x0;
        for (var j = 0x0; j < n - 0x1; j++) {
            if (arr[j] - 0x0 === 0x0)
                scoreA++;
            if (arr[j] - 0x0 === 0x1)
                scoreB++;
        }
        team['push']([
            name,
            scoreA * 0x64 + (0xa - scoreB) + (0xa - j) * 0.01
        ]);
    }
    team['sort'](function (_0x577d9e, _0xe070e2) {
        return _0xe070e2[0x1] - _0x577d9e[0x1];
    });
    team['forEach'](function (_0x18bfd0) {
        console['log'](_0x18bfd0[0x0]);
    });
}