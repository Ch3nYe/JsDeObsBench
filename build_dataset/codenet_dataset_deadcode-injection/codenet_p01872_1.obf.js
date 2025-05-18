var a0_0x35567a = a0_0x76ee;
var input = require('fs')[a0_0x35567a(0x0)](a0_0x35567a(0x1), a0_0x35567a(0x2));
function a0_0x1a32() {
    var _0x808963 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'replace',
        'split',
        'map',
        'reverse',
        'length',
        'log',
        'MULTIPLE'
    ];
    a0_0x1a32 = function () {
        return _0x808963;
    };
    return a0_0x1a32();
}
var str = input[a0_0x35567a(0x3)]();
var ans = '';
for (var j = 0x0; j <= 0x9; j++) {
    var arr = str[a0_0x35567a(0x4)](/\?/, j)[a0_0x35567a(0x5)]('')[a0_0x35567a(0x6)](Number)[a0_0x35567a(0x7)]();
    var sum = 0x0;
    for (var i = 0x1; i <= 0x6; i++)
        sum += arr[i] * (i + 0x1);
    for (var i = 0x7; i <= 0xb; i++)
        sum += arr[i] * (i - 0x5);
    var p = 0xb - sum % 0xb;
    if (sum % 0xb <= 0x1)
        p = 0x0;
    ans += p == arr[0x0] ? j : '';
}
function a0_0x76ee(fJbxwj, key) {
    var stringArray = a0_0x1a32();
    a0_0x76ee = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x76ee(fJbxwj, key);
}
if (ans[a0_0x35567a(0x8)] == 0x1)
    console[a0_0x35567a(0x9)](ans[0x0]);
else
    console['log'](a0_0x35567a(0xa));