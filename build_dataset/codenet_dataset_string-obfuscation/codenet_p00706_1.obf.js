function a0_0x12b6(wYvbwa, key) {
    var stringArray = a0_0x4730();
    a0_0x12b6 = function (index, key) {
        index = index - 0xef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x12b6(wYvbwa, key);
}
var a0_0x58bfa3 = a0_0x12b6;
function a0_0x4730() {
    var _0x3dd6ca = [
        '3681475EfZfFN',
        'max',
        'split',
        '/dev/stdin',
        '6wKnycR',
        '50alRxWx',
        '278666qLqzCR',
        '598989bOLVgy',
        'trim',
        '268716CKGXzt',
        '145144kQoINt',
        '14962662ufANnw',
        'shift',
        'map',
        '4815768ppYKOd',
        'utf8'
    ];
    a0_0x4730 = function () {
        return _0x3dd6ca;
    };
    return a0_0x4730();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x52de94 = a0_0x12b6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x52de94(0xef)) / 0x1 + -parseInt(_0x52de94(0xfc)) / 0x2 + parseInt(_0x52de94(0xfd)) / 0x3 + -parseInt(_0x52de94(0xf0)) / 0x4 * (parseInt(_0x52de94(0xfb)) / 0x5) + -parseInt(_0x52de94(0xfa)) / 0x6 * (parseInt(_0x52de94(0xf6)) / 0x7) + -parseInt(_0x52de94(0xf4)) / 0x8 + parseInt(_0x52de94(0xf1)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4730, 0x7a448));
var input = require('fs')['readFileSync'](a0_0x58bfa3(0xf9), a0_0x58bfa3(0xf5));
var arr = input[a0_0x58bfa3(0xfe)]()[a0_0x58bfa3(0xf8)]('\x0a');
while (!![]) {
    var n = arr[a0_0x58bfa3(0xf2)]() - 0x0;
    if (n == 0x0)
        break;
    var wh = arr[a0_0x58bfa3(0xf2)]()[a0_0x58bfa3(0xf8)]('\x20')[a0_0x58bfa3(0xf3)](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var XY = [];
    for (var i = 0x0; i < w; i++) {
        XY[i] = [];
        for (var j = 0x0; j < h; j++) {
            XY[i][j] = 0x0;
        }
    }
    while (n--) {
        var xy = arr['shift']()['split']('\x20')[a0_0x58bfa3(0xf3)](Number);
        XY[xy[0x0] - 0x1][xy[0x1] - 0x1] = 0x1;
    }
    var st = arr[a0_0x58bfa3(0xf2)]()[a0_0x58bfa3(0xf8)]('\x20')['map'](Number);
    var s = st[0x0];
    var t = st[0x1];
    var max = 0x0;
    for (var i = 0x0; i <= w - s; i++) {
        for (var j = 0x0; j <= h - t; j++) {
            var sum = 0x0;
            for (var x = 0x0; x < s; x++) {
                for (var y = 0x0; y < t; y++) {
                    sum += XY[i + x][j + y];
                }
            }
            max = Math[a0_0x58bfa3(0xf7)](sum, max);
        }
    }
    console['log'](max);
}