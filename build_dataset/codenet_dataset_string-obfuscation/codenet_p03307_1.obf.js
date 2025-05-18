var a0_0x9cab6f = a0_0x5a9d;
function a0_0x5a9d(BneuWO, key) {
    var stringArray = a0_0x49dc();
    a0_0x5a9d = function (index, key) {
        index = index - 0x8b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a9d(BneuWO, key);
}
function a0_0x49dc() {
    var _0x2a3d97 = [
        '586224yTUNOq',
        '31298Bnocaf',
        'log',
        '72aBfAXo',
        'split',
        '1122560NQHwYo',
        '1894740QOyDYs',
        '/dev/stdin',
        '5503338lOSgmW',
        '59515yWiNMQ',
        '461932XrRerZ',
        'map',
        'utf8',
        '116XjQAjH',
        '42JsiCHw',
        'readFileSync'
    ];
    a0_0x49dc = function () {
        return _0x2a3d97;
    };
    return a0_0x49dc();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x104653 = a0_0x5a9d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x104653(0x97)) / 0x1 + parseInt(_0x104653(0x8e)) / 0x2 * (-parseInt(_0x104653(0x90)) / 0x3) + -parseInt(_0x104653(0x9a)) / 0x4 * (parseInt(_0x104653(0x96)) / 0x5) + parseInt(_0x104653(0x93)) / 0x6 + parseInt(_0x104653(0x8b)) / 0x7 * (-parseInt(_0x104653(0x8d)) / 0x8) + parseInt(_0x104653(0x95)) / 0x9 + parseInt(_0x104653(0x92)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x49dc, 0x53425));
function Main(input) {
    var _0x3bf467 = a0_0x5a9d;
    input = input[_0x3bf467(0x91)]('\x20');
    X = 0x2;
    N = input[_0x3bf467(0x98)](input => parseInt(input, 0xa));
    if (N % X == 0x0) {
        console[_0x3bf467(0x8f)](N[0x0]);
    } else {
        var ans = N[0x0] * X;
        console[_0x3bf467(0x8f)](ans);
    }
}
Main(require('fs')[a0_0x9cab6f(0x8c)](a0_0x9cab6f(0x94), a0_0x9cab6f(0x99)));