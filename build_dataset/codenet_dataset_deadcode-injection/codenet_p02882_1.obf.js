var a0_0x326be9 = a0_0x1db6;
inp = require('fs')[a0_0x326be9(0x0)](a0_0x326be9(0x1), a0_0x326be9(0x2))[a0_0x326be9(0x3)]()[a0_0x326be9(0x4)]('\x0a');
function a0_0x1db6(WgsiNu, key) {
    var stringArray = a0_0x5d64();
    a0_0x1db6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1db6(WgsiNu, key);
}
l = inp[a0_0x326be9(0x5)]()[a0_0x326be9(0x4)]('\x20');
a = l[a0_0x326be9(0x5)]() * 0x1;
b = l[a0_0x326be9(0x5)]() * 0x1;
x = l['shift']() * 0x1;
function a0_0x5d64() {
    var _0x1428a8 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'tan',
        'log',
        'toFixed'
    ];
    a0_0x5d64 = function () {
        return _0x1428a8;
    };
    return a0_0x5d64();
}
l = 0x0;
r = 0x5a;
mid = 0x2d;
c = 0x0;
S = a * a * b;
if (S / 0x2 < x) {
    while (l < r) {
        s = S - a * a * Math[a0_0x326be9(0x6)](mid / 0xb4 * Math['PI']) / 0x2 * a;
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
    console[a0_0x326be9(0x7)](mid['toFixed'](0xa));
} else {
    while (l < r) {
        s = b * b * Math[a0_0x326be9(0x6)](mid / 0xb4 * Math['PI']) / 0x2 * a;
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
    console['log']((0x5a - mid)[a0_0x326be9(0x8)](0xa));
}