var a0_0x4fe932 = a0_0x57a0;
function a0_0xf078() {
    var _0x34273e = [
        '1227GfBjgr',
        '7924rumgCN',
        '21ObBjBE',
        'pow',
        '1106566CKVCiR',
        '4877580uVKmzC',
        'push',
        '3351895IPxYJr',
        '2057368CqCxXq',
        'split',
        'utf8',
        'replace',
        '/dev/stdin',
        '9329436ozeaYr',
        'length',
        'shift',
        '591202FEhcGH',
        '6dybDqU',
        'readFileSync'
    ];
    a0_0xf078 = function () {
        return _0x34273e;
    };
    return a0_0xf078();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x47fab4 = a0_0x57a0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x47fab4(0x198)) / 0x1 + parseInt(_0x47fab4(0x18c)) / 0x2 + parseInt(_0x47fab4(0x19b)) / 0x3 * (parseInt(_0x47fab4(0x19c)) / 0x4) + -parseInt(_0x47fab4(0x18f)) / 0x5 * (parseInt(_0x47fab4(0x199)) / 0x6) + -parseInt(_0x47fab4(0x19d)) / 0x7 * (-parseInt(_0x47fab4(0x190)) / 0x8) + -parseInt(_0x47fab4(0x195)) / 0x9 + -parseInt(_0x47fab4(0x18d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xf078, 0x81c1e));
var input = require('fs')[a0_0x4fe932(0x19a)](a0_0x4fe932(0x194), a0_0x4fe932(0x192));
var Arr = input[a0_0x4fe932(0x193)](/\n$/, '')[a0_0x4fe932(0x191)]('\x0a');
var nums = [];
for (var i = 0x7; i >= -0x4; i--) {
    nums[a0_0x4fe932(0x18e)](Math[a0_0x4fe932(0x19e)](0x2, i));
}
function a0_0x57a0(bIRZYh, key) {
    var stringArray = a0_0xf078();
    a0_0x57a0 = function (index, key) {
        index = index - 0x18c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x57a0(bIRZYh, key);
}
while (!![]) {
    var x = Arr[a0_0x4fe932(0x197)]() - 0x0;
    if (x == -0x1)
        break;
    var str = '';
    for (var i = 0x0; i < nums[a0_0x4fe932(0x196)]; i++) {
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
    console['log'](str);
}