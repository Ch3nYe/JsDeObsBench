var a0_0x8eff17 = a0_0x5149;
var input = require('fs')[a0_0x8eff17(0x0)](a0_0x8eff17(0x1), a0_0x8eff17(0x2));
function a0_0x5149(zVJaPQ, key) {
    var stringArray = a0_0x4a87();
    a0_0x5149 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5149(zVJaPQ, key);
}
var Arr = input[a0_0x8eff17(0x3)]()[a0_0x8eff17(0x4)]('\x0a');
function a0_0x4a87() {
    var _0x247337 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'replace',
        'log'
    ];
    a0_0x4a87 = function () {
        return _0x247337;
    };
    return a0_0x4a87();
}
for (var i = 0x0; i < Arr[a0_0x8eff17(0x5)]; i = i + 0x2) {
    var n = Arr[i] - 0x0;
    var str = Arr[i + 0x1];
    for (var j = 0x0; j < n; j++) {
        str = str[a0_0x8eff17(0x6)](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (s) {
            var _0x105800 = a0_0x5149;
            return s[_0x105800(0x5)] + s[0x0];
        });
    }
    console[a0_0x8eff17(0x7)](str);
    if (Arr[i + 0x2] == '0')
        break;
}