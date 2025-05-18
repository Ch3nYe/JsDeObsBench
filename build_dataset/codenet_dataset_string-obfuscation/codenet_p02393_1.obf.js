var a0_0x38e889 = a0_0x4dc2;
function a0_0x169e() {
    var _0x478fe4 = [
        '28352mtaKMS',
        '50rWzFPP',
        '3YHuoWD',
        '1974177RFsevS',
        '575HpuGBQ',
        '88FdIIih',
        '/dev/stdin',
        'split',
        '9902760owwHUn',
        '591762AbHxia',
        '49WjMMgl',
        'utf8',
        '108555zQCozV',
        '1650900WJjELL',
        '%d\x20%d\x20%d',
        '435718oBJUis'
    ];
    a0_0x169e = function () {
        return _0x478fe4;
    };
    return a0_0x169e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x584bb5 = a0_0x4dc2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x584bb5(0x89)) / 0x1 * (parseInt(_0x584bb5(0x86)) / 0x2) + -parseInt(_0x584bb5(0x93)) / 0x3 + -parseInt(_0x584bb5(0x87)) / 0x4 * (-parseInt(_0x584bb5(0x8b)) / 0x5) + -parseInt(_0x584bb5(0x90)) / 0x6 * (parseInt(_0x584bb5(0x91)) / 0x7) + parseInt(_0x584bb5(0x8f)) / 0x8 + parseInt(_0x584bb5(0x8a)) / 0x9 * (-parseInt(_0x584bb5(0x88)) / 0xa) + -parseInt(_0x584bb5(0x8c)) / 0xb * (-parseInt(_0x584bb5(0x94)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x169e, 0xa5329));
function a0_0x4dc2(BZFWUH, key) {
    var stringArray = a0_0x169e();
    a0_0x4dc2 = function (index, key) {
        index = index - 0x85;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4dc2(BZFWUH, key);
}
var input = require('fs')['readFileSync'](a0_0x38e889(0x8d), a0_0x38e889(0x92));
var cnt, i, j;
input = input[a0_0x38e889(0x8e)]('\x20');
for (cnt = 0x0; cnt < 0x3; cnt++) {
    for (i = 0x0; i < 0x3; i++) {
        if (input[i] > input[i + 0x1]) {
            j = input[i];
            input[i] = input[i + 0x1];
            input[i + 0x1] = j;
        }
    }
}
console['log'](a0_0x38e889(0x85), input[0x0], input[0x1], input[0x2]);