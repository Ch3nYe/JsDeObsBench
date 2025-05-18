var a0_0x276462 = a0_0x4c61;
function a0_0x4c61(LQtQVg, key) {
    var stringArray = a0_0x2aea();
    a0_0x4c61 = function (index, key) {
        index = index - 0x1e1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c61(LQtQVg, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x189d79 = a0_0x4c61;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x189d79(0x1e9)) / 0x1 + -parseInt(_0x189d79(0x1f5)) / 0x2 * (parseInt(_0x189d79(0x1eb)) / 0x3) + -parseInt(_0x189d79(0x1e7)) / 0x4 * (-parseInt(_0x189d79(0x1e2)) / 0x5) + -parseInt(_0x189d79(0x1e6)) / 0x6 * (parseInt(_0x189d79(0x1f1)) / 0x7) + parseInt(_0x189d79(0x1ea)) / 0x8 * (-parseInt(_0x189d79(0x1ef)) / 0x9) + parseInt(_0x189d79(0x1f2)) / 0xa + -parseInt(_0x189d79(0x1f0)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2aea, 0x80d65));
function main(input) {
    var _0xfd9d8b = a0_0x4c61;
    var digits = input[_0xfd9d8b(0x1ee)]()[_0xfd9d8b(0x1f4)];
    var input = parseInt(input, 0xa);
    var divisor = Math[_0xfd9d8b(0x1e3)](0xa, digits - 0x1);
    var arr = [];
    for (var i = 0x0; i < digits; i++) {
        arr[_0xfd9d8b(0x1ec)](Math[_0xfd9d8b(0x1e8)](input / divisor));
        input = input % divisor;
        divisor /= 0xa;
    }
    var answer = arr[_0xfd9d8b(0x1f3)]((a, b) => a + b);
    if (answer == 0x1) {
        answer = 0xa;
    }
    console[_0xfd9d8b(0x1e1)](answer);
}
main(require('fs')[a0_0x276462(0x1e5)](a0_0x276462(0x1e4), a0_0x276462(0x1ed)));
function a0_0x2aea() {
    var _0x4385a8 = [
        '416SIRjxq',
        'log',
        '3672155YRIZpb',
        'pow',
        '/dev/stdin',
        'readFileSync',
        '351042xssxDz',
        '4ObuLCC',
        'floor',
        '820675DXCmYK',
        '8asVeYG',
        '6057Ivrxnu',
        'push',
        'utf8',
        'toString',
        '3100077LySTew',
        '4655904gTYmre',
        '7xsiVFE',
        '2187870SncAVF',
        'reduce',
        'length'
    ];
    a0_0x2aea = function () {
        return _0x4385a8;
    };
    return a0_0x2aea();
}