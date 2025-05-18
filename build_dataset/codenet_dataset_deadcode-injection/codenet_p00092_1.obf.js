var a0_0xeacefd = a0_0x3146;
function a0_0x2670() {
    var _0x2842f9 = [
        'min',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push'
    ];
    a0_0x2670 = function () {
        return _0x2842f9;
    };
    return a0_0x2670();
}
function seach(y, x) {
    var _0x2e0417 = a0_0x3146;
    if (yx[y][x] == '*')
        return 0x0;
    var dy = [
        -0x1,
        -0x1,
        0x0
    ];
    var dx = [
        -0x1,
        0x0,
        -0x1
    ];
    var min = n;
    for (var i = 0x0; i < 0x3; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= n || xx < 0x0 || xx >= n)
            return 0x1;
        min = Math[_0x2e0417(0x0)](min, yx[yy][xx]);
    }
    return min + 0x1;
}
function a0_0x3146(KbsULR, key) {
    var stringArray = a0_0x2670();
    a0_0x3146 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3146(KbsULR, key);
}
var input = require('fs')[a0_0xeacefd(0x1)](a0_0xeacefd(0x2), a0_0xeacefd(0x3));
var Arr = input[a0_0xeacefd(0x4)]()[a0_0xeacefd(0x5)]('\x0a');
while (!![]) {
    var n = Arr[a0_0xeacefd(0x6)]() - 0x0;
    if (n == 0x0)
        break;
    var max = 0x0;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var str = Arr[a0_0xeacefd(0x6)]();
        yx[a0_0xeacefd(0x7)](str[a0_0xeacefd(0x5)](''));
    }
    for (var y = 0x0; y < n; y++) {
        for (var x = 0x0; x < n; x++) {
            yx[y][x] = seach(y, x);
            max = Math['max'](max, yx[y][x]);
        }
    }
    console['log'](max);
}