var a0_0x4fe819 = a0_0x4aa0;
(function (stringArrayFunction, comparisonValue) {
    var _0x1ac0da = a0_0x4aa0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1ac0da(0x117)) / 0x1 * (parseInt(_0x1ac0da(0x110)) / 0x2) + parseInt(_0x1ac0da(0x112)) / 0x3 * (-parseInt(_0x1ac0da(0x10a)) / 0x4) + -parseInt(_0x1ac0da(0x11b)) / 0x5 + parseInt(_0x1ac0da(0x11c)) / 0x6 * (parseInt(_0x1ac0da(0x111)) / 0x7) + -parseInt(_0x1ac0da(0x10c)) / 0x8 + parseInt(_0x1ac0da(0x116)) / 0x9 + -parseInt(_0x1ac0da(0x115)) / 0xa * (-parseInt(_0x1ac0da(0x10e)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21ef, 0x322e5));
function a0_0x21ef() {
    var _0x3cd9f8 = [
        '10XqYTpj',
        '1178937ebUdNO',
        '37ZmHcIu',
        'log',
        'split',
        'push',
        '922920IOrFWu',
        '3450HhEutL',
        '260376gZrwxA',
        '/dev/stdin',
        '2874456wBoTVD',
        'sort',
        '11014069SvbmHh',
        'join',
        '17542oqUspP',
        '875FZiQCe',
        '6cbfTxi',
        'utf8',
        'readFileSync'
    ];
    a0_0x21ef = function () {
        return _0x3cd9f8;
    };
    return a0_0x21ef();
}
var input = require('fs')[a0_0x4fe819(0x114)](a0_0x4fe819(0x10b), a0_0x4fe819(0x113));
var arr = input['trim']()[a0_0x4fe819(0x119)]('\x0a');
function a0_0x4aa0(QlvyyK, key) {
    var stringArray = a0_0x21ef();
    a0_0x4aa0 = function (index, key) {
        index = index - 0x10a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4aa0(QlvyyK, key);
}
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[a0_0x4fe819(0x11a)](arr['shift']()[a0_0x4fe819(0x119)]('\x20')['map'](Number));
    ary[a0_0x4fe819(0x10d)](function (a, b) {
        if (a[0x2] == b[0x2] && a[0x3] == b[0x3])
            return a[0x0] - b[0x0];
        else if (a[0x2] == b[0x2])
            return a[0x3] - b[0x3];
        else
            return b[0x2] - a[0x2];
    });
    var ans = [];
    var U = [];
    for (var i = 0x0; i <= 0x3e8; i++)
        U[i] = 0x0;
    ary['forEach'](function (v, i) {
        var _0x21d6b8 = a0_0x4fe819;
        var id = v[0x0];
        var u = v[0x1];
        if (i < 0xa) {
            if (U[u] < 0x3) {
                ans[_0x21d6b8(0x11a)](id);
                U[u]++;
            }
        } else if (i < 0x14) {
            if (U[u] < 0x2) {
                ans[_0x21d6b8(0x11a)](id);
                U[u]++;
            }
        } else if (i < 0x1a) {
            if (U[u] == 0x0) {
                ans[_0x21d6b8(0x11a)](id);
                U[u]++;
            }
        }
    });
    console[a0_0x4fe819(0x118)](ans[a0_0x4fe819(0x10f)]('\x0a'));
}