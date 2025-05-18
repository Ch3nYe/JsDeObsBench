var a0_0x2a93b2 = a0_0x5769;
(function (stringArrayFunction, comparisonValue) {
    var _0x10281c = a0_0x5769;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10281c(0xf4)) / 0x1 + parseInt(_0x10281c(0xf7)) / 0x2 * (-parseInt(_0x10281c(0xeb)) / 0x3) + -parseInt(_0x10281c(0xf6)) / 0x4 + parseInt(_0x10281c(0xec)) / 0x5 * (-parseInt(_0x10281c(0xfb)) / 0x6) + parseInt(_0x10281c(0xf3)) / 0x7 + -parseInt(_0x10281c(0xf1)) / 0x8 + parseInt(_0x10281c(0xee)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58a8, 0x9184a));
input = require('fs')[a0_0x2a93b2(0xf2)](a0_0x2a93b2(0xfa), 'utf8');
function a0_0x5769(SuDhad, key) {
    var stringArray = a0_0x58a8();
    a0_0x5769 = function (index, key) {
        index = index - 0xea;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5769(SuDhad, key);
}
lines = input[a0_0x2a93b2(0xea)]('\x0a');
N = lines[a0_0x2a93b2(0xf8)]() * 0x1;
function a0_0x58a8() {
    var _0x155fc6 = [
        'readFileSync',
        '4807117XWVufF',
        '458988ztWTbr',
        'push',
        '3207648DxpuBz',
        '448940XmmDtr',
        'shift',
        'join',
        '/dev/stdin',
        '4184088EvlfiH',
        'split',
        '3unamNd',
        '5vPvitk',
        'splice',
        '25704351WUsxsM',
        'log',
        'reverse',
        '6112080NwQwhr'
    ];
    a0_0x58a8 = function () {
        return _0x155fc6;
    };
    return a0_0x58a8();
}
b = lines[a0_0x2a93b2(0xf8)]()[a0_0x2a93b2(0xea)]('\x20');
a = [];
for (i = N; i > 0x0; i--) {
    found = ![];
    for (j = i; j > 0x0; j--) {
        if (b[j - 0x1] == j) {
            a[a0_0x2a93b2(0xf5)](b[a0_0x2a93b2(0xed)](j - 0x1, 0x1));
            found = !![];
            break;
        }
    }
    if (!found) {
        a = [-0x1];
        break;
    }
}
console[a0_0x2a93b2(0xef)](a[a0_0x2a93b2(0xf0)]()[a0_0x2a93b2(0xf9)]('\x0a'));