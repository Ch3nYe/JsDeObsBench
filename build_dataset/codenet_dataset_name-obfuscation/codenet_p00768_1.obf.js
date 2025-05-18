var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var MTPR = arr['shift']();
    if (MTPR == '0\x200\x200\x200')
        break;
    MTPR = MTPR['split']('\x20')['map'](Number);
    var team = [];
    for (var i = 0x0; i < MTPR[0x1]; i++)
        team['push']([
            0x0,
            0x0,
            [
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0
            ],
            i
        ]);
    for (var i = 0x0; i < MTPR[0x3]; i++) {
        var mtpj = arr['shift']()['split']('\x20')['map'](Number);
        var m = mtpj[0x0];
        var t = mtpj[0x1] - 0x1;
        var p = mtpj[0x2] - 0x1;
        var j = mtpj[0x3];
        if (j == 0x0) {
            team[t][0x0]++;
            team[t][0x1] += m + team[t][0x2][p] * 0x14;
        }
        if (j != 0x0)
            team[t][0x2][p]++;
    }
    team['sort'](function (_0x5055f5, _0x4b19e4) {
        if (_0x5055f5[0x0] == _0x4b19e4[0x0] && _0x5055f5[0x1] == _0x4b19e4[0x1])
            return _0x4b19e4[0x3] - _0x5055f5[0x3];
        else if (_0x5055f5[0x0] == _0x4b19e4[0x0])
            return _0x5055f5[0x1] - _0x4b19e4[0x1];
        else
            return _0x4b19e4[0x0] - _0x5055f5[0x0];
    });
    var ans = [];
    var same = [
        -0x1,
        -0x1
    ];
    team['forEach'](function (_0x134076, _0x40cdcc) {
        if (same[0x0] == _0x134076[0x0] && same[0x1] == _0x134076[0x1])
            ans[ans['length'] - 0x1] += '=' + (_0x134076[0x3] + 0x1);
        else {
            ans['push'](_0x134076[0x3] + 0x1);
            same = [
                _0x134076[0x0],
                _0x134076[0x1]
            ];
        }
    });
    console['log'](ans['join'](','));
}