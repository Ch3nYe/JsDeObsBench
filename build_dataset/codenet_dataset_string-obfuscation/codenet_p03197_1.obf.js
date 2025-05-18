function a0_0x3039(RLPYBU, key) {
    var stringArray = a0_0x5cdf();
    a0_0x3039 = function (index, key) {
        index = index - 0x10b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3039(RLPYBU, key);
}
function a0_0x5cdf() {
    var _0x574b6c = [
        '3533189NrcGGq',
        '120zfqzpx',
        '1002354BOCFaO',
        'length',
        '9161952NeOOrM',
        '21505rMYqig',
        'second',
        '6545421BougMK',
        '76osLAOK',
        '9088815dDwxDS',
        'map',
        '/dev/stdin',
        'split',
        '8550213Mdaykq',
        '8sFuZpl',
        'trim',
        'log',
        '8ZMCPYy',
        'shift'
    ];
    a0_0x5cdf = function () {
        return _0x574b6c;
    };
    return a0_0x5cdf();
}
var a0_0x1bf6de = a0_0x3039;
(function (stringArrayFunction, comparisonValue) {
    var _0x3172f6 = a0_0x3039;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3172f6(0x10f)) / 0x1 * (-parseInt(_0x3172f6(0x112)) / 0x2) + -parseInt(_0x3172f6(0x10c)) / 0x3 * (parseInt(_0x3172f6(0x118)) / 0x4) + -parseInt(_0x3172f6(0x113)) / 0x5 + -parseInt(_0x3172f6(0x10e)) / 0x6 + parseInt(_0x3172f6(0x117)) / 0x7 * (parseInt(_0x3172f6(0x11b)) / 0x8) + parseInt(_0x3172f6(0x111)) / 0x9 + -parseInt(_0x3172f6(0x10b)) / 0xa * (-parseInt(_0x3172f6(0x11d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5cdf, 0xed887));
function Main(input) {
    var _0x512f51 = a0_0x3039;
    input = input[_0x512f51(0x116)]('\x0a')[_0x512f51(0x114)](Number);
    input[_0x512f51(0x11c)]();
    var n = arrsum(input);
    if (n == input[_0x512f51(0x10d)]) {
        n = 0x1;
    }
    if (n % 0x2 == 0x1) {
        console[_0x512f51(0x11a)]('first');
    } else {
        console[_0x512f51(0x11a)](_0x512f51(0x110));
    }
}
Main(require('fs')['readFileSync'](a0_0x1bf6de(0x115), 'utf8')[a0_0x1bf6de(0x119)]());
function arrsum(arr) {
    var sum = 0x0;
    for (var i = 0x0, len = arr['length']; i < len; ++i) {
        sum += arr[i];
    }
    ;
    return sum;
}