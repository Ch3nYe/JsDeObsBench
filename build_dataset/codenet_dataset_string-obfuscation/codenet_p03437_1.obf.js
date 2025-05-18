var a0_0x3a1377 = a0_0x3d86;
function a0_0x3d86(nRrFoD, key) {
    var stringArray = a0_0x2757();
    a0_0x3d86 = function (index, key) {
        index = index - 0x1a6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d86(nRrFoD, key);
}
function a0_0x2757() {
    var _0x241114 = [
        '1873151pWNOFh',
        'utf8',
        '4418970wrOGkh',
        '2347473GQbduZ',
        '22530BlAfCq',
        'pow',
        'split',
        '10yNMnDs',
        '38OIFkLj',
        '269918GpJblS',
        '12367854jQdvQG',
        '6quQmPc',
        '38818806fPLcUO',
        '40EMrOLx',
        'isInteger',
        '60jpmQUZ',
        'log',
        '8LxvINs'
    ];
    a0_0x2757 = function () {
        return _0x241114;
    };
    return a0_0x2757();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x6e0ce1 = a0_0x3d86;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x6e0ce1(0x1b2)) / 0x1 * (-parseInt(_0x6e0ce1(0x1b6)) / 0x2) + -parseInt(_0x6e0ce1(0x1b1)) / 0x3 * (-parseInt(_0x6e0ce1(0x1ad)) / 0x4) + -parseInt(_0x6e0ce1(0x1b0)) / 0x5 * (parseInt(_0x6e0ce1(0x1a7)) / 0x6) + parseInt(_0x6e0ce1(0x1ae)) / 0x7 * (parseInt(_0x6e0ce1(0x1a9)) / 0x8) + parseInt(_0x6e0ce1(0x1a6)) / 0x9 * (parseInt(_0x6e0ce1(0x1b5)) / 0xa) + parseInt(_0x6e0ce1(0x1b7)) / 0xb * (parseInt(_0x6e0ce1(0x1ab)) / 0xc) + -parseInt(_0x6e0ce1(0x1a8)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2757, 0xe9e69));
function Main(input) {
    var _0x11d206 = a0_0x3d86;
    input = input[_0x11d206(0x1b4)]('\x20');
    ans = input[0x0] / input[0x1];
    num = 0x0;
    var a = Number[_0x11d206(0x1aa)](ans);
    if (a === !![]) {
        ans = -0x1;
    } else {
        while (!![]) {
            num++;
            cal = input[0x0] * num / input[0x1];
            var b = Number['isInteger'](cal);
            if (b === !![]) {
                ans = input[0x0] * (num - 0x1);
                break;
            }
            if (input[0x0] > Math['pow'](0xa, 0x9) | input[0x1] > Math['pow'](0xa, 0x9) | input[0x0] * (num - 0x1) > Math[_0x11d206(0x1b3)](0xa, 0x12)) {
                ans = -0x1;
                break;
            }
        }
    }
    console[_0x11d206(0x1ac)](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x3a1377(0x1af)));