function a0_0x2d23(OYSYnk, key) {
    var stringArray = a0_0x3c4f();
    a0_0x2d23 = function (index, key) {
        index = index - 0x8f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d23(OYSYnk, key);
}
var a0_0x27dff3 = a0_0x2d23;
(function (stringArrayFunction, comparisonValue) {
    var _0x4bbccc = a0_0x2d23;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4bbccc(0x9d)) / 0x1 + -parseInt(_0x4bbccc(0x90)) / 0x2 * (parseInt(_0x4bbccc(0x98)) / 0x3) + parseInt(_0x4bbccc(0x91)) / 0x4 * (parseInt(_0x4bbccc(0x9e)) / 0x5) + -parseInt(_0x4bbccc(0xa0)) / 0x6 * (-parseInt(_0x4bbccc(0x92)) / 0x7) + parseInt(_0x4bbccc(0x97)) / 0x8 + -parseInt(_0x4bbccc(0x95)) / 0x9 * (-parseInt(_0x4bbccc(0x9c)) / 0xa) + parseInt(_0x4bbccc(0x94)) / 0xb * (-parseInt(_0x4bbccc(0xa1)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3c4f, 0x4480e));
function year(x) {
    var m = [
        0x16d,
        0x1f,
        0x1c,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f,
        0x1f,
        0x1e,
        0x1f,
        0x1e,
        0x1f
    ];
    if (x % 0x4 == 0x0) {
        m[0x2] = 0x1d;
        m[0x0] = 0x16e;
        if (x % 0x64 == 0x0) {
            m[0x2] = 0x1c;
            m[0x0] = 0x16d;
        }
        if (x % 0x190 == 0x0) {
            m[0x2] = 0x1d;
            m[0x0] = 0x16e;
        }
    }
    return m;
}
function a0_0x3c4f() {
    var _0x37619d = [
        '156qhsrOF',
        'shift',
        'apply',
        '14mdADvN',
        '16396kmvrtN',
        '69132DBmrIn',
        'utf8',
        '1332529yFYaGc',
        '650007HSVyum',
        'log',
        '3670504QTUUUN',
        '4191tKPvWc',
        '/dev/stdin',
        'map',
        '-1\x20-1\x20-1\x20-1\x20-1\x20-1',
        '10zPBZXX',
        '501801TnEQIl',
        '425bzgIQa',
        'split',
        '294IzxyAf'
    ];
    a0_0x3c4f = function () {
        return _0x37619d;
    };
    return a0_0x3c4f();
}
var input = require('fs')['readFileSync'](a0_0x27dff3(0x99), a0_0x27dff3(0x93));
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = Arr[a0_0x27dff3(0xa2)]();
    if (str == a0_0x27dff3(0x9b))
        break;
    var arr = str[a0_0x27dff3(0x9f)]('\x20')[a0_0x27dff3(0x9a)](Number);
    (function (y1, m1, d1, y2, m2, d2) {
        var _0x11cca2 = a0_0x27dff3;
        var sum1 = 0x0;
        var sum2 = 0x0;
        var Y1 = year(y1);
        var Y2 = year(y2);
        sum1 += Y1[m1] - d1;
        sum2 += Y2[m2] - d2;
        while (m1 < 0xc) {
            m1++;
            sum1 += Y1[m1];
        }
        while (m2 < 0xc) {
            m2++;
            sum2 += Y2[m2];
        }
        var days = sum1 - sum2;
        while (y1 != y2) {
            y1++;
            days += year(y1)[0x0];
        }
        console[_0x11cca2(0x96)](days);
    }[a0_0x27dff3(0x8f)](null, arr));
}