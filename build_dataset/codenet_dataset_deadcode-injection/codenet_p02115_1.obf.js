var a0_0x15f005 = a0_0x3136;
var input = require('fs')[a0_0x15f005(0x0)]('/dev/stdin', 'utf8');
var arr = input[a0_0x15f005(0x1)]()[a0_0x15f005(0x2)]('\x0a')[a0_0x15f005(0x3)](Number);
var n = arr[a0_0x15f005(0x4)]();
var a = arr['shift']();
function a0_0x5532() {
    var _0x363114 = [
        'readFileSync',
        'trim',
        'split',
        'map',
        'shift',
        'forEach',
        'max'
    ];
    a0_0x5532 = function () {
        return _0x363114;
    };
    return a0_0x5532();
}
var cnt = 0x1;
function a0_0x3136(MbkVDT, key) {
    var stringArray = a0_0x5532();
    a0_0x3136 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3136(MbkVDT, key);
}
var max = 0x1;
var memo = 0x0;
arr[a0_0x15f005(0x5)](v => {
    var _0x5c7f44 = a0_0x3136;
    if (a > v) {
        if (memo == 0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = -0x1;
    } else if (a < v) {
        if (memo == -0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = 0x1;
    }
    max = Math[_0x5c7f44(0x6)](max, cnt);
    a = v;
});
console['log'](max);