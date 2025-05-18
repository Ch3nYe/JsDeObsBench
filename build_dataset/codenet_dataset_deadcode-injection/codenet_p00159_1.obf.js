function a0_0x1c25() {
    var _0x7e5996 = [
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'abs',
        'set',
        'toString',
        'entries',
        'sort',
        'log',
        'next'
    ];
    a0_0x1c25 = function () {
        return _0x7e5996;
    };
    return a0_0x1c25();
}
var a0_0x122ca5 = a0_0x4db9;
let input = require('fs')['readFileSync']('/dev/stdin', a0_0x122ca5(0x0));
function a0_0x4db9(MsdcSC, key) {
    var stringArray = a0_0x1c25();
    a0_0x4db9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4db9(MsdcSC, key);
}
let Arr = input[a0_0x122ca5(0x1)]()[a0_0x122ca5(0x2)]('\x0a');
let bmis = new Map();
while (0x1) {
    let n = Arr[0x0];
    if (n == 0x0)
        break;
    Arr[a0_0x122ca5(0x3)]();
    for (var i = 0x0; i < n; ++i) {
        var nums = Arr[0x0][a0_0x122ca5(0x2)]('\x20')[a0_0x122ca5(0x4)](Number);
        var m = nums[0x1] / 0x64;
        var bmi = nums[0x2] / (m * m);
        var dif = Math[a0_0x122ca5(0x5)](0x16 - bmi);
        bmis[a0_0x122ca5(0x6)](nums[0x0][a0_0x122ca5(0x7)](), dif);
        Arr[a0_0x122ca5(0x3)]();
    }
    let sorted = new Map([...bmis[a0_0x122ca5(0x8)]()][a0_0x122ca5(0x9)]((a, b) => a[0x1] - b[0x1]));
    console[a0_0x122ca5(0xa)](sorted['keys']()[a0_0x122ca5(0xb)]()['value']);
}