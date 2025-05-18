function a0_0x39c8() {
    var _0x10f6b6 = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'length'
    ];
    a0_0x39c8 = function () {
        return _0x10f6b6;
    };
    return a0_0x39c8();
}
function a0_0x1199(mdYXJu, key) {
    var stringArray = a0_0x39c8();
    a0_0x1199 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1199(mdYXJu, key);
}
var a0_0xae1d8d = a0_0x1199;
var input = require('fs')['readFileSync'](a0_0xae1d8d(0x0), 'utf8');
var arr = input[a0_0xae1d8d(0x1)]()[a0_0xae1d8d(0x2)]('\x0a');
while (!![]) {
    var n = arr[a0_0xae1d8d(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    Arr = Arr[a0_0xae1d8d(0x4)](function (v) {
        var _0x2f6677 = a0_0x1199;
        return v[_0x2f6677(0x5)];
    });
    for (var i = 0x0; i < Arr[a0_0xae1d8d(0x5)]; i++) {
        var good = [
            0x5,
            0x7,
            0x5,
            0x7,
            0x7
        ];
        var sum = 0x0;
        for (var j = i; j < Arr[a0_0xae1d8d(0x5)]; j++) {
            if (good[a0_0xae1d8d(0x5)] == 0x0)
                break;
            sum += Arr[j];
            if (good[0x0] > sum)
                continue;
            else if (good[0x0] < sum)
                break;
            else if (good[0x0] == sum) {
                good[a0_0xae1d8d(0x3)]();
                sum = 0x0;
            }
        }
        if (good[a0_0xae1d8d(0x5)] == 0x0) {
            console['log'](i + 0x1);
            break;
        }
    }
}