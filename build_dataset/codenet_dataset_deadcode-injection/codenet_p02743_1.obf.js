function a0_0x4e7c(iweWDM, key) {
    var stringArray = a0_0x5850();
    a0_0x4e7c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e7c(iweWDM, key);
}
var a0_0x261178 = a0_0x4e7c;
inp = require('fs')[a0_0x261178(0x0)](a0_0x261178(0x1), a0_0x261178(0x2))[a0_0x261178(0x3)]()['split']('\x0a');
l = inp['shift']()[a0_0x261178(0x4)]('\x20');
a = l[a0_0x261178(0x5)]() * 0x1;
function a0_0x5850() {
    var _0x2c902b = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'sqrt',
        'Yes'
    ];
    a0_0x5850 = function () {
        return _0x2c902b;
    };
    return a0_0x5850();
}
b = l[a0_0x261178(0x5)]() * 0x1;
c = l[a0_0x261178(0x5)]() * 0x1;
console['log'](Math['sqrt'](a) + Math[a0_0x261178(0x6)](b) < Math[a0_0x261178(0x6)](c) ? a0_0x261178(0x7) : 'No');