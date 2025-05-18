var a0_0x4eae5b = a0_0x2963;
(function (stringArrayFunction, comparisonValue) {
    var _0x516448 = a0_0x2963;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x516448(0x7f)) / 0x1 + parseInt(_0x516448(0x71)) / 0x2 + -parseInt(_0x516448(0x75)) / 0x3 * (-parseInt(_0x516448(0x79)) / 0x4) + parseInt(_0x516448(0x81)) / 0x5 + parseInt(_0x516448(0x70)) / 0x6 + parseInt(_0x516448(0x6e)) / 0x7 + -parseInt(_0x516448(0x76)) / 0x8 * (parseInt(_0x516448(0x77)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1be1, 0x3b91b));
function seach(x) {
    var _0x1b4d96 = a0_0x2963;
    var flag = !![];
    var cnt = 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < ary[_0x1b4d96(0x7a)]; i++) {
        if (x < ary[i]) {
            flag = ![];
            break;
        } else if (sum + ary[i] == x) {
            sum = 0x0;
            cnt++;
        } else if (sum + ary[i] > x) {
            sum = ary[i];
            cnt++;
        } else if (sum + ary[i] < x) {
            sum += ary[i];
        }
        if (cnt == m) {
            flag = ![];
            break;
        }
    }
    return flag;
}
var input = require('fs')[a0_0x4eae5b(0x7e)](a0_0x4eae5b(0x74), a0_0x4eae5b(0x7d));
var arr = input[a0_0x4eae5b(0x7c)]()[a0_0x4eae5b(0x80)]('\x0a');
function a0_0x1be1() {
    var _0x3e9ab5 = [
        '1936554qkjFUm',
        '9610poUpuA',
        '0\x200',
        'push',
        '/dev/stdin',
        '3BkXbZd',
        '27952AgoRsw',
        '1773JGgfaW',
        'map',
        '270188lfVSxa',
        'length',
        'log',
        'trim',
        'utf8',
        'readFileSync',
        '22471fwqfNl',
        'split',
        '2210075AVaJhY',
        '509012HytDEx',
        'shift'
    ];
    a0_0x1be1 = function () {
        return _0x3e9ab5;
    };
    return a0_0x1be1();
}
function a0_0x2963(OnGXGz, key) {
    var stringArray = a0_0x1be1();
    a0_0x2963 = function (index, key) {
        index = index - 0x6e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2963(OnGXGz, key);
}
while (!![]) {
    var mn = arr[a0_0x4eae5b(0x6f)]();
    if (mn == a0_0x4eae5b(0x72))
        break;
    mn = mn[a0_0x4eae5b(0x80)]('\x20')[a0_0x4eae5b(0x78)](Number);
    var m = mn[0x0];
    var n = mn[0x1];
    var ary = [];
    while (n--)
        ary[a0_0x4eae5b(0x73)](arr[a0_0x4eae5b(0x6f)]() - 0x0);
    var L = 0x0;
    var R = 0x16e360;
    while (!![]) {
        var middle = Math['floor']((L + R) / 0x2);
        if (seach(middle)) {
            R = middle - 0x1;
        } else {
            L = middle + 0x1;
        }
        if (L > R)
            break;
    }
    console[a0_0x4eae5b(0x7b)](R + 0x1);
}