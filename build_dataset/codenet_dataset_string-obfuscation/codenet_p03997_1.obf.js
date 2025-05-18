var a0_0x12e928 = a0_0x2193;
function a0_0x2193(yTDtKc, key) {
    var stringArray = a0_0xb0aa();
    a0_0x2193 = function (index, key) {
        index = index - 0xc9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2193(yTDtKc, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x37f9b8 = a0_0x2193;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x37f9b8(0xcd)) / 0x1 + parseInt(_0x37f9b8(0xd1)) / 0x2 * (parseInt(_0x37f9b8(0xc9)) / 0x3) + parseInt(_0x37f9b8(0xcf)) / 0x4 + parseInt(_0x37f9b8(0xd3)) / 0x5 + parseInt(_0x37f9b8(0xd2)) / 0x6 + -parseInt(_0x37f9b8(0xd0)) / 0x7 + -parseInt(_0x37f9b8(0xcc)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xb0aa, 0x8b9a7));
function a0_0xb0aa() {
    var _0x1d8dc1 = [
        '77104TRIsFK',
        '3181908PUUbdb',
        '3303410bXralb',
        '78LUclBS',
        'utf8',
        '/dev/stdin',
        '20417192GixCqX',
        '838301TCnFDa',
        'split',
        '2497404yZrHsV',
        '3724280DYydQY'
    ];
    a0_0xb0aa = function () {
        return _0x1d8dc1;
    };
    return a0_0xb0aa();
}
function Main(input) {
    var _0x52b660 = a0_0x2193;
    input = input[_0x52b660(0xce)]('\x0a');
    input[0x0] = Number(input[0x0]);
    input[0x1] = Number(input[0x1]);
    input[0x2] = Number(input[0x2]);
    console['log']((input[0x0] + input[0x1]) * input[0x2] / 0x2);
}
Main(require('fs')['readFileSync'](a0_0x12e928(0xcb), a0_0x12e928(0xca)));