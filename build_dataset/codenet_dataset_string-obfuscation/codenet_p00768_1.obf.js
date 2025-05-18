var a0_0x21e308 = a0_0x29af;
(function (stringArrayFunction, comparisonValue) {
    var _0x29ad3d = a0_0x29af;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x29ad3d(0xf0)) / 0x1 * (parseInt(_0x29ad3d(0xe8)) / 0x2) + -parseInt(_0x29ad3d(0xe5)) / 0x3 + -parseInt(_0x29ad3d(0xec)) / 0x4 + -parseInt(_0x29ad3d(0xe2)) / 0x5 * (parseInt(_0x29ad3d(0xeb)) / 0x6) + -parseInt(_0x29ad3d(0xf2)) / 0x7 + -parseInt(_0x29ad3d(0xf1)) / 0x8 + parseInt(_0x29ad3d(0xed)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42fe, 0x3371c));
function a0_0x42fe() {
    var _0x349ab7 = [
        '2125904ccvYlL',
        '251937vBmMED',
        'log',
        '422900DAwdcm',
        '/dev/stdin',
        'map',
        '241881ZPJSXv',
        'shift',
        'split',
        '2KoVepV',
        'trim',
        'utf8',
        '12QKNbcW',
        '214316kDbPiL',
        '8611137uaPqdm',
        'push',
        'readFileSync',
        '140982YheKzH'
    ];
    a0_0x42fe = function () {
        return _0x349ab7;
    };
    return a0_0x42fe();
}
var input = require('fs')[a0_0x21e308(0xef)](a0_0x21e308(0xe3), a0_0x21e308(0xea));
function a0_0x29af(MpPyMi, key) {
    var stringArray = a0_0x42fe();
    a0_0x29af = function (index, key) {
        index = index - 0xe2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x29af(MpPyMi, key);
}
var arr = input[a0_0x21e308(0xe9)]()[a0_0x21e308(0xe7)]('\x0a');
while (!![]) {
    var MTPR = arr[a0_0x21e308(0xe6)]();
    if (MTPR == '0\x200\x200\x200')
        break;
    MTPR = MTPR[a0_0x21e308(0xe7)]('\x20')['map'](Number);
    var team = [];
    for (var i = 0x0; i < MTPR[0x1]; i++)
        team[a0_0x21e308(0xee)]([
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
        var mtpj = arr['shift']()[a0_0x21e308(0xe7)]('\x20')[a0_0x21e308(0xe4)](Number);
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
    team['sort'](function (a, b) {
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
    team['forEach'](function (v, i) {
        var _0xb58f6d = a0_0x21e308;
        if (same[0x0] == v[0x0] && same[0x1] == v[0x1])
            ans[ans['length'] - 0x1] += '=' + (v[0x3] + 0x1);
        else {
            ans[_0xb58f6d(0xee)](v[0x3] + 0x1);
            same = [
                v[0x0],
                v[0x1]
            ];
        }
    });
    console[a0_0x21e308(0xf3)](ans['join'](','));
}