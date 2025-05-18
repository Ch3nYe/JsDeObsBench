function a0_0x1560(IlWUzX, key) {
    var stringArray = a0_0x3638();
    a0_0x1560 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1560(IlWUzX, key);
}
var a0_0x37561d = a0_0x1560;
var input = require('fs')[a0_0x37561d(0x0)](a0_0x37561d(0x1), 'utf8');
var Arr = input[a0_0x37561d(0x2)](/\n$/, '')[a0_0x37561d(0x3)]('\x0a');
function a0_0x3638() {
    var _0x3cffe0 = [
        'readFileSync',
        '/dev/stdin',
        'replace',
        'split',
        'shift',
        '0\x200',
        'concat',
        'map',
        'sort',
        'reduce',
        'abs',
        'log'
    ];
    a0_0x3638 = function () {
        return _0x3cffe0;
    };
    return a0_0x3638();
}
while (!![]) {
    var str = Arr[a0_0x37561d(0x4)]();
    if (str == a0_0x37561d(0x5))
        break;
    var arr = str[a0_0x37561d(0x3)]('\x20');
    var data = [0x0];
    if (arr[0x0] > 0x0)
        data = data[a0_0x37561d(0x6)](Arr[a0_0x37561d(0x4)]()[a0_0x37561d(0x3)]('\x20')[a0_0x37561d(0x7)](Number));
    if (arr[0x1] > 0x0)
        data = data[a0_0x37561d(0x6)](Arr['shift']()[a0_0x37561d(0x3)]('\x20')[a0_0x37561d(0x7)](Number));
    data[a0_0x37561d(0x8)](function (a, b) {
        return a - b;
    });
    var max = 0x0;
    data[a0_0x37561d(0x9)](function (a, b) {
        var _0x399a9e = a0_0x1560;
        max = Math['max'](max, Math[_0x399a9e(0xa)](a - b));
        return b;
    });
    console[a0_0x37561d(0xb)](max);
}