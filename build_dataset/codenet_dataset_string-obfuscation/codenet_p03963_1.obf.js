function a0_0x2f49() {
    var _0x316b7f = [
        '33015ATfHVC',
        '/dev/stdin',
        'utf8',
        '308535SPoXcC',
        'log',
        '378HbAcLi',
        'split',
        '272975BsjYDQ',
        '14sqzqQW',
        '2003448bWdpIm',
        '11006073ZRUIMJ',
        '4465560vnRTEa',
        '2744gFWYOd'
    ];
    a0_0x2f49 = function () {
        return _0x316b7f;
    };
    return a0_0x2f49();
}
var a0_0x528945 = a0_0x10db;
function a0_0x10db(Fclelx, key) {
    var stringArray = a0_0x2f49();
    a0_0x10db = function (index, key) {
        index = index - 0xf2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10db(Fclelx, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5daa86 = a0_0x10db;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5daa86(0xf2)) / 0x1 + -parseInt(_0x5daa86(0xf7)) / 0x2 * (parseInt(_0x5daa86(0xfc)) / 0x3) + -parseInt(_0x5daa86(0xf8)) / 0x4 + -parseInt(_0x5daa86(0xf6)) / 0x5 + parseInt(_0x5daa86(0xf4)) / 0x6 * (parseInt(_0x5daa86(0xfb)) / 0x7) + -parseInt(_0x5daa86(0xfa)) / 0x8 + parseInt(_0x5daa86(0xf9)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f49, 0x59381));
function Main(input) {
    var _0xa062fd = a0_0x10db;
    var input = input[_0xa062fd(0xf5)]('\x0a');
    var tmp = input[0x0][_0xa062fd(0xf5)]('\x20');
    var N = tmp[0x0];
    var K = tmp[0x1];
    var pattern = K;
    for (i = 0x1; i < N; i++) {
        pattern *= K - 0x1;
    }
    console[_0xa062fd(0xf3)](pattern);
}
Main(require('fs')['readFileSync'](a0_0x528945(0xfd), a0_0x528945(0xfe)));