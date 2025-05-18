function a0_0x1857(LMyWym, key) {
    var stringArray = a0_0x5e0d();
    a0_0x1857 = function (index, key) {
        index = index - 0x1c6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1857(LMyWym, key);
}
var a0_0x595888 = a0_0x1857;
(function (stringArrayFunction, comparisonValue) {
    var _0x1673d1 = a0_0x1857;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1673d1(0x1c6)) / 0x1 + parseInt(_0x1673d1(0x1ce)) / 0x2 + -parseInt(_0x1673d1(0x1c7)) / 0x3 + parseInt(_0x1673d1(0x1c8)) / 0x4 + parseInt(_0x1673d1(0x1d6)) / 0x5 * (parseInt(_0x1673d1(0x1d2)) / 0x6) + parseInt(_0x1673d1(0x1cd)) / 0x7 * (parseInt(_0x1673d1(0x1ca)) / 0x8) + -parseInt(_0x1673d1(0x1d5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5e0d, 0x9feda));
function a0_0x5e0d() {
    var _0x3e0b7a = [
        '1704580xZowXf',
        '929067ozBGxU',
        '2117415tegSQO',
        '2009808zPGJuW',
        'log',
        '334864yIKHCn',
        'shift',
        'trim',
        '203akpZBe',
        '1598974mcYLkw',
        'utf8',
        'sqrt',
        '/dev/stdin',
        '18bqGwVz',
        'map',
        'split',
        '27960885VnXJgc'
    ];
    a0_0x5e0d = function () {
        return _0x3e0b7a;
    };
    return a0_0x5e0d();
}
var input = require('fs')['readFileSync'](a0_0x595888(0x1d1), a0_0x595888(0x1cf));
var Arr = input[a0_0x595888(0x1cc)]()['split']('\x0a');
while (!![]) {
    var arr = Arr[a0_0x595888(0x1cb)]()[a0_0x595888(0x1d4)]('\x20')[a0_0x595888(0x1d3)](Number);
    if (arr[0x0] == 0x0 && arr[0x1] == 0x0 && arr[0x2] == 0x0)
        break;
    arr['sort'](function (a, b) {
        return a - b;
    });
    var R = Math[a0_0x595888(0x1d0)](arr[0x0] * arr[0x0] + arr[0x1] * arr[0x1]);
    var n = Arr[a0_0x595888(0x1cb)]() - 0x0;
    for (var i = 0x0; i < n; i++) {
        var r = Arr['shift']() - 0x0;
        console[a0_0x595888(0x1c9)](r * 0x2 > R ? 'OK' : 'NA');
    }
}