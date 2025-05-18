function a0_0x7569(tQlXjh, key) {
    var stringArray = a0_0x4695();
    a0_0x7569 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7569(tQlXjh, key);
}
var a0_0x498eaa = a0_0x7569;
var input = require('fs')[a0_0x498eaa(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x498eaa(0x1)]()[a0_0x498eaa(0x2)]('\x0a');
while (!![]) {
    var AL = Arr[a0_0x498eaa(0x3)]();
    if (AL == 0x0)
        break;
    var pd = [];
    for (var i = 0x0; i < AL; i++) {
        var arr = Arr[a0_0x498eaa(0x3)]()[a0_0x498eaa(0x2)]('\x20')['map'](Number);
        var p = arr[0x0];
        var d = arr[0x1] + arr[0x2];
        pd[a0_0x498eaa(0x4)]([
            p,
            d
        ]);
    }
    pd[a0_0x498eaa(0x5)](function (a, b) {
        if (a[0x1] <= b[0x1])
            return 0x1;
        else
            return -0x1;
    });
    console['log'](pd[0x0][a0_0x498eaa(0x6)]('\x20'));
}
function a0_0x4695() {
    var _0x20087a = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'push',
        'sort',
        'join'
    ];
    a0_0x4695 = function () {
        return _0x20087a;
    };
    return a0_0x4695();
}