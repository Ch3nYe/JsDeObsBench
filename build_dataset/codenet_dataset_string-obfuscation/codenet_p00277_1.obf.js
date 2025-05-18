function a0_0x4033() {
    var _0x4fb53e = [
        '2111530Ivytyh',
        '8aRrVNf',
        '70795egKvTq',
        '5551dmGbQm',
        '2LughfA',
        '236488LKcHfg',
        'trim',
        '1388061zxRMsr',
        'forEach',
        'split',
        'shift',
        'sort',
        '36SwtgSa',
        '4854344YsHuMZ',
        '528357XzCeGu',
        '4338kcRgzc',
        'map'
    ];
    a0_0x4033 = function () {
        return _0x4fb53e;
    };
    return a0_0x4033();
}
var a0_0x96032b = a0_0x46b6;
(function (stringArrayFunction, comparisonValue) {
    var _0x161f6c = a0_0x46b6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x161f6c(0x18f)) / 0x1 + -parseInt(_0x161f6c(0x18e)) / 0x2 * (-parseInt(_0x161f6c(0x187)) / 0x3) + -parseInt(_0x161f6c(0x185)) / 0x4 * (parseInt(_0x161f6c(0x18c)) / 0x5) + parseInt(_0x161f6c(0x188)) / 0x6 * (parseInt(_0x161f6c(0x18d)) / 0x7) + -parseInt(_0x161f6c(0x18b)) / 0x8 * (-parseInt(_0x161f6c(0x180)) / 0x9) + -parseInt(_0x161f6c(0x18a)) / 0xa + -parseInt(_0x161f6c(0x186)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4033, 0x57f5f));
function a0_0x46b6(tLCRJz, key) {
    var stringArray = a0_0x4033();
    a0_0x46b6 = function (index, key) {
        index = index - 0x180;
        var value = stringArray[index];
        return value;
    };
    return a0_0x46b6(tLCRJz, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input[a0_0x96032b(0x190)]()[a0_0x96032b(0x182)]('\x0a');
var nrl = arr[a0_0x96032b(0x183)]()['split']('\x20')[a0_0x96032b(0x189)](Number);
var n = nrl[0x0];
var L = nrl[0x2];
var t = [];
var max = [
    0x0,
    0x0
];
var time = 0x0;
for (var i = 0x0; i < n; i++)
    t[i] = [
        0x0,
        0x0,
        i
    ];
arr['push']([
    0x1,
    L,
    0x0
]['join']('\x20'));
arr[a0_0x96032b(0x181)](function (v) {
    var _0x105e03 = a0_0x96032b;
    v = v[_0x105e03(0x182)]('\x20')['map'](Number);
    var d = v[0x0] - 0x1;
    var T = v[0x1];
    var x = v[0x2];
    t[max[0x0]][0x1] += T - time;
    time = T;
    t[d][0x0] += x;
    if (x > 0x0) {
        if (t[d][0x0] > max[0x1])
            max = [
                d,
                t[d][0x0]
            ];
        else if (t[d][0x0] == max[0x1] && d <= max[0x0])
            max = [
                d,
                t[d][0x0]
            ];
    }
    if (x < 0x0) {
        var MAX = 0x0;
        var m = 0x0;
        t[_0x105e03(0x181)](function (V, index) {
            if (MAX < V[0x0])
                m = index;
        });
        max = [
            m,
            t[m][0x0]
        ];
    }
});
t[a0_0x96032b(0x184)](function (a, b) {
    if (a[0x1] == b[0x1])
        return a[0x2] - b[0x2];
    else
        return b[0x1] - a[0x1];
});
console['log'](t[0x0][0x2] + 0x1);