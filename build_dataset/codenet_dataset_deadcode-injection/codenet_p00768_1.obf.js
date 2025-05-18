function a0_0x4a59(oqQfzk, key) {
    var stringArray = a0_0x1781();
    a0_0x4a59 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a59(oqQfzk, key);
}
var a0_0x2251a6 = a0_0x4a59;
var input = require('fs')['readFileSync'](a0_0x2251a6(0x0), 'utf8');
function a0_0x1781() {
    var _0x1a68f8 = [
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'sort',
        'forEach',
        'push',
        'log',
        'join'
    ];
    a0_0x1781 = function () {
        return _0x1a68f8;
    };
    return a0_0x1781();
}
var arr = input[a0_0x2251a6(0x1)]()['split']('\x0a');
while (!![]) {
    var MTPR = arr[a0_0x2251a6(0x2)]();
    if (MTPR == '0\x200\x200\x200')
        break;
    MTPR = MTPR[a0_0x2251a6(0x3)]('\x20')[a0_0x2251a6(0x4)](Number);
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
        var mtpj = arr[a0_0x2251a6(0x2)]()['split']('\x20')[a0_0x2251a6(0x4)](Number);
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
    team[a0_0x2251a6(0x5)](function (a, b) {
        if (a[0x0] == b[0x0] && a[0x1] == b[0x1])
            return b[0x3] - a[0x3];
        else if (a[0x0] == b[0x0])
            return a[0x1] - b[0x1];
        else
            return b[0x0] - a[0x0];
    });
    var ans = [];
    var same = [
        -0x1,
        -0x1
    ];
    team[a0_0x2251a6(0x6)](function (v, i) {
        var _0x3fab4a = a0_0x4a59;
        if (same[0x0] == v[0x0] && same[0x1] == v[0x1])
            ans[ans['length'] - 0x1] += '=' + (v[0x3] + 0x1);
        else {
            ans[_0x3fab4a(0x7)](v[0x3] + 0x1);
            same = [
                v[0x0],
                v[0x1]
            ];
        }
    });
    console[a0_0x2251a6(0x8)](ans[a0_0x2251a6(0x9)](','));
}