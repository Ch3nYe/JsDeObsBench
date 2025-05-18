function a0_0x27ae(UzAUvW, key) {
    var stringArray = a0_0xa45a();
    a0_0x27ae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x27ae(UzAUvW, key);
}
var a0_0x546ec5 = a0_0x27ae;
function year(x) {
    var _0x1749fe = a0_0x27ae;
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
        if (_0x1749fe(0x0) !== _0x1749fe(0x0)) {
            y1++;
            days += year(y1)[0x0];
        } else {
            m[0x2] = 0x1d;
            m[0x0] = 0x16e;
            if (x % 0x64 == 0x0) {
                if ('UUpLL' !== 'UUpLL') {
                    m2++;
                    sum2 += Y2[m2];
                } else {
                    m[0x2] = 0x1c;
                    m[0x0] = 0x16d;
                }
            }
            if (x % 0x190 == 0x0) {
                if (_0x1749fe(0x1) === _0x1749fe(0x1)) {
                    m[0x2] = 0x1d;
                    m[0x0] = 0x16e;
                } else {
                    m[0x2] = 0x1d;
                    m[0x0] = 0x16e;
                }
            }
        }
    }
    return m;
}
var input = require('fs')[a0_0x546ec5(0x2)]('/dev/stdin', 'utf8');
function a0_0xa45a() {
    var _0x89fe7b = [
        'tEmTU',
        'KdKcO',
        'readFileSync',
        'trim',
        'split',
        'shift',
        '-1\x20-1\x20-1\x20-1\x20-1\x20-1',
        'map',
        'log',
        'apply'
    ];
    a0_0xa45a = function () {
        return _0x89fe7b;
    };
    return a0_0xa45a();
}
var Arr = input[a0_0x546ec5(0x3)]()[a0_0x546ec5(0x4)]('\x0a');
while (!![]) {
    var str = Arr[a0_0x546ec5(0x5)]();
    if (str == a0_0x546ec5(0x6))
        break;
    var arr = str[a0_0x546ec5(0x4)]('\x20')[a0_0x546ec5(0x7)](Number);
    (function (y1, m1, d1, y2, m2, d2) {
        var _0x382078 = a0_0x27ae;
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
        console[_0x382078(0x8)](days);
    }[a0_0x546ec5(0x9)](null, arr));
}