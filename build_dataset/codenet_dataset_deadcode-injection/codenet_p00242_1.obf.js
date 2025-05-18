var a0_0x2d9391 = a0_0x13d8;
function a0_0x13d8(KJyWQM, key) {
    var stringArray = a0_0x342d();
    a0_0x13d8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13d8(KJyWQM, key);
}
var input = require('fs')[a0_0x2d9391(0x0)](a0_0x2d9391(0x1), a0_0x2d9391(0x2));
var Arr = input[a0_0x2d9391(0x3)](/\n$/, '')[a0_0x2d9391(0x4)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x2d9391(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var str = '';
    for (var i = 0x0; i < n; i++)
        str += Arr[a0_0x2d9391(0x5)]() + '\x20';
    var arr = str[a0_0x2d9391(0x6)]()[a0_0x2d9391(0x4)]('\x20');
    var s = Arr['shift']();
    var f = arr[a0_0x2d9391(0x7)](function (v) {
        return v[0x0] == s;
    });
    f[a0_0x2d9391(0x8)]();
    var F = [];
    var memo = '';
    for (var i = 0x0; i < f['length']; i++) {
        if (memo == f[i]) {
            F[F['length'] - 0x1] = [
                f[i],
                F[F['length'] - 0x1][0x1] + 0x1
            ];
        } else {
            F['push']([
                f[i],
                0x1
            ]);
            memo = f[i];
        }
    }
    F['sort'](function (a, b) {
        if (a[0x1] == b[0x1])
            return a[0x0] > b[0x0];
        else
            return b[0x1] - a[0x1];
    });
    var ans = [];
    for (var i = 0x0; i < 0x5; i++) {
        if (F[a0_0x2d9391(0x9)] > i)
            ans[a0_0x2d9391(0xa)](F[i][0x0]);
    }
    console[a0_0x2d9391(0xb)](ans[a0_0x2d9391(0x9)] > 0x0 ? ans[a0_0x2d9391(0xc)]('\x20') : 'NA');
}
function a0_0x342d() {
    var _0x59b99e = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift',
        'trim',
        'filter',
        'sort',
        'length',
        'push',
        'log',
        'join'
    ];
    a0_0x342d = function () {
        return _0x59b99e;
    };
    return a0_0x342d();
}