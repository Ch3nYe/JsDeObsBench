'use strict';
function a0_0x3258(AslmeM, key) {
    var stringArray = a0_0x4ebc();
    a0_0x3258 = function (index, key) {
        index = index - 0x8c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3258(AslmeM, key);
}
function a0_0x4ebc() {
    var _0x17277d = [
        'sort',
        'split',
        '7605858rxHSTh',
        'log',
        'aoki',
        '1275437mEqRud',
        'shift',
        '566072xrVcGa',
        'taka',
        'readFileSync',
        '4515138wqerdt',
        '/dev/stdin',
        '7167300kRBKtc',
        '4357130iQfBOX',
        '2yyqtRf',
        '2345624tTwfON'
    ];
    a0_0x4ebc = function () {
        return _0x17277d;
    };
    return a0_0x4ebc();
}
var a0_0x501d2b = a0_0x3258;
(function (stringArrayFunction, comparisonValue) {
    var _0xcd2c76 = a0_0x3258;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xcd2c76(0x8c)) / 0x1 + parseInt(_0xcd2c76(0x95)) / 0x2 * (parseInt(_0xcd2c76(0x91)) / 0x3) + -parseInt(_0xcd2c76(0x96)) / 0x4 + parseInt(_0xcd2c76(0x94)) / 0x5 + parseInt(_0xcd2c76(0x99)) / 0x6 + -parseInt(_0xcd2c76(0x93)) / 0x7 + parseInt(_0xcd2c76(0x8e)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4ebc, 0xca6cb));
function Main(input) {
    var _0x55594b = a0_0x3258;
    var lines = input['split']('\x0a');
    var N = lines[_0x55594b(0x8d)]() - 0x0;
    var ryo = new Array(N);
    for (var n = 0x0; n < N; n++) {
        var nums = lines[n][_0x55594b(0x98)]('\x20');
        ryo[n] = {
            'taka': nums[0x0] - 0x0,
            'aoki': nums[0x1] - 0x0
        };
        ryo[n]['sa'] = ryo[n][_0x55594b(0x9b)] - ryo[n][_0x55594b(0x8f)];
    }
    ryo['sort'](function (a, b) {
        return b['sa'] - a['sa'];
    });
    ryo[_0x55594b(0x97)](function (a, b) {
        return b['taka'] - a['taka'];
    });
    var koufuku = 0x0;
    for (var n = 0x0; n < N; n++) {
        if (n % 0x2 == 0x0) {
            koufuku += ryo[n][_0x55594b(0x8f)];
            ryo[n][_0x55594b(0x8f)] = 0x0;
        } else {
            koufuku -= ryo[n]['aoki'];
            ryo[n]['aoki'] = 0x0;
        }
    }
    console[_0x55594b(0x9a)](koufuku);
}
Main(require('fs')[a0_0x501d2b(0x90)](a0_0x501d2b(0x92), 'utf8'));