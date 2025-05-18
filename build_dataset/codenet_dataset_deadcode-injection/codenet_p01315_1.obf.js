var a0_0x4d6ef9 = a0_0x170d;
function a0_0x15c4() {
    var _0xf88b9b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'unshift',
        'push',
        'sort',
        'toString',
        'forEach',
        'log'
    ];
    a0_0x15c4 = function () {
        return _0xf88b9b;
    };
    return a0_0x15c4();
}
var input = require('fs')[a0_0x4d6ef9(0x0)](a0_0x4d6ef9(0x1), a0_0x4d6ef9(0x2));
var Arr = input[a0_0x4d6ef9(0x3)]()[a0_0x4d6ef9(0x4)]('\x0a');
function a0_0x170d(sZGTLw, key) {
    var stringArray = a0_0x15c4();
    a0_0x170d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x170d(sZGTLw, key);
}
while (!![]) {
    var n = Arr[a0_0x4d6ef9(0x5)]() - 0x0;
    if (n === 0x0)
        break;
    var ans = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x4d6ef9(0x5)]()[a0_0x4d6ef9(0x4)]('\x20');
        var name = arr[a0_0x4d6ef9(0x5)]();
        arr = arr[a0_0x4d6ef9(0x6)](Number);
        arr[a0_0x4d6ef9(0x7)](name);
        (function (L, P, A, B, C, D, E, F, S, M) {
            var _0x176991 = a0_0x170d;
            var time = A + B + C + (D + E) * M;
            var money = F * S * M - P;
            ans[_0x176991(0x8)]([
                L,
                money / time
            ]);
        }['apply'](null, arr));
    }
    ans[a0_0x4d6ef9(0x9)](function (a, b) {
        var _0x14392b = a0_0x170d;
        if (a[0x1] == b[0x1])
            return a[0x0][_0x14392b(0xa)]() > b[0x0][_0x14392b(0xa)]() ? 0x1 : -0x1;
        else
            return b[0x1] - a[0x1];
    });
    ans[a0_0x4d6ef9(0xb)](function (v) {
        var _0xd447f4 = a0_0x170d;
        console[_0xd447f4(0xc)](v[0x0]);
    });
    console[a0_0x4d6ef9(0xc)]('#');
}