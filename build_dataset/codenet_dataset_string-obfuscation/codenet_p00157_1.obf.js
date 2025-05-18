var a0_0x2f43b5 = a0_0x4198;
(function (stringArrayFunction, comparisonValue) {
    var _0xdea048 = a0_0x4198;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xdea048(0x94)) / 0x1 + parseInt(_0xdea048(0xa1)) / 0x2 + -parseInt(_0xdea048(0x97)) / 0x3 * (-parseInt(_0xdea048(0x92)) / 0x4) + parseInt(_0xdea048(0x9e)) / 0x5 + parseInt(_0xdea048(0x91)) / 0x6 * (-parseInt(_0xdea048(0x9a)) / 0x7) + -parseInt(_0xdea048(0x9b)) / 0x8 * (parseInt(_0xdea048(0x9c)) / 0x9) + -parseInt(_0xdea048(0x96)) / 0xa * (parseInt(_0xdea048(0x99)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1bf0, 0x53f7a));
function Longest() {
    var _0x5e3297 = a0_0x4198;
    ary[_0x5e3297(0x93)](function (a, b) {
        if (a[0x0] == b[0x0])
            return a[0x1] - b[0x1];
        else
            return a[0x0] - b[0x0];
    });
    var A = ary[_0x5e3297(0x95)](function (v, i) {
        if (i == 0x0)
            return !![];
        else if (ary[i - 0x1][0x0] != v[0x0])
            return !![];
    });
    A = A[_0x5e3297(0xa0)](function (v) {
        return v[0x1];
    });
    var L = [];
    L[0x0] = A[0x0];
    var length = 0x1;
    for (var i = 0x1; i < A[_0x5e3297(0x9f)]; i++) {
        if (L[length - 0x1] < A[i])
            L[length++] = A[i];
        else {
            for (var j = 0x0; j < length; j++) {
                if (L[j] >= A[i]) {
                    L[j] = A[i];
                    break;
                }
            }
        }
    }
    return length;
}
var input = require('fs')[a0_0x2f43b5(0x9d)](a0_0x2f43b5(0xa3), a0_0x2f43b5(0xa2));
function a0_0x4198(yrpClL, key) {
    var stringArray = a0_0x1bf0();
    a0_0x4198 = function (index, key) {
        index = index - 0x8f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4198(yrpClL, key);
}
var arr = input[a0_0x2f43b5(0x98)]()['split']('\x0a');
function a0_0x1bf0() {
    var _0x592e26 = [
        '285576qiAMCF',
        '233972BHteuF',
        'sort',
        '169078YPGaVH',
        'filter',
        '710QLmlly',
        '9XVdIIw',
        'trim',
        '34991QeLOIR',
        '77KtCGXK',
        '8esnStN',
        '1005705KcWjgc',
        'readFileSync',
        '3105595VyLFdY',
        'length',
        'map',
        '1155124YTrCqH',
        'utf8',
        '/dev/stdin',
        'shift',
        'split',
        'max',
        'log'
    ];
    a0_0x1bf0 = function () {
        return _0x592e26;
    };
    return a0_0x1bf0();
}
while (!![]) {
    var n = arr[a0_0x2f43b5(0xa4)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary['push'](arr[a0_0x2f43b5(0xa4)]()[a0_0x2f43b5(0xa5)]('\x20')[a0_0x2f43b5(0xa0)](Number));
    var m = arr['shift']() - 0x0;
    for (var i = 0x0; i < m; i++)
        ary['push'](arr[a0_0x2f43b5(0xa4)]()[a0_0x2f43b5(0xa5)]('\x20')[a0_0x2f43b5(0xa0)](Number));
    var R = Longest();
    ary = ary['map'](function (v) {
        return [
            v[0x1],
            v[0x0]
        ];
    });
    var H = Longest();
    console[a0_0x2f43b5(0x90)](Math[a0_0x2f43b5(0x8f)](R, H));
}