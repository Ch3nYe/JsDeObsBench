var a0_0x80497e = a0_0x4fec;
function a0_0x524c() {
    var _0x4eb5be = [
        '4rVSJrj',
        '369008WypxqJ',
        '11krQlCs',
        '157OCqchB',
        '12HmlxWO',
        '/dev/stdin',
        'trim',
        '305055gDjfHC',
        '587573nDpNjN',
        '54uIJStj',
        'readFileSync',
        'utf8',
        'split',
        '12NmVxrt',
        '2003115Gblbym',
        '0\x200',
        'push',
        'log',
        '11622ffFjOj',
        'shift',
        '24893778pkbPRb',
        '5817760XoLnaC'
    ];
    a0_0x524c = function () {
        return _0x4eb5be;
    };
    return a0_0x524c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x10ba72 = a0_0x4fec;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10ba72(0xb4)) / 0x1 * (parseInt(_0x10ba72(0xad)) / 0x2) + parseInt(_0x10ba72(0xa2)) / 0x3 + -parseInt(_0x10ba72(0xb1)) / 0x4 * (parseInt(_0x10ba72(0xa9)) / 0x5) + parseInt(_0x10ba72(0xb5)) / 0x6 * (parseInt(_0x10ba72(0xa3)) / 0x7) + parseInt(_0x10ba72(0xb2)) / 0x8 * (parseInt(_0x10ba72(0xa4)) / 0x9) + -parseInt(_0x10ba72(0xb0)) / 0xa * (parseInt(_0x10ba72(0xb3)) / 0xb) + parseInt(_0x10ba72(0xa8)) / 0xc * (parseInt(_0x10ba72(0xaf)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x524c, 0x8a4e3));
var input = require('fs')[a0_0x80497e(0xa5)](a0_0x80497e(0xb6), a0_0x80497e(0xa6));
var Arr = input[a0_0x80497e(0xb7)]()[a0_0x80497e(0xa7)]('\x0a');
function a0_0x4fec(XYglBn, key) {
    var stringArray = a0_0x524c();
    a0_0x4fec = function (index, key) {
        index = index - 0xa2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fec(XYglBn, key);
}
while (!![]) {
    var np = Arr[a0_0x80497e(0xae)]();
    if (np == a0_0x80497e(0xaa))
        break;
    np = np[a0_0x80497e(0xa7)]('\x20')['map'](Number);
    var n = np[0x0];
    var p = np[0x1];
    var sum = p;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr[a0_0x80497e(0xab)](0x0);
    var j = 0x0;
    for (var i = 0x0; i < 0xf4240; i++) {
        if (j == arr['length'])
            j = 0x0;
        if (p > 0x0) {
            p--;
            arr[j]++;
            if (p == 0x0 && sum == arr[j]) {
                console[a0_0x80497e(0xac)](j);
                break;
            }
        } else {
            p = arr[j];
            arr[j] = 0x0;
        }
        j++;
    }
}