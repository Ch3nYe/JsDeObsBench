function a0_0x11f8() {
    var _0x413e0e = [
        '/dev/stdin',
        '2218615luvpHD',
        '383628ONnsTe',
        '16RTzCVH',
        'utf8',
        '25659WuEeey',
        '622842LYayGM',
        'split',
        'floor',
        'log',
        '2392NSsJNY',
        '347360GlFpFo',
        '256332saUQhC',
        '394800EqgjfD'
    ];
    a0_0x11f8 = function () {
        return _0x413e0e;
    };
    return a0_0x11f8();
}
var a0_0x31b04c = a0_0x4fa1;
(function (stringArrayFunction, comparisonValue) {
    var _0x27269d = a0_0x4fa1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x27269d(0x174)) / 0x1 + parseInt(_0x27269d(0x175)) / 0x2 + -parseInt(_0x27269d(0x178)) / 0x3 + -parseInt(_0x27269d(0x179)) / 0x4 * (parseInt(_0x27269d(0x173)) / 0x5) + parseInt(_0x27269d(0x17c)) / 0x6 + -parseInt(_0x27269d(0x177)) / 0x7 + -parseInt(_0x27269d(0x172)) / 0x8 * (-parseInt(_0x27269d(0x17b)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x11f8, 0x2aa17));
function Main(input) {
    var _0x45b1f5 = a0_0x4fa1;
    var tax = 1.08;
    var invalid = ':(';
    var input = input[_0x45b1f5(0x17d)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var x = Math['floor'](n / tax);
    var reverse_n = Math[_0x45b1f5(0x17e)](x * tax);
    if (n == reverse_n) {
        console[_0x45b1f5(0x171)](x);
        return;
    }
    var x_u = x + 0x1;
    if (Math[_0x45b1f5(0x17e)](x_u * tax) == n) {
        console[_0x45b1f5(0x171)](x_u);
        return;
    }
    var x_u2 = x + 0x2;
    if (Math[_0x45b1f5(0x17e)](x_u2 * tax) == n) {
        console[_0x45b1f5(0x171)](x_u2);
        return;
    }
    var x_d = x - 0x1;
    if (Math[_0x45b1f5(0x17e)](x_d * tax) == n) {
        console[_0x45b1f5(0x171)](x_d);
        return;
    }
    var x_d = x - 0x2;
    if (Math[_0x45b1f5(0x17e)](x_d * tax) == n) {
        console[_0x45b1f5(0x171)](x_d);
        return;
    }
    console[_0x45b1f5(0x171)](invalid);
}
function a0_0x4fa1(imtpYu, key) {
    var stringArray = a0_0x11f8();
    a0_0x4fa1 = function (index, key) {
        index = index - 0x171;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fa1(imtpYu, key);
}
Main(require('fs')['readFileSync'](a0_0x31b04c(0x176), a0_0x31b04c(0x17a)));