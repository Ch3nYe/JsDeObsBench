var a0_0x4dbffd = a0_0x53d2;
(function (stringArrayFunction, comparisonValue) {
    var _0x50a11c = a0_0x53d2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x50a11c(0x136)) / 0x1 + parseInt(_0x50a11c(0x12b)) / 0x2 * (parseInt(_0x50a11c(0x12d)) / 0x3) + -parseInt(_0x50a11c(0x12f)) / 0x4 + -parseInt(_0x50a11c(0x126)) / 0x5 + parseInt(_0x50a11c(0x12a)) / 0x6 * (-parseInt(_0x50a11c(0x131)) / 0x7) + parseInt(_0x50a11c(0x12e)) / 0x8 * (parseInt(_0x50a11c(0x127)) / 0x9) + parseInt(_0x50a11c(0x137)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e9f, 0x37e3f));
function a0_0x53d2(GMdUZQ, key) {
    var stringArray = a0_0x2e9f();
    a0_0x53d2 = function (index, key) {
        index = index - 0x126;
        var value = stringArray[index];
        return value;
    };
    return a0_0x53d2(GMdUZQ, key);
}
config = {
    'stdin': a0_0x4dbffd(0x134),
    'newline': '\x0a'
};
require('fs')['readFileSync'](config[a0_0x4dbffd(0x135)], a0_0x4dbffd(0x133))[a0_0x4dbffd(0x12c)]()[a0_0x4dbffd(0x129)](config[a0_0x4dbffd(0x130)])['forEach'](function (line) {
    var _0x2b7ab1 = a0_0x4dbffd;
    var ary = line[_0x2b7ab1(0x129)]('\x20');
    var a = ary[0x0], b = ary[0x1];
    console[_0x2b7ab1(0x128)](_0x2b7ab1(0x132), gcd(a, b), lcm(a, b));
});
function a0_0x2e9f() {
    var _0x367838 = [
        '593024QuPHXy',
        '1819972dQQKWV',
        'newline',
        '7SNnLrY',
        '%d\x20%d',
        'ascii',
        '/dev/stdin',
        'stdin',
        '62064pxLNHO',
        '6387380Xdcmip',
        '1526595bdgnGs',
        '27gkdOHp',
        'log',
        'split',
        '1645806tgThSM',
        '4tqziqY',
        'trim',
        '510531IoETia'
    ];
    a0_0x2e9f = function () {
        return _0x367838;
    };
    return a0_0x2e9f();
}
function gcd(a, b) {
    while (a !== b) {
        if (a < b) {
            var tmp = a;
            a = b;
            b = tmp;
        }
        if (a % b === 0x0)
            return b;
        a -= b;
    }
    return a;
}
function lcm(a, b) {
    var g = gcd(a, b);
    return g * (a / g) * (b / g);
}