function a0_0x10fd() {
    var _0x533d1e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'map',
        'split',
        'length',
        'concat',
        'every',
        'log'
    ];
    a0_0x10fd = function () {
        return _0x533d1e;
    };
    return a0_0x10fd();
}
var a0_0x5401f1 = a0_0x466f;
var input = require('fs')[a0_0x5401f1(0x0)](a0_0x5401f1(0x1), 'utf8');
var x = input[a0_0x5401f1(0x2)]()['split']('\x20')[a0_0x5401f1(0x3)](Number);
function a0_0x466f(VpCrho, key) {
    var stringArray = a0_0x10fd();
    a0_0x466f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x466f(VpCrho, key);
}
var cnt = 0x0;
for (var a = 0x1; a <= 0x9; a++) {
    for (var b = 0x1; b <= 0x9; b++) {
        for (var c = 0x1; c <= 0x9; c++) {
            for (var d = 0x1; d <= 0x8; d++) {
                for (var e = 0x1; e <= 0x9; e++) {
                    for (var f = 0x1; f <= 0x9; f++) {
                        var z = (a + c + f + (b + e) * 0xa + d * 0x64 + '')[a0_0x5401f1(0x4)]('')['map'](Number);
                        if (z[a0_0x5401f1(0x5)] != 0x3)
                            continue;
                        z = [
                            a,
                            b,
                            c,
                            d,
                            e,
                            f
                        ][a0_0x5401f1(0x6)](z);
                        var flag = z[a0_0x5401f1(0x7)](function (v, i) {
                            return (x[i] == v || x[i] == -0x1) && z['indexOf'](i + 0x1) >= 0x0;
                        });
                        if (flag)
                            cnt++;
                    }
                }
            }
        }
    }
}
console[a0_0x5401f1(0x8)](cnt);