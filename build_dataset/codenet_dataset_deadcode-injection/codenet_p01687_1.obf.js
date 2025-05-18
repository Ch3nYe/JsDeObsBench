var a0_0x78a27e = a0_0x5583;
function a0_0x5708() {
    var _0x5444bc = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'length',
        'join',
        'sort',
        'slice',
        'AIZUNYAN'
    ];
    a0_0x5708 = function () {
        return _0x5444bc;
    };
    return a0_0x5708();
}
var input = require('fs')[a0_0x78a27e(0x0)](a0_0x78a27e(0x1), 'utf8');
var s = input[a0_0x78a27e(0x2)]();
for (var i = 0x0; i < s[a0_0x78a27e(0x3)] - 0x7; i++) {
    var arr = [
        s[i],
        s[i + 0x1],
        s[i + 0x2],
        s[i + 0x3],
        s[i + 0x4],
        s[i + 0x5],
        s[i + 0x6],
        s[i + 0x7]
    ];
    if (arr[a0_0x78a27e(0x4)]('') == 'AIZUNYAN') {
        i += 0x7;
        continue;
    }
    var str = arr[a0_0x78a27e(0x5)]()[a0_0x78a27e(0x4)]('');
    if (str == 'AADINNUY') {
        s = s[a0_0x78a27e(0x6)](0x0, i) + a0_0x78a27e(0x7) + s[a0_0x78a27e(0x6)](i + 0x8, s[a0_0x78a27e(0x3)]);
        i += 0x7;
    }
}
function a0_0x5583(XTRVSN, key) {
    var stringArray = a0_0x5708();
    a0_0x5583 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5583(XTRVSN, key);
}
console['log'](s);