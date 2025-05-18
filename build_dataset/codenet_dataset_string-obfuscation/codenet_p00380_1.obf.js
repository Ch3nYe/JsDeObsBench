var a0_0x8209a5 = a0_0xd72d;
(function (stringArrayFunction, comparisonValue) {
    var _0x285803 = a0_0xd72d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x285803(0x101)) / 0x1 * (parseInt(_0x285803(0x100)) / 0x2) + -parseInt(_0x285803(0x102)) / 0x3 + -parseInt(_0x285803(0xf3)) / 0x4 + parseInt(_0x285803(0xfe)) / 0x5 * (-parseInt(_0x285803(0xfa)) / 0x6) + parseInt(_0x285803(0xfb)) / 0x7 * (parseInt(_0x285803(0xf8)) / 0x8) + parseInt(_0x285803(0xee)) / 0x9 * (-parseInt(_0x285803(0xff)) / 0xa) + parseInt(_0x285803(0xf9)) / 0xb * (parseInt(_0x285803(0xfc)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x261e, 0x4dd6b));
var input = require('fs')[a0_0x8209a5(0xec)](a0_0x8209a5(0xf0), a0_0x8209a5(0xf4));
var arr = input[a0_0x8209a5(0xef)]()[a0_0x8209a5(0xf7)]('\x0a');
var n = arr[a0_0x8209a5(0xfd)]() - 0x0;
function a0_0xd72d(vXvuRj, key) {
    var stringArray = a0_0x261e();
    a0_0xd72d = function (index, key) {
        index = index - 0xec;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd72d(vXvuRj, key);
}
var a = arr['shift']()['split']('\x20')['map'](Number);
var b = a['slice']()[a0_0x8209a5(0xf2)]((x, y) => x - y);
var q = arr[a0_0x8209a5(0xfd)]() - 0x0;
function a0_0x261e() {
    var _0x2633ab = [
        '121dutkZN',
        '78bymMhj',
        '838271BBWBWT',
        '1891116VRGwWy',
        'shift',
        '53985BANyss',
        '1210dtlMQV',
        '2JATjvB',
        '582611YGlboA',
        '551904yvMTOE',
        'map',
        'readFileSync',
        'log',
        '32733ZfdivB',
        'trim',
        '/dev/stdin',
        'keys',
        'sort',
        '1228740FXPVKd',
        'utf8',
        'length',
        'unshift',
        'split',
        '16thAptW'
    ];
    a0_0x261e = function () {
        return _0x2633ab;
    };
    return a0_0x261e();
}
var xy = arr[a0_0x8209a5(0x103)](v => v[a0_0x8209a5(0xf7)]('\x20')[a0_0x8209a5(0x103)](Number)['map'](v => v - 0x1));
xy[a0_0x8209a5(0xf6)]([
    0x0,
    0x0
]);
var A = {};
var B = {};
for (var i = 0x0; i < a[a0_0x8209a5(0xf5)]; i++) {
    if (a[i] != b[i]) {
        A[i] = a[i];
        B[i] = b[i];
    }
}
var BB = '';
for (var k in B)
    BB += B[k];
var flag = ![];
for (var i = 0x0; i <= q; i++) {
    [A[xy[i][0x0]], A[xy[i][0x1]]] = [
        A[xy[i][0x1]],
        A[xy[i][0x0]]
    ];
    var AA = '';
    for (var k in A)
        AA += A[k];
    if (AA == BB) {
        flag = !![];
        break;
    }
}
if (Object[a0_0x8209a5(0xf1)](A)[a0_0x8209a5(0xf5)] == 0x0)
    console[a0_0x8209a5(0xed)](0x0);
else if (flag)
    console[a0_0x8209a5(0xed)](i);
else
    console[a0_0x8209a5(0xed)](-0x1);