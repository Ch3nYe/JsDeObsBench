var a0_0x35821e = a0_0x1782;
(function (stringArrayFunction, comparisonValue) {
    var _0x2947d1 = a0_0x1782;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2947d1(0x7c)) / 0x1 + parseInt(_0x2947d1(0x7b)) / 0x2 + parseInt(_0x2947d1(0x6e)) / 0x3 * (parseInt(_0x2947d1(0x78)) / 0x4) + parseInt(_0x2947d1(0x6f)) / 0x5 + -parseInt(_0x2947d1(0x7d)) / 0x6 * (parseInt(_0x2947d1(0x70)) / 0x7) + -parseInt(_0x2947d1(0x79)) / 0x8 * (-parseInt(_0x2947d1(0x77)) / 0x9) + -parseInt(_0x2947d1(0x6d)) / 0xa * (parseInt(_0x2947d1(0x6c)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1549, 0x29648));
function a0_0x1549() {
    var _0x2999bc = [
        '2950407hQOlfY',
        '615108uquiYs',
        '8dpBtmF',
        'shift',
        '326728tbaYha',
        '208104gtOmTq',
        '78OTLCfL',
        '1298TFeKrf',
        '38660Jmifqb',
        '3kQDykH',
        '1588575FdJNFy',
        '69377ResbGt',
        'readFileSync',
        'sort',
        'utf8',
        'split',
        'log',
        'push'
    ];
    a0_0x1549 = function () {
        return _0x2999bc;
    };
    return a0_0x1549();
}
inp = require('fs')[a0_0x35821e(0x71)]('/dev/stdin', a0_0x35821e(0x73))[a0_0x35821e(0x74)]('\x0a');
N = inp[a0_0x35821e(0x7a)]() * 0x1;
A = inp[a0_0x35821e(0x7a)]()['split']('\x20');
function a0_0x1782(UzHqIW, key) {
    var stringArray = a0_0x1549();
    a0_0x1782 = function (index, key) {
        index = index - 0x6c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1782(UzHqIW, key);
}
B = inp[a0_0x35821e(0x7a)]()[a0_0x35821e(0x74)]('\x20');
sumA = 0x0;
sumB = 0x0;
s = 0x0;
t = [];
cnt = 0x0;
for (i = 0x0; i < N; i++) {
    a = A[i] * 0x1;
    b = B[i] * 0x1;
    d = a - b;
    if (d < 0x0) {
        cnt++;
        s += d;
    } else {
        t[a0_0x35821e(0x76)](d);
    }
    sumA += a;
    sumB += b;
}
if (sumA >= sumB) {
    t[a0_0x35821e(0x72)]((a, b) => b - a);
    j = 0x0;
    while (s < 0x0) {
        s += t[j];
        j++;
    }
    console[a0_0x35821e(0x75)](cnt + j);
} else {
    console[a0_0x35821e(0x75)](-0x1);
}