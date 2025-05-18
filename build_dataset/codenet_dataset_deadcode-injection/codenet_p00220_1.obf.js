function a0_0x4cdf(wuPaSF, key) {
    var stringArray = a0_0x1210();
    a0_0x4cdf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cdf(wuPaSF, key);
}
var a0_0x389348 = a0_0x4cdf;
var input = require('fs')['readFileSync'](a0_0x389348(0x0), a0_0x389348(0x1));
function a0_0x1210() {
    var _0x1d2179 = [
        '/dev/stdin',
        'utf8',
        'split',
        'push',
        'shift',
        'length',
        'log'
    ];
    a0_0x1210 = function () {
        return _0x1d2179;
    };
    return a0_0x1210();
}
var Arr = input['replace'](/\n$/, '')[a0_0x389348(0x2)]('\x0a');
var nums = [];
for (var i = 0x7; i >= -0x4; i--) {
    nums[a0_0x389348(0x3)](Math['pow'](0x2, i));
}
while (!![]) {
    var x = Arr[a0_0x389348(0x4)]() - 0x0;
    if (x == -0x1)
        break;
    var str = '';
    for (var i = 0x0; i < nums[a0_0x389348(0x5)]; i++) {
        if (x >= nums[i]) {
            x -= nums[i];
            str += '1';
        } else {
            str += '0';
        }
        if (i == 0x7)
            str += '.';
    }
    if (x !== 0x0)
        str = 'NA';
    console[a0_0x389348(0x6)](str);
}