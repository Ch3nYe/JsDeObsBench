function a0_0x3407(sqJzeU, key) {
    var stringArray = a0_0x2173();
    a0_0x3407 = function (index, key) {
        index = index - 0xeb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3407(sqJzeU, key);
}
var a0_0x4ca4b3 = a0_0x3407;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c9e93 = a0_0x3407;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5c9e93(0xeb)) / 0x1 * (parseInt(_0x5c9e93(0xf2)) / 0x2) + -parseInt(_0x5c9e93(0xef)) / 0x3 * (-parseInt(_0x5c9e93(0xf1)) / 0x4) + -parseInt(_0x5c9e93(0xec)) / 0x5 + -parseInt(_0x5c9e93(0xee)) / 0x6 * (-parseInt(_0x5c9e93(0xf0)) / 0x7) + -parseInt(_0x5c9e93(0xed)) / 0x8 + parseInt(_0x5c9e93(0xf8)) / 0x9 + parseInt(_0x5c9e93(0xf5)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2173, 0x69c89));
function Main(input) {
    var _0x481be7 = a0_0x3407;
    var input = input[_0x481be7(0xf3)]('\x20');
    var A = input[0x0];
    var B = input[0x1];
    var cnt = 0x0;
    function hoge() {
        var _0x5e83a4 = _0x481be7;
        var x = A[_0x5e83a4(0xf7)]();
        if (x[0x0] === x[0x4] && x[0x1] === x[0x3]) {
            return !![];
        }
    }
    while (A <= B) {
        if (hoge()) {
            cnt++;
        }
        A++;
    }
    console[_0x481be7(0xf9)](cnt);
}
function a0_0x2173() {
    var _0x984872 = [
        'split',
        '/dev/stdin',
        '9158430HYnfxv',
        'utf8',
        'toString',
        '1148724VqXiLw',
        'log',
        '87990xKkKWr',
        '4165100WQIwGR',
        '1963528ONlFRx',
        '1788BMkeJi',
        '3285tKDhKO',
        '2359mjTnSK',
        '2308HKQtZv',
        '6aNPtlQ'
    ];
    a0_0x2173 = function () {
        return _0x984872;
    };
    return a0_0x2173();
}
Main(require('fs')['readFileSync'](a0_0x4ca4b3(0xf4), a0_0x4ca4b3(0xf6)));