var a0_0x22e9d7 = a0_0x3c42;
function a0_0x3c42(pIntiZ, key) {
    var stringArray = a0_0x4a76();
    a0_0x3c42 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c42(pIntiZ, key);
}
function a0_0x4a76() {
    var _0x2481b8 = [
        'readFileSync',
        'utf8',
        'split',
        'length',
        'shift',
        'log'
    ];
    a0_0x4a76 = function () {
        return _0x2481b8;
    };
    return a0_0x4a76();
}
var input = require('fs')[a0_0x22e9d7(0x0)]('/dev/stdin', a0_0x22e9d7(0x1));
var Arr = input['trim']()[a0_0x22e9d7(0x2)]('\x0a')['map'](Number);
while (Arr[a0_0x22e9d7(0x3)] != 0x0) {
    var n = Arr[a0_0x22e9d7(0x4)]() / 0x4;
    if (n == 0x0)
        break;
    var sum = 0x0;
    while (n != 0x0) {
        sum += Arr[a0_0x22e9d7(0x4)]();
        n--;
    }
    console[a0_0x22e9d7(0x5)](sum);
}