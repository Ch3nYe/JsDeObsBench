var a0_0x2b9cd4 = a0_0x385d;
function a0_0x47e7() {
    var _0x528570 = [
        'trim',
        'map',
        '580UqefaE',
        '6380620VBRLlm',
        '712RdJPbs',
        '1422336VVSnzP',
        'log',
        '285798QjSicy',
        '3eAaGRx',
        '11JdMpDy',
        '3696385TJtcNY',
        'utf8',
        '19205JveFEz',
        'readFileSync',
        '543814CLvtkV',
        '3366sfWdZh'
    ];
    a0_0x47e7 = function () {
        return _0x528570;
    };
    return a0_0x47e7();
}
function a0_0x385d(uWTJag, key) {
    var stringArray = a0_0x47e7();
    a0_0x385d = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x385d(uWTJag, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4ce2f3 = a0_0x385d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4ce2f3(0xef)) / 0x1 + parseInt(_0x4ce2f3(0xf6)) / 0x2 * (parseInt(_0x4ce2f3(0xf0)) / 0x3) + parseInt(_0x4ce2f3(0xfa)) / 0x4 * (-parseInt(_0x4ce2f3(0xf4)) / 0x5) + -parseInt(_0x4ce2f3(0xfd)) / 0x6 + parseInt(_0x4ce2f3(0xf2)) / 0x7 + -parseInt(_0x4ce2f3(0xfc)) / 0x8 * (parseInt(_0x4ce2f3(0xf7)) / 0x9) + -parseInt(_0x4ce2f3(0xfb)) / 0xa * (-parseInt(_0x4ce2f3(0xf1)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x47e7, 0x4f54b));
function Main(s) {
    var _0x23696f = a0_0x385d;
    s = s['split']('\x20')[_0x23696f(0xf9)](a => parseInt(a));
    console[_0x23696f(0xee)](s[0x0] + s[0x1] >= s[0x2] ? 'Yes' : 'No');
}
Main(require('fs')[a0_0x2b9cd4(0xf5)]('/dev/stdin', a0_0x2b9cd4(0xf3))[a0_0x2b9cd4(0xf8)]());