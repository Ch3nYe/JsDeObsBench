function a0_0x3f28() {
    var _0x4e20d9 = [
        '/dev/stdin',
        '12MmtOEJ',
        '1610360pwFhHM',
        '3504495BCPbGb',
        '440541mRthpC',
        'readFileSync',
        '9jhpbqW',
        'split',
        '6123100fUSclX',
        '7XOBOSK',
        '7370982PAiGag',
        '3923656wfRerA',
        'indexOf',
        '0\x200',
        'utf8',
        '195193vSknWj',
        'length',
        'trim'
    ];
    a0_0x3f28 = function () {
        return _0x4e20d9;
    };
    return a0_0x3f28();
}
var a0_0x246f82 = a0_0x2138;
(function (stringArrayFunction, comparisonValue) {
    var _0x160585 = a0_0x2138;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x160585(0x144)) / 0x1 * (parseInt(_0x160585(0x148)) / 0x2) + parseInt(_0x160585(0x139)) / 0x3 + -parseInt(_0x160585(0x140)) / 0x4 + parseInt(_0x160585(0x14a)) / 0x5 + -parseInt(_0x160585(0x13f)) / 0x6 + -parseInt(_0x160585(0x13e)) / 0x7 * (-parseInt(_0x160585(0x149)) / 0x8) + parseInt(_0x160585(0x13b)) / 0x9 * (parseInt(_0x160585(0x13d)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f28, 0x981fa));
var input = require('fs')[a0_0x246f82(0x13a)](a0_0x246f82(0x147), a0_0x246f82(0x143));
var Arr = input[a0_0x246f82(0x146)]()['split']('\x0a');
function a0_0x2138(wQWUdm, key) {
    var stringArray = a0_0x3f28();
    a0_0x2138 = function (index, key) {
        index = index - 0x139;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2138(wQWUdm, key);
}
for (var i = 0x0; i < Arr[a0_0x246f82(0x145)]; i++) {
    if (Arr[i] == a0_0x246f82(0x142))
        break;
    var arr = Arr[i][a0_0x246f82(0x13c)]('\x20');
    var x = arr[0x0]['split']('');
    var y = arr[0x1][a0_0x246f82(0x13c)]('');
    var h = 0x0;
    var b = 0x0;
    for (var j = 0x0; j < 0x4; j++) {
        if (x[j] == y[j]) {
            h++;
        } else if (y[a0_0x246f82(0x141)](x[j]) != -0x1) {
            b++;
        }
    }
    console['log'](h + '\x20' + b);
}