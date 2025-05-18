var a0_0x2ac784 = a0_0x4c65;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b452f = a0_0x4c65;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b452f(0x123)) / 0x1 + -parseInt(_0x5b452f(0x11a)) / 0x2 + parseInt(_0x5b452f(0x119)) / 0x3 + parseInt(_0x5b452f(0x116)) / 0x4 + -parseInt(_0x5b452f(0x121)) / 0x5 * (parseInt(_0x5b452f(0x11d)) / 0x6) + -parseInt(_0x5b452f(0x11c)) / 0x7 * (parseInt(_0x5b452f(0x11b)) / 0x8) + -parseInt(_0x5b452f(0x114)) / 0x9 * (-parseInt(_0x5b452f(0x11f)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2fc9, 0x7927d));
var input = require('fs')[a0_0x2ac784(0x113)](a0_0x2ac784(0x122), a0_0x2ac784(0x124));
var arr = input[a0_0x2ac784(0x115)]()[a0_0x2ac784(0x117)]('\x20')[a0_0x2ac784(0x11e)](Number);
var a = arr[0x0];
function a0_0x2fc9() {
    var _0x503db1 = [
        'map',
        '764690bOkdEN',
        'yes',
        '85310WcfvXX',
        '/dev/stdin',
        '642695nOVqUG',
        'utf8',
        'readFileSync',
        '90LWnIrX',
        'trim',
        '2056860TrIfJP',
        'split',
        'log',
        '1875864FSeRqz',
        '1243488MxpogW',
        '1160lURzwx',
        '37681QSsUBC',
        '228VBZMue'
    ];
    a0_0x2fc9 = function () {
        return _0x503db1;
    };
    return a0_0x2fc9();
}
function a0_0x4c65(SWznhL, key) {
    var stringArray = a0_0x2fc9();
    a0_0x4c65 = function (index, key) {
        index = index - 0x113;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c65(SWznhL, key);
}
var b = arr[0x1];
var c = arr[0x2];
var d = arr[0x3];
if (a == b && c == d)
    console[a0_0x2ac784(0x118)](a0_0x2ac784(0x120));
else if (a == c && b == d)
    console[a0_0x2ac784(0x118)]('yes');
else if (a == d && b == c)
    console['log']('yes');
else
    console[a0_0x2ac784(0x118)]('no');