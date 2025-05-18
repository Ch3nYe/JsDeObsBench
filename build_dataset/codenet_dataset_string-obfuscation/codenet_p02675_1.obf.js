var a0_0x4d9a0f = a0_0xe96c;
function a0_0x21db() {
    var _0xfabc5b = [
        '2988933PXJLGT',
        '2186PLuBDq',
        '5764899MigUwS',
        '22789976dNhOzB',
        '10lEQKae',
        'log',
        'utf8',
        'length',
        '305uELkqV',
        '10008819uKTpQy',
        '1561GjHfXd',
        '4845652oMnyOF',
        '8heHJUp',
        '119652THGgZD',
        'pon',
        'hon'
    ];
    a0_0x21db = function () {
        return _0xfabc5b;
    };
    return a0_0x21db();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x359da8 = a0_0xe96c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x359da8(0x75)) / 0x1 * (parseInt(_0x359da8(0x7c)) / 0x2) + parseInt(_0x359da8(0x7b)) / 0x3 + parseInt(_0x359da8(0x76)) / 0x4 + -parseInt(_0x359da8(0x73)) / 0x5 * (parseInt(_0x359da8(0x78)) / 0x6) + parseInt(_0x359da8(0x7d)) / 0x7 * (-parseInt(_0x359da8(0x77)) / 0x8) + -parseInt(_0x359da8(0x74)) / 0x9 * (-parseInt(_0x359da8(0x7f)) / 0xa) + -parseInt(_0x359da8(0x7e)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21db, 0xdf2e9));
function a0_0xe96c(ZBOtjJ, key) {
    var stringArray = a0_0x21db();
    a0_0xe96c = function (index, key) {
        index = index - 0x71;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe96c(ZBOtjJ, key);
}
function Main(input) {
    var _0x373a7e = a0_0xe96c;
    input = '' + input + '';
    input = input['substr'](input[_0x373a7e(0x72)] - 0x1, 0x1);
    var d = '';
    if (input == 0x2 || input == 0x4 || input == 0x5 || input == 0x7 || input == 0x9) {
        d = _0x373a7e(0x7a);
    }
    if (input == 0x0 || input == 0x1 || input == 0x6 || input == 0x8) {
        d = _0x373a7e(0x79);
    }
    if (input == 0x3) {
        d = 'bon';
    }
    console[_0x373a7e(0x80)](d);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x4d9a0f(0x71)));