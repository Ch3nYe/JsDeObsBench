function a0_0x1b2d(pWegUT, key) {
    var stringArray = a0_0x396e();
    a0_0x1b2d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b2d(pWegUT, key);
}
var a0_0x590a0f = a0_0x1b2d;
var input = require('fs')[a0_0x590a0f(0x0)](a0_0x590a0f(0x1), a0_0x590a0f(0x2));
var arr = input['trim']()[a0_0x590a0f(0x3)]('\x0a');
var n = arr[a0_0x590a0f(0x4)]() - 0x0;
var cnt = 0x0;
arr[a0_0x590a0f(0x5)](v => {
    var _0x54d186 = a0_0x1b2d;
    if (v == _0x54d186(0x6))
        cnt++;
});
console['log'](cnt);
function a0_0x396e() {
    var _0x526ee6 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'forEach',
        'E869120'
    ];
    a0_0x396e = function () {
        return _0x526ee6;
    };
    return a0_0x396e();
}