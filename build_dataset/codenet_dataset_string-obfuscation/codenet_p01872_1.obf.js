function a0_0x3f54(JnvqXb, key) {
    var stringArray = a0_0x50f6();
    a0_0x3f54 = function (index, key) {
        index = index - 0x76;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f54(JnvqXb, key);
}
var a0_0x49a3d1 = a0_0x3f54;
function a0_0x50f6() {
    var _0x932d7a = [
        '6zSnnrc',
        'trim',
        'split',
        'readFileSync',
        'length',
        '22035672CaeYsT',
        '2747040UEPqgt',
        '12267304Apuycs',
        '1349505bIhdRO',
        'replace',
        '69155QheOcI',
        '72ytbIJZ',
        '413450yrXCyT',
        'reverse',
        'utf8',
        'log',
        'MULTIPLE',
        '/dev/stdin',
        '6925373onYmhX',
        'map'
    ];
    a0_0x50f6 = function () {
        return _0x932d7a;
    };
    return a0_0x50f6();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x207f87 = a0_0x3f54;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x207f87(0x80)) / 0x1 + parseInt(_0x207f87(0x7a)) / 0x2 + -parseInt(_0x207f87(0x7c)) / 0x3 + -parseInt(_0x207f87(0x7f)) / 0x4 * (-parseInt(_0x207f87(0x7e)) / 0x5) + parseInt(_0x207f87(0x88)) / 0x6 * (parseInt(_0x207f87(0x86)) / 0x7) + parseInt(_0x207f87(0x7b)) / 0x8 + -parseInt(_0x207f87(0x79)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50f6, 0xcb801));
var input = require('fs')[a0_0x49a3d1(0x77)](a0_0x49a3d1(0x85), a0_0x49a3d1(0x82));
var str = input[a0_0x49a3d1(0x89)]();
var ans = '';
for (var j = 0x0; j <= 0x9; j++) {
    var arr = str[a0_0x49a3d1(0x7d)](/\?/, j)[a0_0x49a3d1(0x76)]('')[a0_0x49a3d1(0x87)](Number)[a0_0x49a3d1(0x81)]();
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
if (ans[a0_0x49a3d1(0x78)] == 0x1)
    console[a0_0x49a3d1(0x83)](ans[0x0]);
else
    console[a0_0x49a3d1(0x83)](a0_0x49a3d1(0x84));