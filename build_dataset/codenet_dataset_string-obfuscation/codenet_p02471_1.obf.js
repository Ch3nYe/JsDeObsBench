var a0_0x3b2cff = a0_0x4f77;
(function (stringArrayFunction, comparisonValue) {
    var _0x59fe99 = a0_0x4f77;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x59fe99(0x1f2)) / 0x1 + parseInt(_0x59fe99(0x1f9)) / 0x2 * (-parseInt(_0x59fe99(0x1f6)) / 0x3) + parseInt(_0x59fe99(0x1ed)) / 0x4 + -parseInt(_0x59fe99(0x1ef)) / 0x5 * (parseInt(_0x59fe99(0x1ec)) / 0x6) + parseInt(_0x59fe99(0x1f1)) / 0x7 * (-parseInt(_0x59fe99(0x1f7)) / 0x8) + parseInt(_0x59fe99(0x1fd)) / 0x9 + parseInt(_0x59fe99(0x1ee)) / 0xa * (parseInt(_0x59fe99(0x1f5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1372, 0xc1c10));
function euc(a, b) {
    var _0x11dfc = a0_0x4f77;
    var r0 = a;
    var r1 = b;
    var x0 = 0x1;
    var x1 = 0x0;
    var y0 = 0x0;
    var y1 = 0x1;
    while (r1 > 0x0) {
        var q = Math[_0x11dfc(0x1fc)](r0 / r1);
        var r2 = r0 % r1;
        var x2 = x0 - q * x1;
        var y2 = y0 - q * y1;
        r0 = r1;
        r1 = r2;
        x0 = x1;
        x1 = x2;
        y0 = y1;
        y1 = y2;
    }
    return [
        x0,
        y0
    ];
}
var input = require('fs')[a0_0x3b2cff(0x1f8)](a0_0x3b2cff(0x1fb), a0_0x3b2cff(0x1f0))[a0_0x3b2cff(0x1fe)]();
var nums = input[a0_0x3b2cff(0x1f3)]('\x20')['map'](function (num) {
    return +num;
});
function a0_0x4f77(BhPdAZ, key) {
    var stringArray = a0_0x1372();
    a0_0x4f77 = function (index, key) {
        index = index - 0x1ec;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f77(BhPdAZ, key);
}
var a = nums[0x0];
var b = nums[0x1];
console[a0_0x3b2cff(0x1fa)](euc(a, b)[a0_0x3b2cff(0x1f4)]('\x20'));
function a0_0x1372() {
    var _0x937c0 = [
        '27102lRFTym',
        '3234396jWeCHW',
        '18042670ItfxQQ',
        '200uWxXxL',
        'utf8',
        '21BvNMKW',
        '53916SaESpc',
        'split',
        'join',
        '11PPRSwv',
        '27DyBnml',
        '4217384dEtvzf',
        'readFileSync',
        '157078zvIDlS',
        'log',
        '/dev/stdin',
        'floor',
        '5362956xjJwDv',
        'trim'
    ];
    a0_0x1372 = function () {
        return _0x937c0;
    };
    return a0_0x1372();
}