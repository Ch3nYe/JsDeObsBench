var a0_0x14979c = a0_0x170c;
function a0_0x214a() {
    var _0x1f8475 = [
        '15856995GSaFab',
        '49605pcjdMB',
        'map',
        '1603718HvIdMu',
        'indexOf',
        '630222xLMJkx',
        'split',
        '1REYwWr',
        '136jLhjfO',
        '7952670CbHWmS',
        'trim',
        '1429065YdEFLS',
        '30yKzmoz',
        'readFileSync',
        '265090WwliLm',
        '136azPejk',
        'length',
        'every',
        '/dev/stdin'
    ];
    a0_0x214a = function () {
        return _0x1f8475;
    };
    return a0_0x214a();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x42f4d6 = a0_0x170c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x42f4d6(0x119)) / 0x1 * (parseInt(_0x42f4d6(0x115)) / 0x2) + parseInt(_0x42f4d6(0x113)) / 0x3 * (parseInt(_0x42f4d6(0x121)) / 0x4) + parseInt(_0x42f4d6(0x11e)) / 0x5 * (-parseInt(_0x42f4d6(0x117)) / 0x6) + -parseInt(_0x42f4d6(0x120)) / 0x7 * (-parseInt(_0x42f4d6(0x11a)) / 0x8) + -parseInt(_0x42f4d6(0x11d)) / 0x9 + parseInt(_0x42f4d6(0x11b)) / 0xa + -parseInt(_0x42f4d6(0x112)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x214a, 0x8bc8a));
function a0_0x170c(FdThbK, key) {
    var stringArray = a0_0x214a();
    a0_0x170c = function (index, key) {
        index = index - 0x111;
        var value = stringArray[index];
        return value;
    };
    return a0_0x170c(FdThbK, key);
}
var input = require('fs')[a0_0x14979c(0x11f)](a0_0x14979c(0x111), 'utf8');
var x = input[a0_0x14979c(0x11c)]()[a0_0x14979c(0x118)]('\x20')[a0_0x14979c(0x114)](Number);
var cnt = 0x0;
for (var a = 0x1; a <= 0x9; a++) {
    for (var b = 0x1; b <= 0x9; b++) {
        for (var c = 0x1; c <= 0x9; c++) {
            for (var d = 0x1; d <= 0x8; d++) {
                for (var e = 0x1; e <= 0x9; e++) {
                    for (var f = 0x1; f <= 0x9; f++) {
                        var z = (a + c + f + (b + e) * 0xa + d * 0x64 + '')[a0_0x14979c(0x118)]('')[a0_0x14979c(0x114)](Number);
                        if (z[a0_0x14979c(0x122)] != 0x3)
                            continue;
                        z = [
                            a,
                            b,
                            c,
                            d,
                            e,
                            f
                        ]['concat'](z);
                        var flag = z[a0_0x14979c(0x123)](function (v, i) {
                            var _0x44e934 = a0_0x14979c;
                            return (x[i] == v || x[i] == -0x1) && z[_0x44e934(0x116)](i + 0x1) >= 0x0;
                        });
                        if (flag)
                            cnt++;
                    }
                }
            }
        }
    }
}
console['log'](cnt);