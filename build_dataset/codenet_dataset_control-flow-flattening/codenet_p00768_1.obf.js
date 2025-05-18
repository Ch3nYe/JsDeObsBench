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
        var Sqyjej = '2|3|5|0|4|1|6'['split']('|');
        var NUkBOV = 0x0;
        while (!![]) {
            switch (Sqyjej[NUkBOV++]) {
            case '0':
                var p = mtpj[0x2] - 0x1;
                continue;
            case '1':
                if (j == 0x0) {
                    team[t][0x0]++;
                    team[t][0x1] += m + team[t][0x2][p] * 0x14;
                }
                continue;
            case '2':
                var mtpj = arr['shift']()['split']('\x20')['map'](Number);
                continue;
            case '3':
                var m = mtpj[0x0];
                continue;
            case '4':
                var j = mtpj[0x3];
                continue;
            case '5':
                var t = mtpj[0x1] - 0x1;
                continue;
            case '6':
                if (j != 0x0)
                    team[t][0x2][p]++;
                continue;
            }
            break;
        }
    }
    team['sort'](function (a, b) {
        var wcMBWZ = {
            'pCctt': function (x, y) {
                return x == y;
            },
            'lzFVH': function (x, y) {
                return x - y;
            }
        };
        if (wcMBWZ['pCctt'](a[0x0], b[0x0]) && wcMBWZ['pCctt'](a[0x1], b[0x1]))
            return wcMBWZ['lzFVH'](b[0x3], a[0x3]);
        else if (wcMBWZ['pCctt'](a[0x0], b[0x0]))
            return a[0x1] - b[0x1];
        else
            return wcMBWZ['lzFVH'](b[0x0], a[0x0]);
    });
    var ans = [];
    var same = [
        -0x1,
        -0x1
    ];
    team['forEach'](function (v, i) {
        var JzxKFW = {
            'nrvif': function (x, y) {
                return x == y;
            },
            'QLkvf': function (x, y) {
                return x - y;
            },
            'IOyrv': function (x, y) {
                return x + y;
            }
        };
        if (JzxKFW['nrvif'](same[0x0], v[0x0]) && JzxKFW['nrvif'](same[0x1], v[0x1]))
            ans[JzxKFW['QLkvf'](ans['length'], 0x1)] += '=' + JzxKFW['IOyrv'](v[0x3], 0x1);
        else {
            ans['push'](JzxKFW['IOyrv'](v[0x3], 0x1));
            same = [
                v[0x0],
                v[0x1]
            ];
        }
    });
    console['log'](ans['join'](','));
}