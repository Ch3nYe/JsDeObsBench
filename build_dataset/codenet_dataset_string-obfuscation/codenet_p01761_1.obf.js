var a0_0x5812de = a0_0x1318;
(function (stringArrayFunction, comparisonValue) {
    var _0x4011e1 = a0_0x1318;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4011e1(0xe9)) / 0x1 * (-parseInt(_0x4011e1(0xef)) / 0x2) + parseInt(_0x4011e1(0xeb)) / 0x3 + parseInt(_0x4011e1(0xea)) / 0x4 * (parseInt(_0x4011e1(0xed)) / 0x5) + parseInt(_0x4011e1(0xf3)) / 0x6 + -parseInt(_0x4011e1(0xf5)) / 0x7 + parseInt(_0x4011e1(0xf1)) / 0x8 * (parseInt(_0x4011e1(0xf0)) / 0x9) + -parseInt(_0x4011e1(0xf6)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x17d9, 0x3c895));
function a0_0x17d9() {
    var _0x59903a = [
        '/dev/stdin',
        'shift',
        'forEach',
        '917cfxmHv',
        '2560efUJdD',
        '1289142kDIsWQ',
        'push',
        '1340euglSd',
        'utf8',
        '76mRrAOG',
        '318177yDHods',
        '8uFXSWv',
        'test',
        '1600896YgqUcd',
        'getTime',
        '2962995lHIAdE',
        '2670070nMiNht',
        'log',
        'readFileSync',
        'split'
    ];
    a0_0x17d9 = function () {
        return _0x59903a;
    };
    return a0_0x17d9();
}
var input = require('fs')[a0_0x5812de(0xf8)](a0_0x5812de(0xfa), a0_0x5812de(0xee));
function a0_0x1318(aOuAFR, key) {
    var stringArray = a0_0x17d9();
    a0_0x1318 = function (index, key) {
        index = index - 0xe9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1318(aOuAFR, key);
}
var arr = input['trim']()[a0_0x5812de(0xf9)]('\x0a');
var n = arr[a0_0x5812de(0xfb)]() - 0x0;
var book = [];
for (var i = 0x0; i < n; i++)
    book[i] = arr[a0_0x5812de(0xfb)]();
var q = arr[a0_0x5812de(0xfb)]() - 0x0;
for (var i = 0x0; i < q; i++) {
    if (i != 0x0)
        console[a0_0x5812de(0xf7)]('');
    var ans = [];
    var v = arr[a0_0x5812de(0xfb)]()[a0_0x5812de(0xf9)]('\x20');
    var a = v[0x0];
    var b = v[0x1];
    var c = v[0x2] != '*' ? new Date(v[0x2])[a0_0x5812de(0xf4)]() : '*';
    var d = v[0x3] != '*' ? new Date(v[0x3])[a0_0x5812de(0xf4)]() : '*';
    book[a0_0x5812de(0xfc)](function (V) {
        var _0x6cef9f = a0_0x5812de;
        V = V[_0x6cef9f(0xf9)]('\x20');
        var A = V[0x0];
        var B = V[0x1];
        var C = new Date(V[0x2])[_0x6cef9f(0xf4)]();
        var flag = !![];
        if (a != '*') {
            var regex = new RegExp(a);
            if (regex[_0x6cef9f(0xf2)](A) == ![])
                flag = ![];
        }
        if (b != '*') {
            var regex = new RegExp(b);
            if (regex[_0x6cef9f(0xf2)](B) == ![])
                flag = ![];
        }
        if (c != '*') {
            if (c > C)
                flag = ![];
        }
        if (d != '*') {
            if (d < C)
                flag = ![];
        }
        if (flag)
            ans[_0x6cef9f(0xec)](A);
    });
    ans[a0_0x5812de(0xfc)](function (value) {
        var _0x57809c = a0_0x5812de;
        console[_0x57809c(0xf7)](value);
    });
}