var a0_0x75d8ad = a0_0xbb03;
function a0_0x2cc7() {
    var _0x5cd9df = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'length',
        'indexOf',
        'log'
    ];
    a0_0x2cc7 = function () {
        return _0x5cd9df;
    };
    return a0_0x2cc7();
}
var input = require('fs')[a0_0x75d8ad(0x0)]('/dev/stdin', a0_0x75d8ad(0x1));
var Arr = input[a0_0x75d8ad(0x2)]()[a0_0x75d8ad(0x3)]('\x0a');
function a0_0xbb03(FhNTRR, key) {
    var stringArray = a0_0x2cc7();
    a0_0xbb03 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xbb03(FhNTRR, key);
}
for (var i = 0x0; i < Arr[a0_0x75d8ad(0x4)]; i++) {
    if (Arr[i] == '0\x200')
        break;
    var arr = Arr[i][a0_0x75d8ad(0x3)]('\x20');
    var x = arr[0x0]['split']('');
    var y = arr[0x1][a0_0x75d8ad(0x3)]('');
    var h = 0x0;
    var b = 0x0;
    for (var j = 0x0; j < 0x4; j++) {
        if (x[j] == y[j]) {
            h++;
        } else if (y[a0_0x75d8ad(0x5)](x[j]) != -0x1) {
            b++;
        }
    }
    console[a0_0x75d8ad(0x6)](h + '\x20' + b);
}