var a0_0x1bc3d9 = a0_0x39e8;
(function (stringArrayFunction, comparisonValue) {
    var _0x5847f1 = a0_0x39e8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5847f1(0x11c)) / 0x1 * (-parseInt(_0x5847f1(0x10e)) / 0x2) + -parseInt(_0x5847f1(0x110)) / 0x3 * (-parseInt(_0x5847f1(0x113)) / 0x4) + parseInt(_0x5847f1(0x116)) / 0x5 + -parseInt(_0x5847f1(0x119)) / 0x6 + parseInt(_0x5847f1(0x10c)) / 0x7 * (-parseInt(_0x5847f1(0x10d)) / 0x8) + -parseInt(_0x5847f1(0x111)) / 0x9 + parseInt(_0x5847f1(0x117)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39f0, 0xb07af));
function Main(input) {
    var _0xbd0830 = a0_0x39e8;
    input = input['split']('\x0a');
    var N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var answer = new Array(M + 0x1);
    answer[_0xbd0830(0x11d)](0x0);
    var line;
    for (var i = 0x1; i < input[_0xbd0830(0x118)]; i++) {
        line = input[i][_0xbd0830(0x112)]('\x20');
        line[0x1] -= 0x0;
        line[0x0] -= 0x0;
        for (var j = 0x1; j <= M; j++) {
            if (!(line[0x1] - line[0x0] < j - 0x1 && line[0x1] % j >= line[0x0] % j && line[0x0] % j > 0x0)) {
                answer[j]++;
            }
        }
    }
    answer[_0xbd0830(0x115)]();
    console[_0xbd0830(0x114)](answer[_0xbd0830(0x11b)]('\x0a'));
}
Main(require('fs')[a0_0x1bc3d9(0x11a)]('/dev/stdin', a0_0x1bc3d9(0x10f)));
function a0_0x39e8(YFkrgu, key) {
    var stringArray = a0_0x39f0();
    a0_0x39e8 = function (index, key) {
        index = index - 0x10c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x39e8(YFkrgu, key);
}
function a0_0x39f0() {
    var _0xcf3a78 = [
        'join',
        '5ZiKHKo',
        'fill',
        '123977bZekkb',
        '192IywsUA',
        '352894vnaUpq',
        'utf8',
        '2943ftGorU',
        '12958857KXDyzm',
        'split',
        '2916sewgvN',
        'log',
        'shift',
        '2884325UGyxFg',
        '17321020GLJjjF',
        'length',
        '7911306awJboG',
        'readFileSync'
    ];
    a0_0x39f0 = function () {
        return _0xcf3a78;
    };
    return a0_0x39f0();
}