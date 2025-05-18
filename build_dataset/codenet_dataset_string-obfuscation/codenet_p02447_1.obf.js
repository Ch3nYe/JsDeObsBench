function a0_0x599d() {
    var _0x4b4a88 = [
        'push',
        '1146184fPCYWJ',
        '645386ukirlO',
        '2294454vEftbI',
        '2619440VCUlhO',
        '113445uzUIog',
        '7gYgdjc',
        '4piPnLI',
        'split',
        'log',
        '1069321oyVjRZ',
        '/dev/stdin',
        '5SmWojS',
        'sort',
        'replace',
        'trim',
        'join',
        'utf8',
        '100vWucwc',
        '3548667qWfSZA',
        '408sEdBqA'
    ];
    a0_0x599d = function () {
        return _0x4b4a88;
    };
    return a0_0x599d();
}
var a0_0x478e6b = a0_0x5e65;
function a0_0x5e65(MgrbYW, key) {
    var stringArray = a0_0x599d();
    a0_0x5e65 = function (index, key) {
        index = index - 0xa4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e65(MgrbYW, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x343bc4 = a0_0x5e65;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x343bc4(0xaf)) / 0x1 * (-parseInt(_0x343bc4(0xa5)) / 0x2) + parseInt(_0x343bc4(0xb6)) / 0x3 * (-parseInt(_0x343bc4(0xaa)) / 0x4) + parseInt(_0x343bc4(0xa7)) / 0x5 + -parseInt(_0x343bc4(0xa6)) / 0x6 + parseInt(_0x343bc4(0xa9)) / 0x7 * (parseInt(_0x343bc4(0xa4)) / 0x8) + parseInt(_0x343bc4(0xa8)) / 0x9 * (parseInt(_0x343bc4(0xb5)) / 0xa) + parseInt(_0x343bc4(0xad)) / 0xb * (parseInt(_0x343bc4(0xb7)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x599d, 0xe0846));
var input = require('fs')['readFileSync'](a0_0x478e6b(0xae), a0_0x478e6b(0xb4));
var arr = input[a0_0x478e6b(0xb2)]()[a0_0x478e6b(0xab)]('\x0a');
var n = arr['shift']() - 0x0;
var a = [];
for (var i = 0x0; i < n; i++)
    a[a0_0x478e6b(0xb8)](arr[i][a0_0x478e6b(0xab)]('\x20')['map'](Number));
a[a0_0x478e6b(0xb0)](function (a, b) {
    if (a[0x0] != b[0x0])
        return a[0x0] - b[0x0];
    else
        return a[0x1] - b[0x1];
});
console[a0_0x478e6b(0xac)](a[a0_0x478e6b(0xb3)]('\x0a')[a0_0x478e6b(0xb1)](/,/g, '\x20'));