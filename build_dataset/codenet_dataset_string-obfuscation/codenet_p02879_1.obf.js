function a0_0x2414(YfrPbw, key) {
    var stringArray = a0_0x3084();
    a0_0x2414 = function (index, key) {
        index = index - 0xbc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2414(YfrPbw, key);
}
var a0_0x192a8d = a0_0x2414;
(function (stringArrayFunction, comparisonValue) {
    var _0x36a27e = a0_0x2414;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x36a27e(0xc9)) / 0x1 + parseInt(_0x36a27e(0xc7)) / 0x2 * (-parseInt(_0x36a27e(0xc3)) / 0x3) + -parseInt(_0x36a27e(0xc8)) / 0x4 + -parseInt(_0x36a27e(0xc2)) / 0x5 * (parseInt(_0x36a27e(0xc5)) / 0x6) + -parseInt(_0x36a27e(0xbd)) / 0x7 * (parseInt(_0x36a27e(0xc0)) / 0x8) + -parseInt(_0x36a27e(0xc1)) / 0x9 * (parseInt(_0x36a27e(0xbc)) / 0xa) + parseInt(_0x36a27e(0xbe)) / 0xb * (parseInt(_0x36a27e(0xbf)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3084, 0x43196));
function Main(input) {
    var _0x39d12e = a0_0x2414;
    var input = input['split']('\x20');
    var a = Number(input[0x0]);
    var b = Number(input[0x1]);
    if (a > 0x9 || b > 0x9) {
        console[_0x39d12e(0xc4)](-0x1);
        return;
    }
    var result = a * b;
    console[_0x39d12e(0xc4)](result);
}
Main(require('fs')['readFileSync'](a0_0x192a8d(0xc6), 'utf8'));
function a0_0x3084() {
    var _0x34a47 = [
        '28932psCoFA',
        '/dev/stdin',
        '2EzfxXL',
        '660860RpFSnN',
        '144941MilezA',
        '10pfznwn',
        '35dJuaKK',
        '6696349NLZCjQ',
        '36JMLgms',
        '447448KbPPNP',
        '3014793cfnpOd',
        '480lApDKT',
        '491217ajMgTh',
        'log'
    ];
    a0_0x3084 = function () {
        return _0x34a47;
    };
    return a0_0x3084();
}