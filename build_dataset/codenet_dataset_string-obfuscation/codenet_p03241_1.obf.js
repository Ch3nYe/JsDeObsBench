var a0_0xed298d = a0_0x5970;
(function (stringArrayFunction, comparisonValue) {
    var _0xc4e851 = a0_0x5970;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xc4e851(0x1c9)) / 0x1 * (-parseInt(_0xc4e851(0x1d2)) / 0x2) + parseInt(_0xc4e851(0x1c8)) / 0x3 * (parseInt(_0xc4e851(0x1c3)) / 0x4) + -parseInt(_0xc4e851(0x1cc)) / 0x5 * (-parseInt(_0xc4e851(0x1cf)) / 0x6) + parseInt(_0xc4e851(0x1c6)) / 0x7 + parseInt(_0xc4e851(0x1ca)) / 0x8 + parseInt(_0xc4e851(0x1cb)) / 0x9 * (-parseInt(_0xc4e851(0x1c4)) / 0xa) + -parseInt(_0xc4e851(0x1ce)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4bd9, 0xe527b));
function Main(input) {
    var _0x34803d = a0_0x5970;
    input = input[_0x34803d(0x1cd)]('\x0a');
    tmp = input[0x0][_0x34803d(0x1cd)]('\x20');
    var N = parseInt(tmp[0x0], 0xa);
    var M = parseInt(tmp[0x1], 0xa);
    var divisors = divisor(M);
    var max = 0x0;
    for (var i = 0x0; i < divisors[_0x34803d(0x1c7)]; i++) {
        var d = divisors[i];
        if (M / d >= N) {
            max = Math[_0x34803d(0x1c2)](max, d);
        }
    }
    console[_0x34803d(0x1d0)]('%d', max);
}
function divisor(n) {
    var _0x385574 = a0_0x5970;
    var res = [];
    for (var i = 0x1; i * i <= n; i++) {
        if (n % i == 0x0) {
            res[_0x385574(0x1c1)](i);
            if (n / i != i) {
                res[_0x385574(0x1c1)](n / i);
            }
        }
    }
    return res;
}
Main(require('fs')[a0_0xed298d(0x1d1)]('/dev/stdin', a0_0xed298d(0x1c5)));
function a0_0x5970(sHeiTe, key) {
    var stringArray = a0_0x4bd9();
    a0_0x5970 = function (index, key) {
        index = index - 0x1c1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5970(sHeiTe, key);
}
function a0_0x4bd9() {
    var _0x1dd252 = [
        '1741899LkVSos',
        '1ymZvNq',
        '2445864EqyEuv',
        '6921XFTHLo',
        '15cCVLVX',
        'split',
        '37899994SlLDlJ',
        '2095152gNFWMI',
        'log',
        'readFileSync',
        '3301494kspcVF',
        'push',
        'max',
        '4BJsneK',
        '6390lpLaOm',
        'utf8',
        '9035425uOtXGJ',
        'length'
    ];
    a0_0x4bd9 = function () {
        return _0x1dd252;
    };
    return a0_0x4bd9();
}