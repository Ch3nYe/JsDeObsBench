function a0_0x273e() {
    var _0x403361 = [
        'split',
        '3145842iNlRJF',
        'fill',
        '532710oXPoZD',
        'log',
        '8jQItdX',
        '1622104sAbMao',
        'length',
        '1730550VYOVXu',
        '469642OkXMid',
        '141204GiehLn',
        '9tdGTQk',
        '450933oPTMGn',
        '9VanfkH',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x273e = function () {
        return _0x403361;
    };
    return a0_0x273e();
}
var a0_0x52a589 = a0_0x55d7;
(function (stringArrayFunction, comparisonValue) {
    var _0xcda7f5 = a0_0x55d7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xcda7f5(0x11a)) / 0x1 + parseInt(_0xcda7f5(0x119)) / 0x2 * (parseInt(_0xcda7f5(0x11d)) / 0x3) + parseInt(_0xcda7f5(0x116)) / 0x4 + -parseInt(_0xcda7f5(0x118)) / 0x5 + -parseInt(_0xcda7f5(0x111)) / 0x6 + parseInt(_0xcda7f5(0x11c)) / 0x7 * (parseInt(_0xcda7f5(0x115)) / 0x8) + -parseInt(_0xcda7f5(0x11b)) / 0x9 * (parseInt(_0xcda7f5(0x113)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x273e, 0x5faf4));
function a0_0x55d7(BbAsls, key) {
    var stringArray = a0_0x273e();
    a0_0x55d7 = function (index, key) {
        index = index - 0x10e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x55d7(BbAsls, key);
}
function Main(input) {
    var _0x560ebb = a0_0x55d7;
    input = input['split']('\x0a');
    tmp1 = input[0x0][_0x560ebb(0x110)]('\x20');
    var n = parseInt(tmp1[0x0]);
    var a = parseInt(tmp1[0x1]);
    tmp = input[0x1][_0x560ebb(0x110)]('\x20');
    x = new Array(n);
    var sum2 = 0x0;
    for (i = 0x0; i < tmp[_0x560ebb(0x117)]; i++) {
        x[i] = parseInt(tmp[i]);
    }
    var s = 0x0;
    for (i = 0x0; i < n; i++) {
        sum2 = sum2 + x[i];
    }
    var b = new Array(sum2 + 0x1);
    for (var y = 0x0; y < sum2 + 0x1; y++) {
        b[y] = new Array(n + 0x1)[_0x560ebb(0x112)](0x0);
    }
    b[0x0][0x0] = 0x1;
    for (j = 0x0; j < n; j++) {
        for (i = sum2; i >= 0x0; i--) {
            for (k = 0x0; k < n + 0x1; k++) {
                if (b[i][k] >= 0x1) {
                    b[i + x[j]][k + 0x1] = b[i + x[j]][k + 0x1] + b[i][k];
                }
            }
        }
    }
    for (i = 0x1; i <= n && i * a <= sum2; i++) {
        s = s + b[i * a][i];
    }
    console[_0x560ebb(0x114)]('%s', s);
}
Main(require('fs')['readFileSync'](a0_0x52a589(0x10e), a0_0x52a589(0x10f)));