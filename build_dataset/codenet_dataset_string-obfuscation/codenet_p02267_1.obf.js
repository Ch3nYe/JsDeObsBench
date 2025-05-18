var a0_0x2beaa3 = a0_0x399c;
function a0_0x399c(ILCqJw, key) {
    var stringArray = a0_0x3ba1();
    a0_0x399c = function (index, key) {
        index = index - 0x122;
        var value = stringArray[index];
        return value;
    };
    return a0_0x399c(ILCqJw, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1f5476 = a0_0x399c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1f5476(0x132)) / 0x1 * (-parseInt(_0x1f5476(0x12e)) / 0x2) + parseInt(_0x1f5476(0x12f)) / 0x3 + parseInt(_0x1f5476(0x122)) / 0x4 * (-parseInt(_0x1f5476(0x12d)) / 0x5) + parseInt(_0x1f5476(0x123)) / 0x6 * (-parseInt(_0x1f5476(0x130)) / 0x7) + parseInt(_0x1f5476(0x128)) / 0x8 + -parseInt(_0x1f5476(0x12b)) / 0x9 * (parseInt(_0x1f5476(0x12c)) / 0xa) + -parseInt(_0x1f5476(0x125)) / 0xb * (parseInt(_0x1f5476(0x12a)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ba1, 0x7628e));
function Main(input) {
    var _0x1db4b8 = a0_0x399c;
    input = input[_0x1db4b8(0x131)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var q = parseInt(input[0x2], 0xa);
    input[0x1] = input[0x1][_0x1db4b8(0x131)]('\x20');
    input[0x3] = input[0x3][_0x1db4b8(0x131)]('\x20');
    var s = Array(n), t = Array(q);
    for (var i = 0x0; i < n; i++) {
        s[i] = parseInt(input[0x1][i], 0xa);
    }
    for (var i = 0x0; i < q; i++) {
        t[i] = parseInt(input[0x3][i], 0xa);
    }
    var count = 0x0;
    for (var i = 0x0; i < q; i++) {
        var j;
        for (j = 0x0; j < n; j++) {
            if (s[j] == t[i])
                break;
        }
        if (j < n)
            count++;
    }
    console[_0x1db4b8(0x124)](count);
}
function a0_0x3ba1() {
    var _0x3dadf2 = [
        'readFileSync',
        '/dev/stdin',
        '6435224tFtZuq',
        'utf8',
        '180168BnGDTy',
        '1431HKIVpH',
        '21030ZrnnYi',
        '735yLsVSd',
        '753418gfUzSG',
        '507297wYwRUt',
        '2809184sJcfEi',
        'split',
        '2hrpLKd',
        '2772UPLvZT',
        '6BxqPrQ',
        'log',
        '297WmmDWA'
    ];
    a0_0x3ba1 = function () {
        return _0x3dadf2;
    };
    return a0_0x3ba1();
}
Main(require('fs')[a0_0x2beaa3(0x126)](a0_0x2beaa3(0x127), a0_0x2beaa3(0x129)));