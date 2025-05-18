function a0_0x2001(dVDLLq, key) {
    var stringArray = a0_0x5b14();
    a0_0x2001 = function (index, key) {
        index = index - 0x73;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2001(dVDLLq, key);
}
var a0_0x37f9e3 = a0_0x2001;
(function (stringArrayFunction, comparisonValue) {
    var _0x3dcfff = a0_0x2001;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3dcfff(0x7b)) / 0x1 + parseInt(_0x3dcfff(0x81)) / 0x2 + -parseInt(_0x3dcfff(0x77)) / 0x3 * (-parseInt(_0x3dcfff(0x7d)) / 0x4) + parseInt(_0x3dcfff(0x76)) / 0x5 + -parseInt(_0x3dcfff(0x7c)) / 0x6 + parseInt(_0x3dcfff(0x75)) / 0x7 + -parseInt(_0x3dcfff(0x79)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b14, 0xe8f95));
function a0_0x5b14() {
    var _0x558550 = [
        '4hMuBoH',
        'utf8',
        'sort',
        'readFileSync',
        '3787310zkUqQo',
        'trim',
        'log',
        '8515738bHSxFQ',
        '494780tqUNDq',
        '5677899OqHYaG',
        'map',
        '8314032OeCgYh',
        'split',
        '1454784pBvzvj',
        '9920874ZoXkWR'
    ];
    a0_0x5b14 = function () {
        return _0x558550;
    };
    return a0_0x5b14();
}
function Main(input) {
    var _0x3439d2 = a0_0x2001;
    input = input[_0x3439d2(0x7a)]('\x20')[_0x3439d2(0x78)](Number);
    if (input[0x0] % 0x2 == 0x0 && input[0x1] % 0x2 == 0x0 && input[0x2] % 0x2 == 0x0) {
        console[_0x3439d2(0x74)](0x0);
    } else {
        input = input[_0x3439d2(0x7f)](function (a, b) {
            return a - b;
        });
        console[_0x3439d2(0x74)](input[0x1] * input[0x0]);
    }
}
Main(require('fs')[a0_0x37f9e3(0x80)]('/dev/stdin', a0_0x37f9e3(0x7e))[a0_0x37f9e3(0x73)]());