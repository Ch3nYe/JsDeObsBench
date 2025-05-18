var a0_0x5f1a43 = a0_0x22c5;
(function (stringArrayFunction, comparisonValue) {
    var _0x2ec758 = a0_0x22c5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2ec758(0x1eb)) / 0x1 + parseInt(_0x2ec758(0x1ef)) / 0x2 * (-parseInt(_0x2ec758(0x1df)) / 0x3) + -parseInt(_0x2ec758(0x1e6)) / 0x4 + -parseInt(_0x2ec758(0x1e9)) / 0x5 + -parseInt(_0x2ec758(0x1e0)) / 0x6 + parseInt(_0x2ec758(0x1e7)) / 0x7 * (parseInt(_0x2ec758(0x1ee)) / 0x8) + parseInt(_0x2ec758(0x1e3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x49d5, 0x46eae));
function HW() {
    var _0x361fe0 = a0_0x22c5;
    var arr = [];
    for (var i = 0x1; i < 0x96; i++) {
        for (var j = i + 0x1; j <= 0x96; j++) {
            arr[_0x361fe0(0x1ec)]([
                i,
                j,
                i * i + j * j
            ]);
        }
    }
    arr[_0x361fe0(0x1e4)](function (a, b) {
        if (a[0x2] == b[0x2])
            return a[0x0] - b[0x0];
        else
            return a[0x2] - b[0x2];
    });
    return arr;
}
function a0_0x49d5() {
    var _0xc03b89 = [
        '56ZVbYpr',
        '2LlsMUC',
        'shift',
        '36783rHGUGo',
        '1370706mJujCh',
        'trim',
        'log',
        '11279826cGbtEn',
        'sort',
        'length',
        '2102340jcTAKZ',
        '236173qdtmsF',
        'split',
        '1337275QihQDN',
        'utf8',
        '165257kdogpo',
        'push',
        'readFileSync'
    ];
    a0_0x49d5 = function () {
        return _0xc03b89;
    };
    return a0_0x49d5();
}
var Rectangles = HW();
function a0_0x22c5(qWIFPN, key) {
    var stringArray = a0_0x49d5();
    a0_0x22c5 = function (index, key) {
        index = index - 0x1df;
        var value = stringArray[index];
        return value;
    };
    return a0_0x22c5(qWIFPN, key);
}
var input = require('fs')[a0_0x5f1a43(0x1ed)]('/dev/stdin', a0_0x5f1a43(0x1ea));
var Arr = input[a0_0x5f1a43(0x1e1)]()[a0_0x5f1a43(0x1e8)]('\x0a');
while (!![]) {
    var hw = Arr[a0_0x5f1a43(0x1f0)]()['split']('\x20')['map'](Number);
    var h = hw[0x0];
    var w = hw[0x1];
    if (h == 0x0 && w == 0x0)
        break;
    var num = h * h + w * w;
    for (var i = 0x0; i < Rectangles[a0_0x5f1a43(0x1e5)]; i++) {
        if (Rectangles[i][0x0] == h && Rectangles[i][0x1] == w)
            break;
    }
    console[a0_0x5f1a43(0x1e2)](Rectangles[i + 0x1][0x0] + '\x20' + Rectangles[i + 0x1][0x1]);
}