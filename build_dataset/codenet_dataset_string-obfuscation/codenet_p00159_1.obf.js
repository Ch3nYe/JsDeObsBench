var a0_0x5b4f5f = a0_0x4d49;
(function (stringArrayFunction, comparisonValue) {
    var _0x4dccf0 = a0_0x4d49;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4dccf0(0x196)) / 0x1 * (-parseInt(_0x4dccf0(0x191)) / 0x2) + -parseInt(_0x4dccf0(0x194)) / 0x3 + -parseInt(_0x4dccf0(0x195)) / 0x4 * (-parseInt(_0x4dccf0(0x19a)) / 0x5) + -parseInt(_0x4dccf0(0x198)) / 0x6 + -parseInt(_0x4dccf0(0x197)) / 0x7 * (-parseInt(_0x4dccf0(0x190)) / 0x8) + -parseInt(_0x4dccf0(0x1a0)) / 0x9 + -parseInt(_0x4dccf0(0x1a2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1593, 0x4fdba));
let input = require('fs')['readFileSync'](a0_0x5b4f5f(0x1a1), a0_0x5b4f5f(0x1a3));
function a0_0x1593() {
    var _0x5f420e = [
        '4jixKUE',
        '1259YXFYOg',
        '903elbWhK',
        '354156FFEvJn',
        'split',
        '3064315jNkQKt',
        'sort',
        'next',
        'trim',
        'log',
        'value',
        '4137687cbgLtq',
        '/dev/stdin',
        '4251030QRrjPb',
        'utf8',
        'map',
        'abs',
        '23944HdgKRq',
        '908ZALFBZ',
        'shift',
        'set',
        '898728DWuUqv'
    ];
    a0_0x1593 = function () {
        return _0x5f420e;
    };
    return a0_0x1593();
}
let Arr = input[a0_0x5b4f5f(0x19d)]()['split']('\x0a');
function a0_0x4d49(wZdjcY, key) {
    var stringArray = a0_0x1593();
    a0_0x4d49 = function (index, key) {
        index = index - 0x18e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d49(wZdjcY, key);
}
let bmis = new Map();
while (0x1) {
    let n = Arr[0x0];
    if (n == 0x0)
        break;
    Arr[a0_0x5b4f5f(0x192)]();
    for (var i = 0x0; i < n; ++i) {
        var nums = Arr[0x0][a0_0x5b4f5f(0x199)]('\x20')[a0_0x5b4f5f(0x18e)](Number);
        var m = nums[0x1] / 0x64;
        var bmi = nums[0x2] / (m * m);
        var dif = Math[a0_0x5b4f5f(0x18f)](0x16 - bmi);
        bmis[a0_0x5b4f5f(0x193)](nums[0x0]['toString'](), dif);
        Arr[a0_0x5b4f5f(0x192)]();
    }
    let sorted = new Map([...bmis['entries']()][a0_0x5b4f5f(0x19b)]((a, b) => a[0x1] - b[0x1]));
    console[a0_0x5b4f5f(0x19e)](sorted['keys']()[a0_0x5b4f5f(0x19c)]()[a0_0x5b4f5f(0x19f)]);
}