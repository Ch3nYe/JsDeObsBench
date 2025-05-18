function a0_0xa26d() {
    var _0x579fe9 = [
        '236885qbTyIO',
        'split',
        'pre-meiji',
        '50NSkwug',
        'utf8',
        'showa',
        '2154640Mvvjrp',
        '635012xCHyZb',
        'readFileSync',
        'log',
        '/dev/stdin',
        'map',
        '281070tkqJpF',
        'taisho',
        '84930EYSFgT',
        '386708JqOWIb',
        'meiji',
        '5178uYGxlG',
        'trim',
        'heisei'
    ];
    a0_0xa26d = function () {
        return _0x579fe9;
    };
    return a0_0xa26d();
}
var a0_0x2ecb99 = a0_0x3742;
(function (stringArrayFunction, comparisonValue) {
    var _0x4985d9 = a0_0x3742;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4985d9(0xf5)) / 0x1 + parseInt(_0x4985d9(0x100)) / 0x2 * (parseInt(_0x4985d9(0xfa)) / 0x3) + parseInt(_0x4985d9(0xf8)) / 0x4 + -parseInt(_0x4985d9(0xfd)) / 0x5 + -parseInt(_0x4985d9(0xf7)) / 0x6 + parseInt(_0x4985d9(0xf0)) / 0x7 + parseInt(_0x4985d9(0x103)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa26d, 0x26657));
var input = require('fs')[a0_0x2ecb99(0xf1)](a0_0x2ecb99(0xf3), a0_0x2ecb99(0x101))[a0_0x2ecb99(0xfb)]();
var lines = input[a0_0x2ecb99(0xfe)]('\x0a');
var line;
function a0_0x3742(EcJnou, key) {
    var stringArray = a0_0xa26d();
    a0_0x3742 = function (index, key) {
        index = index - 0xf0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3742(EcJnou, key);
}
while (line = lines['shift']()) {
    var arr = line['split']('\x20')[a0_0x2ecb99(0xf4)](function (n) {
        return +n;
    });
    var year = arr[0x0];
    var month = arr[0x1];
    var day = arr[0x2];
    var era = '';
    var today = new Date(year, month - 0x1, day);
    if (today < new Date(0x74c, 0x8, 0x8)) {
        era = a0_0x2ecb99(0xff);
    } else if (today < new Date(0x778, 0x6, 0x1e)) {
        era = a0_0x2ecb99(0xf9);
        year -= 0x74b;
    } else if (today < new Date(0x786, 0xb, 0x19)) {
        era = a0_0x2ecb99(0xf6);
        year -= 0x777;
    } else if (today < new Date(0x7c5, 0x0, 0x8)) {
        era = a0_0x2ecb99(0x102);
        year -= 0x785;
    } else {
        era = a0_0x2ecb99(0xfc);
        year -= 0x7c4;
    }
    if (era == a0_0x2ecb99(0xff)) {
        console['log']('pre-meiji');
        continue;
    }
    console[a0_0x2ecb99(0xf2)](era, year, month, day);
}