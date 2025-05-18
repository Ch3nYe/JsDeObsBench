function a0_0xd8ab() {
    var _0x1e19ed = [
        '25512NAxhXd',
        'length',
        'Yes',
        '44910173IrOIwR',
        '6550telxoR',
        '845973nwdVHX',
        '2000598wrdkYc',
        '679vDsCiR',
        'shift',
        '205DkhBLd',
        '110CBERWu',
        'split',
        'log',
        '64hbDqWN',
        'utf8',
        '103384cGhJRn',
        '100580QfYbtb'
    ];
    a0_0xd8ab = function () {
        return _0x1e19ed;
    };
    return a0_0xd8ab();
}
var a0_0x33fbda = a0_0x2e2e;
(function (stringArrayFunction, comparisonValue) {
    var _0x320a64 = a0_0x2e2e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x320a64(0x9b)) / 0x1 + -parseInt(_0x320a64(0x93)) / 0x2 * (-parseInt(_0x320a64(0x97)) / 0x3) + -parseInt(_0x320a64(0x96)) / 0x4 * (parseInt(_0x320a64(0x8f)) / 0x5) + -parseInt(_0x320a64(0x9d)) / 0x6 + -parseInt(_0x320a64(0x8d)) / 0x7 * (parseInt(_0x320a64(0x95)) / 0x8) + -parseInt(_0x320a64(0x9c)) / 0x9 * (parseInt(_0x320a64(0x90)) / 0xa) + parseInt(_0x320a64(0x9a)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd8ab, 0xad3a9));
function a0_0x2e2e(ketSal, key) {
    var stringArray = a0_0xd8ab();
    a0_0x2e2e = function (index, key) {
        index = index - 0x8d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e2e(ketSal, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x33fbda(0x94));
var Arr = input['trim']()[a0_0x33fbda(0x91)]('\x0a');
while (!![]) {
    var str = Arr[a0_0x33fbda(0x8e)]();
    if (str == '#')
        break;
    var p = 'A';
    for (var i = 0x0; i < str[a0_0x33fbda(0x98)]; i++) {
        var s = str[i] - 0x0;
        if (p == 'A' && s === 0x0)
            p = 'X';
        else if (p == 'A' && s === 0x1)
            p = 'Y';
        else if (p == 'B' && s === 0x0)
            p = 'Y';
        else if (p == 'B' && s === 0x1)
            p = 'X';
        else if (p == 'W' && s === 0x0)
            p = 'B';
        else if (p == 'W' && s === 0x1)
            p = 'Y';
        else if (p == 'X' && s === 0x0)
            p = '';
        else if (p == 'X' && s === 0x1)
            p = 'Z';
        else if (p == 'Y' && s === 0x0)
            p = 'X';
        else if (p == 'Y' && s === 0x1)
            p = '';
        else if (p == 'Z' && s === 0x0)
            p = 'W';
        else if (p == 'Z' && s === 0x1)
            p = 'B';
    }
    console[a0_0x33fbda(0x92)](p == 'B' ? a0_0x33fbda(0x99) : 'No');
}