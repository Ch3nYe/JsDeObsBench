function a0_0x5af7(GAOJuP, key) {
    var stringArray = a0_0xb033();
    a0_0x5af7 = function (index, key) {
        index = index - 0x190;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5af7(GAOJuP, key);
}
function a0_0xb033() {
    var _0x58c038 = [
        '350dhgHWf',
        '3917910TPecRN',
        'readFileSync',
        '5cOubRW',
        '542946hfQEsw',
        'map',
        '1032644gBPbEt',
        'log',
        'shift',
        '297039gecMUY',
        'trim',
        'utf8',
        '/dev/stdin',
        '1132262UnNRum',
        '20888LHALeN',
        '1017uOJsbp',
        'split',
        '62154sGuHdU'
    ];
    a0_0xb033 = function () {
        return _0x58c038;
    };
    return a0_0xb033();
}
var a0_0x1b0f3c = a0_0x5af7;
(function (stringArrayFunction, comparisonValue) {
    var _0x512432 = a0_0x5af7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x512432(0x196)) / 0x1 + -parseInt(_0x512432(0x19f)) / 0x2 + -parseInt(_0x512432(0x19b)) / 0x3 + parseInt(_0x512432(0x198)) / 0x4 * (parseInt(_0x512432(0x195)) / 0x5) + -parseInt(_0x512432(0x191)) / 0x6 * (parseInt(_0x512432(0x192)) / 0x7) + -parseInt(_0x512432(0x1a0)) / 0x8 * (-parseInt(_0x512432(0x1a1)) / 0x9) + parseInt(_0x512432(0x193)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xb033, 0x4a6cf));
var input = require('fs')[a0_0x1b0f3c(0x194)](a0_0x1b0f3c(0x19e), a0_0x1b0f3c(0x19d));
var arr = input[a0_0x1b0f3c(0x19c)]()[a0_0x1b0f3c(0x190)]('\x0a');
var n = arr[a0_0x1b0f3c(0x19a)]() - 0x0;
var a = arr[a0_0x1b0f3c(0x19a)]()['split']('\x20')[a0_0x1b0f3c(0x197)](Number);
var min = Infinity;
var ans = -0x1;
for (var i = 0x0; i < n; i++) {
    if (min > a[i]) {
        ans = i;
        min = a[i];
    }
}
console[a0_0x1b0f3c(0x199)](ans + 0x1);