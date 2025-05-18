var a0_0x9e5d3d = a0_0x2c2f;
function a0_0x2c2f(ZfTUsB, key) {
    var stringArray = a0_0x42b1();
    a0_0x2c2f = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c2f(ZfTUsB, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x225a36 = a0_0x2c2f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x225a36(0xbc)) / 0x1 * (-parseInt(_0x225a36(0xb4)) / 0x2) + parseInt(_0x225a36(0xb5)) / 0x3 * (-parseInt(_0x225a36(0xae)) / 0x4) + parseInt(_0x225a36(0xbd)) / 0x5 * (-parseInt(_0x225a36(0xb7)) / 0x6) + parseInt(_0x225a36(0xb1)) / 0x7 * (-parseInt(_0x225a36(0xc1)) / 0x8) + -parseInt(_0x225a36(0xba)) / 0x9 * (-parseInt(_0x225a36(0xaf)) / 0xa) + parseInt(_0x225a36(0xbe)) / 0xb + parseInt(_0x225a36(0xb8)) / 0xc * (-parseInt(_0x225a36(0xb2)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42b1, 0x9678f));
inp = require('fs')[a0_0x9e5d3d(0xb0)]('/dev/stdin', 'utf8')[a0_0x9e5d3d(0xb3)]()[a0_0x9e5d3d(0xc0)]('\x0a');
l = inp[a0_0x9e5d3d(0xbf)]()[a0_0x9e5d3d(0xc0)]('\x20');
a = l[a0_0x9e5d3d(0xbf)]() * 0x1;
b = l[a0_0x9e5d3d(0xbf)]() * 0x1;
x = l[a0_0x9e5d3d(0xbf)]() * 0x1;
l = 0x0;
function a0_0x42b1() {
    var _0x5858a3 = [
        '8jLFSnC',
        '10ISxIbL',
        'readFileSync',
        '47201phxKmt',
        '2703480Kiyqwe',
        'trim',
        '410066kxIoyP',
        '817227DkTWiS',
        'toFixed',
        '42JKovwK',
        '24TYkEjB',
        'log',
        '10465191Rwrjtx',
        'tan',
        '1raxHjk',
        '441670dizbvw',
        '11996116fdaFSw',
        'shift',
        'split',
        '312iiQtvC'
    ];
    a0_0x42b1 = function () {
        return _0x5858a3;
    };
    return a0_0x42b1();
}
r = 0x5a;
mid = 0x2d;
c = 0x0;
S = a * a * b;
if (S / 0x2 < x) {
    while (l < r) {
        s = S - a * a * Math[a0_0x9e5d3d(0xbb)](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            l = mid;
        } else {
            r = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console[a0_0x9e5d3d(0xb9)](mid[a0_0x9e5d3d(0xb6)](0xa));
} else {
    while (l < r) {
        s = b * b * Math[a0_0x9e5d3d(0xbb)](mid / 0xb4 * Math['PI']) / 0x2 * a;
        if (x < s) {
            r = mid;
        } else {
            l = mid;
        }
        mid = (l + r) / 0x2;
        c++;
        if (c > 0xc8) {
            break;
        }
    }
    console[a0_0x9e5d3d(0xb9)]((0x5a - mid)[a0_0x9e5d3d(0xb6)](0xa));
}