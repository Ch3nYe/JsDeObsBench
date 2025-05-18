var a0_0x5128fa = a0_0x8039;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x5128fa(0x0));
input = input[a0_0x5128fa(0x1)]()['split']('\x0a');
arr = input[0x1][a0_0x5128fa(0x2)]('\x20')[a0_0x5128fa(0x3)](Number);
function a0_0x5d31() {
    var _0x163458 = [
        'utf8',
        'trim',
        'split',
        'map',
        'filter',
        'log',
        'length'
    ];
    a0_0x5d31 = function () {
        return _0x163458;
    };
    return a0_0x5d31();
}
arr = arr[a0_0x5128fa(0x4)](v => v % 0x2 == 0x0);
function a0_0x8039(FvBPWz, key) {
    var stringArray = a0_0x5d31();
    a0_0x8039 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8039(FvBPWz, key);
}
console[a0_0x5128fa(0x5)](arr[a0_0x5128fa(0x6)]);