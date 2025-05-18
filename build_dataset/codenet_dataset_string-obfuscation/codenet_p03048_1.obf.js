function a0_0x23e4(dSfqUJ, key) {
    var stringArray = a0_0x2539();
    a0_0x23e4 = function (index, key) {
        index = index - 0x18f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23e4(dSfqUJ, key);
}
var a0_0x3e5fb4 = a0_0x23e4;
function a0_0x2539() {
    var _0x24186a = [
        '1304309wNAUcq',
        'log',
        '31857AhtIDe',
        '182iLPOWp',
        '3965643wKpuDs',
        'split',
        'utf8',
        '15825qIoORB',
        '122lgOCgd',
        '449720xekaOl',
        '102lzLBCt',
        '22776840iDzDRp',
        'readFileSync',
        '6643920MNRTCD'
    ];
    a0_0x2539 = function () {
        return _0x24186a;
    };
    return a0_0x2539();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x22b3f7 = a0_0x23e4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x22b3f7(0x196)) / 0x1 + parseInt(_0x22b3f7(0x190)) / 0x2 * (-parseInt(_0x22b3f7(0x198)) / 0x3) + parseInt(_0x22b3f7(0x195)) / 0x4 + parseInt(_0x22b3f7(0x18f)) / 0x5 * (-parseInt(_0x22b3f7(0x192)) / 0x6) + -parseInt(_0x22b3f7(0x199)) / 0x7 * (parseInt(_0x22b3f7(0x191)) / 0x8) + parseInt(_0x22b3f7(0x19a)) / 0x9 + parseInt(_0x22b3f7(0x193)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2539, 0xde9d4));
function main(input) {
    var _0x216ba0 = a0_0x23e4;
    const args = input[_0x216ba0(0x19b)]('\x20');
    const R = parseInt(args[0x0], 0xa), G = parseInt(args[0x1], 0xa), B = parseInt(args[0x2], 0xa), N = parseInt(args[0x3], 0xa);
    var s = 0x0;
    var k = 0x0;
    for (var i = 0x0; i <= (N / R | 0x0); ++i) {
        for (var j = 0x0; j <= (N / G | 0x0); ++j) {
            k = (N - i * R - j * G) / B | 0x0;
            if (k >= 0x0 && i * R + j * G + k * B == N)
                ++s;
        }
    }
    console[_0x216ba0(0x197)](s);
}
main(require('fs')[a0_0x3e5fb4(0x194)]('/dev/stdin', a0_0x3e5fb4(0x19c)));