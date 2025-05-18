function a0_0x2bb6(GyUlLX, key) {
    var stringArray = a0_0x34a7();
    a0_0x2bb6 = function (index, key) {
        index = index - 0xec;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2bb6(GyUlLX, key);
}
var a0_0x49c401 = a0_0x2bb6;
(function (stringArrayFunction, comparisonValue) {
    var _0x283758 = a0_0x2bb6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x283758(0xf7)) / 0x1 * (-parseInt(_0x283758(0xf3)) / 0x2) + -parseInt(_0x283758(0xf6)) / 0x3 * (-parseInt(_0x283758(0xee)) / 0x4) + -parseInt(_0x283758(0xf1)) / 0x5 + -parseInt(_0x283758(0xf4)) / 0x6 * (parseInt(_0x283758(0xf8)) / 0x7) + -parseInt(_0x283758(0xec)) / 0x8 * (parseInt(_0x283758(0xfe)) / 0x9) + -parseInt(_0x283758(0xfb)) / 0xa * (-parseInt(_0x283758(0xef)) / 0xb) + parseInt(_0x283758(0xf2)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34a7, 0x65f6c));
function Main(input) {
    var _0x19a860 = a0_0x2bb6;
    ans = 'No';
    input = input['trim']()[_0x19a860(0xfa)]('\x0a');
    rotate = input[0x0];
    for (i = 0x0; i <= input[0x0][_0x19a860(0xf5)]; i++) {
        head = rotate[_0x19a860(0xfd)](0x0, 0x1);
        str = rotate[_0x19a860(0xfc)](0x1) + head;
        if (input[0x1] === str) {
            ans = _0x19a860(0xf9);
            break;
        }
        rotate = str;
    }
    console[_0x19a860(0xf0)](ans);
}
function a0_0x34a7() {
    var _0x4b77b6 = [
        'split',
        '10OwpGlc',
        'slice',
        'substr',
        '37998hPxkWb',
        '880dtHBxx',
        'utf8',
        '28tQaSuF',
        '2118259Nicgnq',
        'log',
        '79920uPTAGL',
        '8701440joIIsa',
        '58962ArzmST',
        '705972HtYUkv',
        'length',
        '281844bxFTCD',
        '11GmPOtM',
        '21pFgktP',
        'Yes'
    ];
    a0_0x34a7 = function () {
        return _0x4b77b6;
    };
    return a0_0x34a7();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x49c401(0xed)));