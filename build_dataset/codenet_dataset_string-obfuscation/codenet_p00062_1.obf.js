var a0_0x172af7 = a0_0x5418;
(function (stringArrayFunction, comparisonValue) {
    var _0x4acf62 = a0_0x5418;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4acf62(0x176)) / 0x1 * (parseInt(_0x4acf62(0x17b)) / 0x2) + -parseInt(_0x4acf62(0x183)) / 0x3 + parseInt(_0x4acf62(0x180)) / 0x4 * (parseInt(_0x4acf62(0x177)) / 0x5) + -parseInt(_0x4acf62(0x184)) / 0x6 * (-parseInt(_0x4acf62(0x178)) / 0x7) + parseInt(_0x4acf62(0x17c)) / 0x8 * (parseInt(_0x4acf62(0x172)) / 0x9) + -parseInt(_0x4acf62(0x173)) / 0xa * (parseInt(_0x4acf62(0x174)) / 0xb) + -parseInt(_0x4acf62(0x17d)) / 0xc * (parseInt(_0x4acf62(0x171)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x45a8, 0xc7cd3));
function a0_0x5418(pBNJRz, key) {
    var stringArray = a0_0x45a8();
    a0_0x5418 = function (index, key) {
        index = index - 0x171;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5418(pBNJRz, key);
}
var input = require('fs')[a0_0x172af7(0x175)]('/dev/stdin', a0_0x172af7(0x181));
function a0_0x45a8() {
    var _0x143f40 = [
        '1488LZrRfd',
        'log',
        'push',
        '4PDSewe',
        'utf8',
        'split',
        '3628704NfqBEo',
        '24DlijxD',
        '87334ovFzDv',
        '5163219xFtTlx',
        '5620kKuktO',
        '22418jBwhsX',
        'readFileSync',
        '28NKQgyU',
        '5926885wbhYbR',
        '2695973gfKuwP',
        'length',
        'shift',
        '9502mMwpEn',
        '16CslliL'
    ];
    a0_0x45a8 = function () {
        return _0x143f40;
    };
    return a0_0x45a8();
}
var lines = input[a0_0x172af7(0x182)]('\x0a');
var line;
while (line = lines[a0_0x172af7(0x17a)]()) {
    var nums = line['split']('')['map'](function (n) {
        return +n;
    });
    var n = nums[a0_0x172af7(0x179)];
    while (n > 0x1) {
        var a = [];
        for (var i = 0x0; i < n - 0x1; i++) {
            a[a0_0x172af7(0x17f)]((nums[i] + nums[i + 0x1]) % 0xa);
        }
        n--;
        nums = a;
    }
    console[a0_0x172af7(0x17e)](nums[0x0]);
}