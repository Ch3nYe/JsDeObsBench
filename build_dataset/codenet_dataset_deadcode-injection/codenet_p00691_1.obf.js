var a0_0x4e3260 = a0_0x167a;
function a0_0x6f15() {
    var _0x119411 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'min'
    ];
    a0_0x6f15 = function () {
        return _0x119411;
    };
    return a0_0x6f15();
}
var input = require('fs')[a0_0x4e3260(0x0)]('/dev/stdin', a0_0x4e3260(0x1));
var arr = input[a0_0x4e3260(0x2)]()[a0_0x4e3260(0x3)]('\x0a');
function a0_0x167a(QcnfoR, key) {
    var stringArray = a0_0x6f15();
    a0_0x167a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x167a(QcnfoR, key);
}
while (!![]) {
    var z = arr[a0_0x4e3260(0x4)]() - 0x0;
    if (z == 0x0)
        break;
    var zzz = z * z * z;
    var ary = [];
    for (var i = z - 0x1; i > 0x0; i--) {
        for (var j = i; j > 0x0; j--) {
            var x = zzz - i * i * i - j * j * j;
            if (x > 0x0)
                ary['push'](x);
        }
    }
    console['log'](Math[a0_0x4e3260(0x5)]['apply'](null, ary));
}