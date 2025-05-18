function a0_0x47b8() {
    var _0x40f35d = [
        '155704hqALyA',
        'shift',
        'sort',
        '3RKpbFk',
        'split',
        '210735BeRtre',
        '13848260uIuYbF',
        '42GzIZUU',
        '965040fnNCtQ',
        'readFileSync',
        '871251noDgrq',
        '356155uSaUjv',
        '714880xmanvM',
        'map',
        '6SVniYY',
        'log',
        'trim',
        'utf8',
        'length'
    ];
    a0_0x47b8 = function () {
        return _0x40f35d;
    };
    return a0_0x47b8();
}
var a0_0x1c4664 = a0_0x9f62;
function a0_0x9f62(XswBxu, key) {
    var stringArray = a0_0x47b8();
    a0_0x9f62 = function (index, key) {
        index = index - 0x72;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9f62(XswBxu, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4b4261 = a0_0x9f62;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4b4261(0x82)) / 0x1 * (parseInt(_0x4b4261(0x7f)) / 0x2) + -parseInt(_0x4b4261(0x76)) / 0x3 + parseInt(_0x4b4261(0x74)) / 0x4 + parseInt(_0x4b4261(0x77)) / 0x5 * (-parseInt(_0x4b4261(0x7a)) / 0x6) + parseInt(_0x4b4261(0x73)) / 0x7 * (-parseInt(_0x4b4261(0x78)) / 0x8) + parseInt(_0x4b4261(0x84)) / 0x9 + parseInt(_0x4b4261(0x72)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x47b8, 0x7e7f9));
var input = require('fs')[a0_0x1c4664(0x75)]('/dev/stdin', a0_0x1c4664(0x7d));
var Arr = input[a0_0x1c4664(0x7c)]()[a0_0x1c4664(0x83)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x1c4664(0x80)]() - 0x0;
    if (n == 0x0)
        break;
    var S = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x1c4664(0x80)]()['split']('\x20')[a0_0x1c4664(0x79)](Number);
        var sum = arr['reduce'](function (a, b) {
            return a + b;
        });
        S['push'](sum);
    }
    S[a0_0x1c4664(0x81)](function (a, b) {
        return b - a;
    });
    console[a0_0x1c4664(0x7b)](S[0x0] + '\x20' + S[S[a0_0x1c4664(0x7e)] - 0x1]);
}