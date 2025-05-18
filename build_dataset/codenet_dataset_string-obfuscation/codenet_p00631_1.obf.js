function a0_0x1b28(gaWLaR, key) {
    var stringArray = a0_0x3797();
    a0_0x1b28 = function (index, key) {
        index = index - 0xb1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b28(gaWLaR, key);
}
var a0_0x302d13 = a0_0x1b28;
(function (stringArrayFunction, comparisonValue) {
    var _0x493145 = a0_0x1b28;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x493145(0xb2)) / 0x1 * (-parseInt(_0x493145(0xc0)) / 0x2) + parseInt(_0x493145(0xb6)) / 0x3 * (-parseInt(_0x493145(0xbd)) / 0x4) + -parseInt(_0x493145(0xbc)) / 0x5 + parseInt(_0x493145(0xb3)) / 0x6 * (parseInt(_0x493145(0xb5)) / 0x7) + -parseInt(_0x493145(0xba)) / 0x8 + -parseInt(_0x493145(0xb7)) / 0x9 * (-parseInt(_0x493145(0xbf)) / 0xa) + parseInt(_0x493145(0xb4)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3797, 0x90305));
function bomb(a, b, i) {
    if (i == n) {
        min = Math['min'](min, Math['abs'](a - b));
        return;
    }
    bomb(a + arr[i], b, i + 0x1);
    bomb(a, b + arr[i], i + 0x1);
}
var input = require('fs')[a0_0x302d13(0xbe)]('/dev/stdin', a0_0x302d13(0xb1));
var Arr = input['trim']()['split']('\x0a');
function a0_0x3797() {
    var _0x448f26 = [
        '733215MRwtFE',
        '1764EWWfUD',
        'readFileSync',
        '680jizukB',
        '6122iddKWF',
        'utf8',
        '14LxHkcR',
        '6oFkWFI',
        '12051644kiSeGv',
        '2656122vuxxZA',
        '7035HkKxhL',
        '110664lrHCXF',
        'split',
        'map',
        '3975512NqeMCZ',
        'shift'
    ];
    a0_0x3797 = function () {
        return _0x448f26;
    };
    return a0_0x3797();
}
while (!![]) {
    var n = Arr[a0_0x302d13(0xbb)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x302d13(0xbb)]()[a0_0x302d13(0xb8)]('\x20')[a0_0x302d13(0xb9)](Number);
    var min = Infinity;
    bomb(0x0, 0x0, 0x0);
    console['log'](min);
}