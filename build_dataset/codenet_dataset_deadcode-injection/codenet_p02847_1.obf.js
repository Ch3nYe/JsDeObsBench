function a0_0x2a7d(PbiaXp, key) {
    var stringArray = a0_0x5f1b();
    a0_0x2a7d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a7d(PbiaXp, key);
}
function a0_0x5f1b() {
    var _0x18b25c = [
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5f1b = function () {
        return _0x18b25c;
    };
    return a0_0x5f1b();
}
var a0_0x50d9a4 = a0_0x2a7d;
function Main(input) {
    var _0x22eea1 = a0_0x2a7d;
    var result;
    switch (input) {
    case 'SUN':
        result = '7';
        break;
    case _0x22eea1(0x0):
        result = '6';
        break;
    case _0x22eea1(0x1):
        result = '5';
        break;
    case _0x22eea1(0x2):
        result = '4';
        break;
    case _0x22eea1(0x3):
        result = '3';
        break;
    case _0x22eea1(0x4):
        result = '2';
        break;
    case _0x22eea1(0x5):
        result = '1';
        break;
    }
    console['log'](result);
}
Main(require('fs')[a0_0x50d9a4(0x6)](a0_0x50d9a4(0x7), a0_0x50d9a4(0x8)));