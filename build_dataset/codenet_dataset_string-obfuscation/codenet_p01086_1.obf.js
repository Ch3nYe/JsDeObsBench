function a0_0x58e9() {
    var _0x1bac14 = [
        'trim',
        'map',
        'log',
        'length',
        'utf8',
        '2676695roSwiD',
        '2231428azBILq',
        'splice',
        '/dev/stdin',
        '2956DJWZMF',
        '21004320IeqVCQ',
        'shift',
        'readFileSync',
        '548808xrmRVV',
        '6DTjGAD',
        '88OgpEbq',
        '463167GtiXOM',
        '2354240hodzyO',
        '457ZnLFto'
    ];
    a0_0x58e9 = function () {
        return _0x1bac14;
    };
    return a0_0x58e9();
}
var a0_0x410045 = a0_0x57a0;
(function (stringArrayFunction, comparisonValue) {
    var _0x3ae57f = a0_0x57a0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3ae57f(0x11f)) / 0x1 * (parseInt(_0x3ae57f(0x129)) / 0x2) + parseInt(_0x3ae57f(0x12d)) / 0x3 + -parseInt(_0x3ae57f(0x126)) / 0x4 + parseInt(_0x3ae57f(0x11e)) / 0x5 + parseInt(_0x3ae57f(0x11b)) / 0x6 * (-parseInt(_0x3ae57f(0x125)) / 0x7) + parseInt(_0x3ae57f(0x11c)) / 0x8 * (-parseInt(_0x3ae57f(0x11d)) / 0x9) + parseInt(_0x3ae57f(0x12a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58e9, 0x8bc13));
var input = require('fs')[a0_0x410045(0x12c)](a0_0x410045(0x128), a0_0x410045(0x124));
function a0_0x57a0(pYMKNZ, key) {
    var stringArray = a0_0x58e9();
    a0_0x57a0 = function (index, key) {
        index = index - 0x11b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x57a0(pYMKNZ, key);
}
var arr = input[a0_0x410045(0x120)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x410045(0x12b)]() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr[a0_0x410045(0x127)](0x0, n);
    Arr = Arr[a0_0x410045(0x121)](function (v) {
        return v['length'];
    });
    for (var i = 0x0; i < Arr[a0_0x410045(0x123)]; i++) {
        var good = [
            0x5,
            0x7,
            0x5,
            0x7,
            0x7
        ];
        var sum = 0x0;
        for (var j = i; j < Arr[a0_0x410045(0x123)]; j++) {
            if (good[a0_0x410045(0x123)] == 0x0)
                break;
            sum += Arr[j];
            if (good[0x0] > sum)
                continue;
            else if (good[0x0] < sum)
                break;
            else if (good[0x0] == sum) {
                good[a0_0x410045(0x12b)]();
                sum = 0x0;
            }
        }
        if (good[a0_0x410045(0x123)] == 0x0) {
            console[a0_0x410045(0x122)](i + 0x1);
            break;
        }
    }
}