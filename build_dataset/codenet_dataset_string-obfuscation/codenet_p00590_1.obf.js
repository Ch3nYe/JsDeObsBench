var a0_0x24ced0 = a0_0x10d5;
function a0_0x10d5(apgZTZ, key) {
    var stringArray = a0_0xd75b();
    a0_0x10d5 = function (index, key) {
        index = index - 0x113;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10d5(apgZTZ, key);
}
function a0_0xd75b() {
    var _0x112d52 = [
        '1312011vRHLQg',
        'sqrt',
        '5548472CNgous',
        '214482rTdqBy',
        '/dev/stdin',
        '22vbjEvx',
        'map',
        'readFileSync',
        '9onKNzW',
        '1039390xTcuSB',
        'trim',
        '31025gwKCdz',
        '4OQDBvm',
        'length',
        'utf8',
        '4869004mlJYsb',
        '2885380tHLkos',
        'push',
        'floor',
        'split'
    ];
    a0_0xd75b = function () {
        return _0x112d52;
    };
    return a0_0xd75b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x340c2f = a0_0x10d5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x340c2f(0x120)) / 0x1 * (-parseInt(_0x340c2f(0x11a)) / 0x2) + -parseInt(_0x340c2f(0x115)) / 0x3 + -parseInt(_0x340c2f(0x121)) / 0x4 * (-parseInt(_0x340c2f(0x125)) / 0x5) + -parseInt(_0x340c2f(0x118)) / 0x6 + -parseInt(_0x340c2f(0x124)) / 0x7 + parseInt(_0x340c2f(0x117)) / 0x8 + parseInt(_0x340c2f(0x11d)) / 0x9 * (parseInt(_0x340c2f(0x11e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd75b, 0x85979));
function prime(max) {
    var _0xd5672e = a0_0x10d5;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0xd5672e(0x113)](Math[_0xd5672e(0x116)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[arr[i]] = !![];
    }
    return result;
}
var p = prime(0x2710);
var input = require('fs')[a0_0x24ced0(0x11c)](a0_0x24ced0(0x119), a0_0x24ced0(0x123));
var Arr = input[a0_0x24ced0(0x11f)]()[a0_0x24ced0(0x114)]('\x0a')[a0_0x24ced0(0x11b)](Number);
for (var i = 0x0; i < Arr[a0_0x24ced0(0x122)]; i++) {
    var a = Arr[i];
    var A = [];
    var B = [];
    for (var j = 0x1; j <= a; j++)
        A['push'](j);
    for (var j = a; j >= 0x1; j--)
        B[a0_0x24ced0(0x126)](j);
    var pair = 0x0;
    for (var j = 0x0; j < a; j++) {
        if (p['hasOwnProperty'](A[j]) && p['hasOwnProperty'](B[j]))
            pair++;
    }
    console['log'](pair);
}