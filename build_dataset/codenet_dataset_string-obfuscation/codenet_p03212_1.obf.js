var a0_0xbd0db7 = a0_0x122b;
function a0_0x122b(dvhWLP, key) {
    var stringArray = a0_0x15c9();
    a0_0x122b = function (index, key) {
        index = index - 0x1c7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x122b(dvhWLP, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x55d51c = a0_0x122b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55d51c(0x1d1)) / 0x1 * (parseInt(_0x55d51c(0x1c7)) / 0x2) + -parseInt(_0x55d51c(0x1ce)) / 0x3 * (-parseInt(_0x55d51c(0x1cf)) / 0x4) + parseInt(_0x55d51c(0x1d2)) / 0x5 * (parseInt(_0x55d51c(0x1d0)) / 0x6) + -parseInt(_0x55d51c(0x1ca)) / 0x7 + -parseInt(_0x55d51c(0x1cb)) / 0x8 + parseInt(_0x55d51c(0x1c8)) / 0x9 * (parseInt(_0x55d51c(0x1cc)) / 0xa) + parseInt(_0x55d51c(0x1d4)) / 0xb * (parseInt(_0x55d51c(0x1cd)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x15c9, 0x5edf5));
function f(use, x, n, acc) {
    if (x > n)
        return acc;
    if (use === 0x7)
        acc += 0x1;
    acc += f(use | 0x1, x * 0xa + 0x3, n, 0x0);
    acc += f(use | 0x2, x * 0xa + 0x5, n, 0x0);
    acc += f(use | 0x4, x * 0xa + 0x7, n, 0x0);
    return acc;
}
function Main(input) {
    var _0x2c7db8 = a0_0x122b;
    var n = parseInt(input);
    console[_0x2c7db8(0x1c9)](f(0x0, 0x0, n, 0x0));
}
Main(require('fs')['readFileSync'](a0_0xbd0db7(0x1d5), a0_0xbd0db7(0x1d3)));
function a0_0x15c9() {
    var _0x12dac6 = [
        '534eJKqWL',
        '3491xEKLcs',
        '16615mLumAr',
        'utf8',
        '89617qFlLsq',
        '/dev/stdin',
        '434DfLPiw',
        '940743sqMcPz',
        'log',
        '531923ujtZlM',
        '2603048sCsLRZ',
        '20OlOrXB',
        '624BXxUXt',
        '1857207lJDRWS',
        '4UWAeAV'
    ];
    a0_0x15c9 = function () {
        return _0x12dac6;
    };
    return a0_0x15c9();
}