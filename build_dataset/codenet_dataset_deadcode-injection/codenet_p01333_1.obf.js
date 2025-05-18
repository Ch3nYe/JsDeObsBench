function a0_0x53ff() {
    var _0x141fac = [
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'log'
    ];
    a0_0x53ff = function () {
        return _0x141fac;
    };
    return a0_0x53ff();
}
var a0_0x594a67 = a0_0x4089;
var input = require('fs')['readFileSync'](a0_0x594a67(0x0), a0_0x594a67(0x1));
var Arr = input[a0_0x594a67(0x2)]()['split']('\x0a');
function a0_0x4089(QoyTxm, key) {
    var stringArray = a0_0x53ff();
    a0_0x4089 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4089(QoyTxm, key);
}
while (!![]) {
    var ab = Arr[a0_0x594a67(0x3)]()['split']('\x20');
    ;
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var m = ab[0x1] - ab[0x0];
    var arr = [
        0x0,
        0x0,
        0x0
    ];
    while (m >= 0x3e8) {
        m -= 0x3e8;
        arr[0x2]++;
    }
    while (m >= 0x1f4) {
        m -= 0x1f4;
        arr[0x1]++;
    }
    while (m >= 0x64) {
        m -= 0x64;
        arr[0x0]++;
    }
    console[a0_0x594a67(0x4)](arr['join']('\x20'));
}