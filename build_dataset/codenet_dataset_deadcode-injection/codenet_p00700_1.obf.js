var a0_0x3e5aee = a0_0x3af0;
function a0_0x3af0(PbTqmR, key) {
    var stringArray = a0_0x52fa();
    a0_0x3af0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3af0(PbTqmR, key);
}
var input = require('fs')[a0_0x3e5aee(0x0)](a0_0x3e5aee(0x1), 'utf8');
var arr = input[a0_0x3e5aee(0x2)]()[a0_0x3e5aee(0x3)]('\x0a');
var n = arr[a0_0x3e5aee(0x4)]() - 0x0;
while (n--) {
    var xy = [
        0x0,
        0x0
    ];
    var max = [
        0x0,
        0x0,
        0x0
    ];
    while (!![]) {
        var str = arr[a0_0x3e5aee(0x4)]();
        if (str == a0_0x3e5aee(0x5))
            break;
        var ary = str[a0_0x3e5aee(0x3)]('\x20')[a0_0x3e5aee(0x6)](Number);
        xy[0x0] += ary[0x0];
        xy[0x1] += ary[0x1];
        var d = Math[a0_0x3e5aee(0x7)](xy[0x0] * xy[0x0] + xy[0x1] * xy[0x1]);
        if (max[0x0] < d)
            max = [
                d,
                xy[0x0],
                xy[0x1]
            ];
        else if (max[0x0] == d && max[0x1] < xy[0x0])
            max = [
                d,
                xy[0x0],
                xy[0x1]
            ];
    }
    max[a0_0x3e5aee(0x4)]();
    console[a0_0x3e5aee(0x8)](max[a0_0x3e5aee(0x9)]('\x20'));
}
function a0_0x52fa() {
    var _0x4eb2eb = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'sqrt',
        'log',
        'join'
    ];
    a0_0x52fa = function () {
        return _0x4eb2eb;
    };
    return a0_0x52fa();
}