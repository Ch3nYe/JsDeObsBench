var a0_0x17ba71 = a0_0x45fc;
(function (stringArrayFunction, comparisonValue) {
    var _0x1893e8 = a0_0x45fc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1893e8(0x1d6)) / 0x1 + -parseInt(_0x1893e8(0x1d5)) / 0x2 * (parseInt(_0x1893e8(0x1e0)) / 0x3) + parseInt(_0x1893e8(0x1dc)) / 0x4 * (parseInt(_0x1893e8(0x1d7)) / 0x5) + parseInt(_0x1893e8(0x1d8)) / 0x6 * (parseInt(_0x1893e8(0x1d2)) / 0x7) + parseInt(_0x1893e8(0x1d4)) / 0x8 * (-parseInt(_0x1893e8(0x1da)) / 0x9) + -parseInt(_0x1893e8(0x1d3)) / 0xa * (parseInt(_0x1893e8(0x1de)) / 0xb) + parseInt(_0x1893e8(0x1e1)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2983, 0xb97b0));
function a0_0x45fc(gwILdO, key) {
    var stringArray = a0_0x2983();
    a0_0x45fc = function (index, key) {
        index = index - 0x1d2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45fc(gwILdO, key);
}
Main(require('fs')[a0_0x17ba71(0x1db)](a0_0x17ba71(0x1df), 'utf8'));
function a0_0x2983() {
    var _0x11b68c = [
        '224AJPeqs',
        '10BCQWFO',
        '539048OdDIvu',
        '2258672pzMQjN',
        '1149983vmVsDK',
        '8335DqUUBr',
        '184260vFenwJ',
        'log',
        '198kBONHh',
        'readFileSync',
        '3436xqKHwk',
        'split',
        '13363757SImPTC',
        '/dev/stdin',
        '3bdZTmN',
        '39859716zOEVTf'
    ];
    a0_0x2983 = function () {
        return _0x11b68c;
    };
    return a0_0x2983();
}
function Main(args) {
    var _0xe37372 = a0_0x17ba71;
    input = args[_0xe37372(0x1dd)]('\x0a');
    const N = parseInt(input[0x0]);
    var tmp;
    var result = 0x0;
    for (var i = 0x1; i <= N; i++) {
        tmp = input[i][_0xe37372(0x1dd)]('\x20');
        result += parseInt(tmp[0x1]) - parseInt(tmp[0x0]) + 0x1;
    }
    console[_0xe37372(0x1d9)](result);
}