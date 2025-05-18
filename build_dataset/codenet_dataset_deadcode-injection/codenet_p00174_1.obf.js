var a0_0xcaa6c8 = a0_0x4b0b;
function a0_0x4b0b(xXPBdS, key) {
    var stringArray = a0_0x2d63();
    a0_0x4b0b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b0b(xXPBdS, key);
}
var input = require('fs')['readFileSync'](a0_0xcaa6c8(0x0), a0_0xcaa6c8(0x1));
var Arr = input[a0_0xcaa6c8(0x2)](/\n$/, '')[a0_0xcaa6c8(0x3)]('\x0a');
function a0_0x2d63() {
    var _0x25f6a5 = [
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift',
        'forEach'
    ];
    a0_0x2d63 = function () {
        return _0x25f6a5;
    };
    return a0_0x2d63();
}
while (!![]) {
    var str = Arr[a0_0xcaa6c8(0x4)]();
    if (str == '0')
        break;
    var arr = str[a0_0xcaa6c8(0x3)]('');
    var a = 0x0;
    var b = 0x0;
    arr[a0_0xcaa6c8(0x4)]();
    arr[a0_0xcaa6c8(0x5)](function (v) {
        if (v == 'A')
            a++;
        if (v == 'B')
            b++;
    });
    a > b ? a++ : b++;
    console['log'](a + '\x20' + b);
}