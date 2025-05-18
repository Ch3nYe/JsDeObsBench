var a0_0x3693a9 = a0_0x3d07;
(function (stringArrayFunction, comparisonValue) {
    var _0x37d420 = a0_0x3d07;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x37d420(0x146)) / 0x1 * (-parseInt(_0x37d420(0x144)) / 0x2) + -parseInt(_0x37d420(0x140)) / 0x3 * (parseInt(_0x37d420(0x147)) / 0x4) + -parseInt(_0x37d420(0x14a)) / 0x5 + -parseInt(_0x37d420(0x141)) / 0x6 + parseInt(_0x37d420(0x143)) / 0x7 + parseInt(_0x37d420(0x142)) / 0x8 * (parseInt(_0x37d420(0x13d)) / 0x9) + parseInt(_0x37d420(0x13c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1877, 0x82333));
function a0_0x3d07(aXnbkn, key) {
    var stringArray = a0_0x1877();
    a0_0x3d07 = function (index, key) {
        index = index - 0x13c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d07(aXnbkn, key);
}
function a0_0x1877() {
    var _0x245e39 = [
        '3099540impIfk',
        '6704leyWgM',
        '5393857zLuYeY',
        '415198wXWgrz',
        'split',
        '5kqWwvd',
        '4hCXAGX',
        'length',
        'readFileSync',
        '4476660rTLYBG',
        '2261210xtiYGc',
        '9UkBhRZ',
        '/dev/stdin',
        'log',
        '270852MQYiih'
    ];
    a0_0x1877 = function () {
        return _0x245e39;
    };
    return a0_0x1877();
}
function Main(input) {
    var _0x45e0b9 = a0_0x3d07;
    input = input[_0x45e0b9(0x145)]('\x0a');
    t = input[0x0]['split']('');
    s = input[0x1][_0x45e0b9(0x145)]('');
    var result = 0x0;
    for (var i = 0x0; i < s[_0x45e0b9(0x148)]; i++) {
        if (s[i] != t[i]) {
            result = result + 0x1;
        } else {
        }
    }
    console[_0x45e0b9(0x13f)](result);
}
Main(require('fs')[a0_0x3693a9(0x149)](a0_0x3693a9(0x13e), 'utf8'));