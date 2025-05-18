var a0_0x297c32 = a0_0x4de5;
function a0_0x4de5(CADJCP, key) {
    var stringArray = a0_0x24e7();
    a0_0x4de5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4de5(CADJCP, key);
}
var input = require('fs')[a0_0x297c32(0x0)](a0_0x297c32(0x1), 'utf8');
var arr = input['trim']()[a0_0x297c32(0x2)]('\x0a');
var s = arr[0x0][a0_0x297c32(0x2)]('');
for (var i = 0x0; i < s['length']; i++) {
    for (var j = i + 0x1; j < s[a0_0x297c32(0x3)]; j++) {
        if (s[i] == s[j]) {
            s[i] = '';
            s[j] = '';
            break;
        }
    }
}
var n = s[a0_0x297c32(0x4)]('')[a0_0x297c32(0x3)];
function a0_0x24e7() {
    var _0x1fa8a9 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'length',
        'join'
    ];
    a0_0x24e7 = function () {
        return _0x1fa8a9;
    };
    return a0_0x24e7();
}
if (n == 0x0 || n == 0x1)
    console['log'](0x0);
else if (n % 0x2 == 0x0)
    console['log'](n / 0x2);
else
    console['log']((n - 0x1) / 0x2);