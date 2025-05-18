var a0_0x3938b6 = a0_0x1b16;
function a0_0x1b16(CIYsmW, key) {
    var stringArray = a0_0x4e83();
    a0_0x1b16 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b16(CIYsmW, key);
}
var input = require('fs')[a0_0x3938b6(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x3938b6(0x1)]()[a0_0x3938b6(0x2)]('\x0a')[a0_0x3938b6(0x3)](Number);
for (var i = 0x0; i < Arr[a0_0x3938b6(0x4)]; i++) {
    if (Arr[i] == -0x1)
        break;
    var a = Arr[i];
    var sum = 0x47e;
    if (a > 0xa && a <= 0x14)
        sum = 0x47e + 0x7d * (a - 0xa);
    else if (a > 0x14 && a <= 0x1e)
        sum = 0x47e + 0x7d * 0xa + 0x8c * (a - 0x14);
    else if (a > 0x1e)
        sum = 0x47e + 0x7d * 0xa + 0x8c * 0xa + 0xa0 * (a - 0x1e);
    console[a0_0x3938b6(0x5)](0x10b8 - sum);
}
function a0_0x4e83() {
    var _0x382e28 = [
        'readFileSync',
        'trim',
        'split',
        'map',
        'length',
        'log'
    ];
    a0_0x4e83 = function () {
        return _0x382e28;
    };
    return a0_0x4e83();
}