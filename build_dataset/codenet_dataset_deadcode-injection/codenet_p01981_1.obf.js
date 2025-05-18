function a0_0x5ee2(UQdOpx, key) {
    var stringArray = a0_0x498d();
    a0_0x5ee2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ee2(UQdOpx, key);
}
var a0_0x2b3efa = a0_0x5ee2;
var input = require('fs')[a0_0x2b3efa(0x0)](a0_0x2b3efa(0x1), a0_0x2b3efa(0x2));
var arr = input[a0_0x2b3efa(0x3)]()[a0_0x2b3efa(0x4)]('\x0a');
function a0_0x498d() {
    var _0x1a797c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'log'
    ];
    a0_0x498d = function () {
        return _0x1a797c;
    };
    return a0_0x498d();
}
while (!![]) {
    var gymd = arr['shift']();
    if (gymd == '#')
        break;
    var [g, y, m, d] = gymd[a0_0x2b3efa(0x4)]('\x20');
    [y, m, d] = [
        y - 0x0,
        m - 0x0,
        d - 0x0
    ];
    if (y <= 0x1e || y == 0x1f && m <= 0x4)
        console['log'](gymd);
    else {
        y = y - 0x1e;
        console[a0_0x2b3efa(0x5)]('?\x20' + y + '\x20' + m + '\x20' + d);
    }
}