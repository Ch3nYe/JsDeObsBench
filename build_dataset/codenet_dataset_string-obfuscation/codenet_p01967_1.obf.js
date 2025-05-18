var a0_0x2137c2 = a0_0x2ea7;
(function (stringArrayFunction, comparisonValue) {
    var _0x34d166 = a0_0x2ea7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x34d166(0x105)) / 0x1 + -parseInt(_0x34d166(0x107)) / 0x2 + -parseInt(_0x34d166(0x111)) / 0x3 + parseInt(_0x34d166(0x106)) / 0x4 * (parseInt(_0x34d166(0x104)) / 0x5) + -parseInt(_0x34d166(0x10a)) / 0x6 + parseInt(_0x34d166(0x108)) / 0x7 + parseInt(_0x34d166(0x10b)) / 0x8 * (parseInt(_0x34d166(0x10f)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x51e0, 0x664de));
var input = require('fs')[a0_0x2137c2(0x10e)](a0_0x2137c2(0x10c), a0_0x2137c2(0x113));
function a0_0x2ea7(fJihNS, key) {
    var stringArray = a0_0x51e0();
    a0_0x2ea7 = function (index, key) {
        index = index - 0x104;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ea7(fJihNS, key);
}
var arr = input[a0_0x2137c2(0x109)]()[a0_0x2137c2(0x114)]('\x0a');
function a0_0x51e0() {
    var _0x31d278 = [
        'trim',
        '3496782DGCMWF',
        '5813072cjKDMz',
        '/dev/stdin',
        'map',
        'readFileSync',
        '18JcUBDo',
        'shift',
        '2368224AyqCSI',
        'length',
        'utf8',
        'split',
        '3620rnXnHY',
        '250491ZIrUVG',
        '1108ikuIZG',
        '1084536LYpvmq',
        '3004428YZWnqd'
    ];
    a0_0x51e0 = function () {
        return _0x31d278;
    };
    return a0_0x51e0();
}
arr = arr[a0_0x2137c2(0x10d)](v => v['split']('\x20')['map'](Number));
var n = arr[a0_0x2137c2(0x110)]();
var c = arr[a0_0x2137c2(0x110)]();
var q = arr[a0_0x2137c2(0x110)]();
var apple = [];
for (var i = 0x0; i <= n; i++)
    apple[i] = 0x0;
var ans = 0x0;
for (var i = 0x0; i < arr[a0_0x2137c2(0x112)]; i++) {
    var [t, x, d] = arr[i];
    if (t == 0x1) {
        apple[x] += d;
        if (c[x - 0x1] < apple[x]) {
            ans = x;
            break;
        }
    } else {
        if (apple[x] < d) {
            ans = x;
            break;
        } else {
            apple[x] -= d;
        }
    }
}
console['log'](ans);