function a0_0x47eb() {
    var _0x81411b = [
        'readFileSync',
        '1053rlHrSf',
        'split',
        '1272792PpUGGS',
        '4150041btOjaQ',
        '876704iwzfIq',
        '1566174YATbAO',
        'abs',
        '1494358MCETeH',
        '46072KjgpVG',
        'log',
        '694120vPDqyA',
        'utf8',
        '/dev/stdin',
        '15uRQIDy'
    ];
    a0_0x47eb = function () {
        return _0x81411b;
    };
    return a0_0x47eb();
}
var a0_0x388010 = a0_0x4cfd;
function a0_0x4cfd(IYnybb, key) {
    var stringArray = a0_0x47eb();
    a0_0x4cfd = function (index, key) {
        index = index - 0x105;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cfd(IYnybb, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3c7de4 = a0_0x4cfd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3c7de4(0x106)) / 0x1 + -parseInt(_0x3c7de4(0x10b)) / 0x2 + -parseInt(_0x3c7de4(0x107)) / 0x3 + parseInt(_0x3c7de4(0x108)) / 0x4 + parseInt(_0x3c7de4(0x111)) / 0x5 * (parseInt(_0x3c7de4(0x109)) / 0x6) + -parseInt(_0x3c7de4(0x10e)) / 0x7 + parseInt(_0x3c7de4(0x10c)) / 0x8 * (parseInt(_0x3c7de4(0x113)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x47eb, 0xaf944));
inp = require('fs')[a0_0x388010(0x112)](a0_0x388010(0x110), a0_0x388010(0x10f))[a0_0x388010(0x105)]('\x0a');
l = inp['shift']()[a0_0x388010(0x105)]('\x20');
x = l[0x0] * 0x1;
y = l[0x1] * 0x1;
cnt = 0x0;
if (x == y) {
} else if (Math['abs'](x) == Math[a0_0x388010(0x10a)](y)) {
    cnt++;
} else if (x == 0x0 || y == 0x0) {
    if (y < x) {
        cnt++;
    }
    cnt += Math[a0_0x388010(0x10a)](Math[a0_0x388010(0x10a)](x) - Math[a0_0x388010(0x10a)](y));
} else {
    if (x > y) {
        if (x > 0x0 && y > 0x0) {
            cnt += 0x2;
        } else if (x > 0x0 && y < 0x0) {
            cnt += 0x1;
        } else {
            cnt += 0x2;
        }
    } else {
        if (x < 0x0 && y > 0x0) {
            cnt += 0x1;
        }
    }
    cnt += Math[a0_0x388010(0x10a)](Math[a0_0x388010(0x10a)](x) - Math[a0_0x388010(0x10a)](y));
}
console[a0_0x388010(0x10d)](cnt);