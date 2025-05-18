var a0_0x4e773d = a0_0x448d;
function a0_0x448d(PyhOao, key) {
    var stringArray = a0_0x5642();
    a0_0x448d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x448d(PyhOao, key);
}
function a0_0x5642() {
    var _0x59c31d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push',
        'sort',
        'log'
    ];
    a0_0x5642 = function () {
        return _0x59c31d;
    };
    return a0_0x5642();
}
var input = require('fs')[a0_0x4e773d(0x0)](a0_0x4e773d(0x1), a0_0x4e773d(0x2));
var Arr = input[a0_0x4e773d(0x3)]()[a0_0x4e773d(0x4)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x4e773d(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x4e773d(0x5)]()[a0_0x4e773d(0x4)]('\x20');
        var name = arr[a0_0x4e773d(0x5)]();
        var scoreA = 0x0;
        var scoreB = 0x0;
        for (var j = 0x0; j < n - 0x1; j++) {
            if (arr[j] - 0x0 === 0x0)
                scoreA++;
            if (arr[j] - 0x0 === 0x1)
                scoreB++;
        }
        team[a0_0x4e773d(0x6)]([
            name,
            scoreA * 0x64 + (0xa - scoreB) + (0xa - j) * 0.01
        ]);
    }
    team[a0_0x4e773d(0x7)](function (a, b) {
        return b[0x1] - a[0x1];
    });
    team['forEach'](function (v) {
        var _0x53aeab = a0_0x448d;
        console[_0x53aeab(0x8)](v[0x0]);
    });
}