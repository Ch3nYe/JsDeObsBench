var a0_0x4c350f = a0_0x312d;
function a0_0x38a2() {
    var _0x51bebc = [
        '367074NRGpKh',
        'floor',
        'log',
        'map',
        '1011736QnSVmS',
        'reduce',
        'split',
        '10pufFnv',
        'readFileSync',
        '570942YFQFuV',
        'trim',
        '3426460VxTlrh',
        'utf8',
        '14gknaPc',
        '471925ZOvWQP',
        '104UfJkix',
        '146244tHSLZn',
        '8FLvzDC',
        '7415276XEviSu'
    ];
    a0_0x38a2 = function () {
        return _0x51bebc;
    };
    return a0_0x38a2();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xa05498 = a0_0x312d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xa05498(0xe3)) / 0x1 + parseInt(_0xa05498(0xec)) / 0x2 + parseInt(_0xa05498(0xe5)) / 0x3 * (parseInt(_0xa05498(0xe6)) / 0x4) + -parseInt(_0xa05498(0xe0)) / 0x5 + -parseInt(_0xa05498(0xde)) / 0x6 * (parseInt(_0xa05498(0xe2)) / 0x7) + -parseInt(_0xa05498(0xe4)) / 0x8 * (-parseInt(_0xa05498(0xe8)) / 0x9) + parseInt(_0xa05498(0xdc)) / 0xa * (parseInt(_0xa05498(0xe7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x38a2, 0x70587));
var input = require('fs')[a0_0x4c350f(0xdd)]('/dev/stdin', a0_0x4c350f(0xe1));
var arr = input[a0_0x4c350f(0xdf)]()['split']('\x0a');
var [n, c] = arr[0x0][a0_0x4c350f(0xdb)]('\x20')[a0_0x4c350f(0xeb)](Number);
var p = arr[0x1][a0_0x4c350f(0xdb)]('\x20')['map'](Number);
function a0_0x312d(ysFcmm, key) {
    var stringArray = a0_0x38a2();
    a0_0x312d = function (index, key) {
        index = index - 0xdb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x312d(ysFcmm, key);
}
var sum = p[a0_0x4c350f(0xed)]((a, b) => a + b);
var x = sum % (n + 0x1) == 0x0 ? 0x0 : 0x1;
console[a0_0x4c350f(0xea)](Math[a0_0x4c350f(0xe9)](sum / (n + 0x1)) + x);