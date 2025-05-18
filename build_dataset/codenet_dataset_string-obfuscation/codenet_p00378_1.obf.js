var a0_0x341bd5 = a0_0x1c0a;
(function (stringArrayFunction, comparisonValue) {
    var _0x310f6c = a0_0x1c0a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x310f6c(0x1db)) / 0x1 * (-parseInt(_0x310f6c(0x1e1)) / 0x2) + -parseInt(_0x310f6c(0x1e3)) / 0x3 * (-parseInt(_0x310f6c(0x1da)) / 0x4) + parseInt(_0x310f6c(0x1e8)) / 0x5 + parseInt(_0x310f6c(0x1e7)) / 0x6 * (parseInt(_0x310f6c(0x1d8)) / 0x7) + parseInt(_0x310f6c(0x1d9)) / 0x8 + parseInt(_0x310f6c(0x1de)) / 0x9 + parseInt(_0x310f6c(0x1e5)) / 0xa * (-parseInt(_0x310f6c(0x1d7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x49c6, 0x3ff5c));
var input = require('fs')[a0_0x341bd5(0x1df)](a0_0x341bd5(0x1e6), 'utf8');
var [a, b, x] = input[a0_0x341bd5(0x1e4)]()[a0_0x341bd5(0x1dc)]('\x20')[a0_0x341bd5(0x1e2)](Number);
var min = Infinity;
for (var i = 0x0; i <= 0x14; i++) {
    for (var j = 0x0; j <= 0x28; j++) {
        if (i * 0x3e8 + j * 0x1f4 >= x)
            min = Math[a0_0x341bd5(0x1e0)](min, i * a + j * b);
    }
}
function a0_0x49c6() {
    var _0x3ac021 = [
        'log',
        '3836097bBsxlC',
        'readFileSync',
        'min',
        '595534mGOhRI',
        'map',
        '3666hkMYmx',
        'trim',
        '2218850pClvzQ',
        '/dev/stdin',
        '2044194OcQQuY',
        '920675ZvCtSI',
        '55pdWQhh',
        '7TOopnl',
        '169160kFUuHP',
        '332tRJREj',
        '1jGnpKV',
        'split'
    ];
    a0_0x49c6 = function () {
        return _0x3ac021;
    };
    return a0_0x49c6();
}
function a0_0x1c0a(ahbGhN, key) {
    var stringArray = a0_0x49c6();
    a0_0x1c0a = function (index, key) {
        index = index - 0x1d7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c0a(ahbGhN, key);
}
console[a0_0x341bd5(0x1dd)](min);