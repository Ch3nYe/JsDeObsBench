var a0_0x39490b = a0_0x470d;
function a0_0x470d(HHDCJB, key) {
    var stringArray = a0_0x4d21();
    a0_0x470d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x470d(HHDCJB, key);
}
var input = require('fs')[a0_0x39490b(0x0)](a0_0x39490b(0x1), 'utf8');
var arr = input[a0_0x39490b(0x2)]()['split']('\x0a');
function a0_0x4d21() {
    var _0x40ff04 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'forEach',
        'log'
    ];
    a0_0x4d21 = function () {
        return _0x40ff04;
    };
    return a0_0x4d21();
}
while (!![]) {
    var n = arr[a0_0x39490b(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['shift']()[a0_0x39490b(0x4)]('\x20');
    var L = 0x0;
    var R = 0x0;
    var UD = 0x2;
    var cnt = 0x0;
    ary[a0_0x39490b(0x5)](function (v) {
        if (v == 'lu')
            L = 0x1;
        else if (v == 'ru')
            R = 0x1;
        else if (v == 'ld')
            L = 0x0;
        else if (v == 'rd')
            R = 0x0;
        if (UD == L + R) {
            cnt++;
            UD = UD == 0x2 ? 0x0 : 0x2;
        }
    });
    console[a0_0x39490b(0x6)](cnt);
}