var a0_0x50f737 = a0_0xddf9;
(function (stringArrayFunction, comparisonValue) {
    var _0x1cf76d = a0_0xddf9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1cf76d(0xac)) / 0x1 * (-parseInt(_0x1cf76d(0xb8)) / 0x2) + parseInt(_0x1cf76d(0xab)) / 0x3 * (-parseInt(_0x1cf76d(0xb0)) / 0x4) + parseInt(_0x1cf76d(0xaf)) / 0x5 + parseInt(_0x1cf76d(0xb3)) / 0x6 + -parseInt(_0x1cf76d(0xa9)) / 0x7 + parseInt(_0x1cf76d(0xb5)) / 0x8 * (-parseInt(_0x1cf76d(0xb2)) / 0x9) + parseInt(_0x1cf76d(0xba)) / 0xa * (parseInt(_0x1cf76d(0xae)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x54e3, 0x97fa0));
function a0_0x54e3() {
    var _0x4b4f6f = [
        '16386FFuojJ',
        '1UlMNTB',
        'split',
        '34001XRbqZA',
        '5799045zXpbcU',
        '888hEEORp',
        'log',
        '105471kNCtRa',
        '7130622ngLDHW',
        'shift',
        '800IQcOrs',
        'length',
        'utf8',
        '365962DuEzbZ',
        'readFileSync',
        '5770TzbVaL',
        '6592684wcpwBa',
        '/dev/stdin'
    ];
    a0_0x54e3 = function () {
        return _0x4b4f6f;
    };
    return a0_0x54e3();
}
var input = require('fs')[a0_0x50f737(0xb9)](a0_0x50f737(0xaa), a0_0x50f737(0xb7));
var Arr = input['trim']()[a0_0x50f737(0xad)]('\x0a');
var t = Arr[0x0]['split']('\x20')[0x1] - 0x0;
function a0_0xddf9(LaxtHg, key) {
    var stringArray = a0_0x54e3();
    a0_0xddf9 = function (index, key) {
        index = index - 0xa9;
        var value = stringArray[index];
        return value;
    };
    return a0_0xddf9(LaxtHg, key);
}
Arr[a0_0x50f737(0xb4)]();
var T = 0x0;
while (Arr[a0_0x50f737(0xb6)] != 0x0) {
    var arr = Arr[0x0]['split']('\x20');
    Arr[a0_0x50f737(0xb4)]();
    var a = arr[0x0];
    var b = arr[0x1] - 0x0;
    if (b - t <= 0x0) {
        console[a0_0x50f737(0xb1)](a + '\x20' + (T + b));
        T += b;
    } else {
        Arr['push'](a + '\x20' + (b - t));
        T += t;
    }
}