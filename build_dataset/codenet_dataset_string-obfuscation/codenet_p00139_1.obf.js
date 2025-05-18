var a0_0x1624f6 = a0_0x312d;
(function (stringArrayFunction, comparisonValue) {
    var _0xac7e0c = a0_0x312d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xac7e0c(0x192)) / 0x1 + -parseInt(_0xac7e0c(0x19d)) / 0x2 + parseInt(_0xac7e0c(0x18f)) / 0x3 * (parseInt(_0xac7e0c(0x19e)) / 0x4) + -parseInt(_0xac7e0c(0x19c)) / 0x5 * (-parseInt(_0xac7e0c(0x18c)) / 0x6) + -parseInt(_0xac7e0c(0x197)) / 0x7 + -parseInt(_0xac7e0c(0x195)) / 0x8 * (parseInt(_0xac7e0c(0x194)) / 0x9) + -parseInt(_0xac7e0c(0x193)) / 0xa * (parseInt(_0xac7e0c(0x199)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x473f, 0x43440));
var input = require('fs')[a0_0x1624f6(0x190)](a0_0x1624f6(0x19b), a0_0x1624f6(0x18d));
function a0_0x473f() {
    var _0x57233f = [
        'shift',
        '402734MNeUng',
        '56270sjnADu',
        '234RTSLpC',
        '152LceueW',
        'log',
        '2446472aeOgce',
        'replace',
        '55bgzhrh',
        'split',
        '/dev/stdin',
        '1065DZDELk',
        '595028pRJgNU',
        '265624sKfBbC',
        '13578EKxIKF',
        'utf8',
        'test',
        '3HLmkrA',
        'readFileSync'
    ];
    a0_0x473f = function () {
        return _0x57233f;
    };
    return a0_0x473f();
}
var Arr = input[a0_0x1624f6(0x198)](/\n$/, '')[a0_0x1624f6(0x19a)]('\x0a');
var n = Arr[a0_0x1624f6(0x191)]();
function a0_0x312d(tgeQmR, key) {
    var stringArray = a0_0x473f();
    a0_0x312d = function (index, key) {
        index = index - 0x18c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x312d(tgeQmR, key);
}
for (var i = 0x0; i < n; i++) {
    if (/^>'(=+)#\1~$/[a0_0x1624f6(0x18e)](Arr[i]))
        console[a0_0x1624f6(0x196)]('A');
    else if (/^>\^(Q=)+~~$/['test'](Arr[i]))
        console[a0_0x1624f6(0x196)]('B');
    else
        console[a0_0x1624f6(0x196)]('NA');
}