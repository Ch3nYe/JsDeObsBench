function a0_0xafde() {
    var _0x4ef1da = [
        'trim',
        '7255930ZAvSCf',
        '9UlSUxL',
        '1490262dUhOZp',
        'split',
        '1527040crlkrk',
        'shift',
        '189RfLHXI',
        '1KZvBzG',
        '47732axqZjg',
        '9475760uiKfHR',
        'map',
        'utf8',
        '838925ymWBTh',
        '975066uKhkLr',
        'sort',
        'readFileSync'
    ];
    a0_0xafde = function () {
        return _0x4ef1da;
    };
    return a0_0xafde();
}
var a0_0x3aafc5 = a0_0x253f;
(function (stringArrayFunction, comparisonValue) {
    var _0x1b7ef7 = a0_0x253f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1b7ef7(0x13d)) / 0x1 * (parseInt(_0x1b7ef7(0x143)) / 0x2) + parseInt(_0x1b7ef7(0x13c)) / 0x3 * (parseInt(_0x1b7ef7(0x13e)) / 0x4) + parseInt(_0x1b7ef7(0x142)) / 0x5 + -parseInt(_0x1b7ef7(0x149)) / 0x6 + -parseInt(_0x1b7ef7(0x13f)) / 0x7 + parseInt(_0x1b7ef7(0x14b)) / 0x8 + parseInt(_0x1b7ef7(0x148)) / 0x9 * (parseInt(_0x1b7ef7(0x147)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xafde, 0xb0269));
function a0_0x253f(MyzSww, key) {
    var stringArray = a0_0xafde();
    a0_0x253f = function (index, key) {
        index = index - 0x13b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x253f(MyzSww, key);
}
function Main(input) {
    var _0x42ba86 = a0_0x253f;
    input = input[_0x42ba86(0x146)]()[_0x42ba86(0x14a)]('\x0a')[_0x42ba86(0x140)](input => Number(input));
    var len = input[0x0];
    input[_0x42ba86(0x13b)]();
    input[_0x42ba86(0x144)](function (a, b) {
        return a - b;
    });
    var sum = 0x0;
    for (var i = 0x0; i < input['length']; i++) {
        sum += input[i];
    }
    var count = 0x0;
    while (sum % 0xa == 0x0 && sum != 0x0) {
        sum -= input[count];
        count++;
    }
    console['log'](sum);
}
Main(require('fs')[a0_0x3aafc5(0x145)]('/dev/stdin', a0_0x3aafc5(0x141)));