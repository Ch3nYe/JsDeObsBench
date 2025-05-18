var a0_0x39b6fe = a0_0x3f9e;
var input = require('fs')[a0_0x39b6fe(0x0)](a0_0x39b6fe(0x1), 'utf8');
function a0_0x228b() {
    var _0x1ea282 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'reverse',
        'shift',
        'forEach',
        'slice',
        'join',
        'replace'
    ];
    a0_0x228b = function () {
        return _0x1ea282;
    };
    return a0_0x228b();
}
var Arr = input[a0_0x39b6fe(0x2)]()[a0_0x39b6fe(0x3)]('\x0a');
function a0_0x3f9e(CwQyJv, key) {
    var stringArray = a0_0x228b();
    a0_0x3f9e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f9e(CwQyJv, key);
}
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()[a0_0x39b6fe(0x3)]('')[a0_0x39b6fe(0x4)]();
    var str = Arr[a0_0x39b6fe(0x5)]();
    var x = str['length'];
    arr[a0_0x39b6fe(0x6)](function (v) {
        var _0x12065d = a0_0x3f9e;
        if (v == 'J')
            str = str[_0x12065d(0x7)](-0x1) + str[_0x12065d(0x7)](0x0, -0x1);
        else if (v == 'C')
            str = str[_0x12065d(0x7)](0x1) + str[_0x12065d(0x7)](0x0, 0x1);
        else if (v == 'E' && x % 0x2 == 0x0)
            str = str[_0x12065d(0x7)](x / 0x2, x) + str[_0x12065d(0x7)](0x0, x / 0x2);
        else if (v == 'E' && x % 0x2 == 0x1)
            str = str['slice'](~~(x / 0x2) + 0x1, x) + str[~~(x / 0x2)] + str['slice'](0x0, ~~(x / 0x2));
        else if (v == 'A')
            str = str[_0x12065d(0x3)]('')['reverse']()[_0x12065d(0x8)]('');
        else if (v == 'P')
            str = str['replace'](/\d/g, function (s) {
                return s == '0' ? '9' : s - 0x0 - 0x1;
            });
        else if (v == 'M')
            str = str[_0x12065d(0x9)](/\d/g, function (s) {
                return s == '9' ? '0' : s - 0x0 + 0x1;
            });
    });
    console['log'](str);
}