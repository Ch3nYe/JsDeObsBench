var a0_0x5d497f = a0_0x1e11;
(function (stringArrayFunction, comparisonValue) {
    var _0x586d4e = a0_0x1e11;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x586d4e(0x1ec)) / 0x1 + -parseInt(_0x586d4e(0x1f0)) / 0x2 * (-parseInt(_0x586d4e(0x1e5)) / 0x3) + -parseInt(_0x586d4e(0x1e4)) / 0x4 * (parseInt(_0x586d4e(0x1e6)) / 0x5) + -parseInt(_0x586d4e(0x1f1)) / 0x6 * (parseInt(_0x586d4e(0x1eb)) / 0x7) + -parseInt(_0x586d4e(0x1ea)) / 0x8 + -parseInt(_0x586d4e(0x1e8)) / 0x9 * (-parseInt(_0x586d4e(0x1f3)) / 0xa) + parseInt(_0x586d4e(0x1ee)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xaa3e, 0x5afb0));
function a0_0x1e11(LXZdup, key) {
    var stringArray = a0_0xaa3e();
    a0_0x1e11 = function (index, key) {
        index = index - 0x1e3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1e11(LXZdup, key);
}
var input = require('fs')[a0_0x5d497f(0x1e3)]('/dev/stdin', 'utf8');
var arr = input[a0_0x5d497f(0x1f2)]()[a0_0x5d497f(0x1ef)]('\x0a');
function a0_0xaa3e() {
    var _0x51ac77 = [
        '2901006HCfbHp',
        'trim',
        '80UAUTdP',
        'readFileSync',
        '4xJRoTB',
        '3HRDAtF',
        '939865BUwcDw',
        'map',
        '611334nKLFii',
        '0\x200',
        '2646304YpDRyE',
        '7ifSxud',
        '242791WhTnrS',
        'shift',
        '5461731znXxBk',
        'split',
        '184396EQYUCs'
    ];
    a0_0xaa3e = function () {
        return _0x51ac77;
    };
    return a0_0xaa3e();
}
while (!![]) {
    if (arr[0x0] == a0_0x5d497f(0x1e9))
        break;
    var nm = arr[a0_0x5d497f(0x1ed)]()[a0_0x5d497f(0x1ef)]('\x20')[a0_0x5d497f(0x1e7)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var max = [];
    for (var i = 0x0; i < m; i++)
        max[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var dv = arr[a0_0x5d497f(0x1ed)]()['split']('\x20')['map'](Number);
        var d = dv[0x0] - 0x1;
        var v = dv[0x1];
        if (max[d] < v)
            max[d] = v;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++)
        sum += max[i];
    console['log'](sum);
}