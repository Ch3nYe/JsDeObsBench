function a0_0x43de() {
    var _0x4db767 = [
        '350uSnpsc',
        '1053608eAICOV',
        '6167497qkOvvc',
        'readFileSync',
        'push',
        '2684925SOHWyr',
        '4491120BofKcn',
        'utf8',
        'shift',
        'split',
        '162ggLbgB',
        '208985htZDzw',
        '192QWUUog',
        '8VUkaXh',
        '204457CCqNzG',
        '/dev/stdin',
        '1542vbQUWq',
        'length'
    ];
    a0_0x43de = function () {
        return _0x4db767;
    };
    return a0_0x43de();
}
var a0_0x488a3b = a0_0x63b5;
(function (stringArrayFunction, comparisonValue) {
    var _0x5a9934 = a0_0x63b5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5a9934(0xe2)) / 0x1 * (parseInt(_0x5a9934(0xdc)) / 0x2) + -parseInt(_0x5a9934(0xd8)) / 0x3 + parseInt(_0x5a9934(0xd3)) / 0x4 + -parseInt(_0x5a9934(0xdd)) / 0x5 * (-parseInt(_0x5a9934(0xde)) / 0x6) + parseInt(_0x5a9934(0xd4)) / 0x7 * (parseInt(_0x5a9934(0xdf)) / 0x8) + parseInt(_0x5a9934(0xd7)) / 0x9 + -parseInt(_0x5a9934(0xd2)) / 0xa * (parseInt(_0x5a9934(0xe0)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x43de, 0xb8f73));
function binarySearch(A, key) {
    var _0x2a98bc = a0_0x63b5;
    var left = 0x0;
    var right = A[_0x2a98bc(0xe3)] - 0x1;
    var cnt = 0x0;
    while (!![]) {
        cnt++;
        if (left == right)
            break;
        var mid = Math['floor']((left + right) / 0x2);
        if (A[mid] == key)
            return cnt;
        if (key < A[mid])
            right = mid;
        else
            left = mid + 0x1;
    }
    return cnt;
}
var input = require('fs')[a0_0x488a3b(0xd5)](a0_0x488a3b(0xe1), a0_0x488a3b(0xd9));
function a0_0x63b5(VDsHgI, key) {
    var stringArray = a0_0x43de();
    a0_0x63b5 = function (index, key) {
        index = index - 0xd2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x63b5(VDsHgI, key);
}
var Arr = input['trim']()[a0_0x488a3b(0xdb)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x488a3b(0xda)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr[a0_0x488a3b(0xd6)](Arr[a0_0x488a3b(0xda)]() - 0x0);
    console['log'](binarySearch(arr, Arr[a0_0x488a3b(0xda)]() - 0x0));
}