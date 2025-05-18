function a0_0x5a23(YZEKEz, key) {
    var stringArray = a0_0x2ac2();
    a0_0x5a23 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a23(YZEKEz, key);
}
var a0_0x52686b = a0_0x5a23;
var input = require('fs')[a0_0x52686b(0x0)](a0_0x52686b(0x1), a0_0x52686b(0x2));
var arr = input['trim']()[a0_0x52686b(0x3)]('\x0a');
var ans = '';
while (arr[a0_0x52686b(0x4)]() != 0x0) {
    var a = arr['shift']()[a0_0x52686b(0x3)]('\x20');
    var obj = {};
    for (var i = 0x0; i < a[a0_0x52686b(0x5)]; i++) {
        obj[a[i]] = obj[a[i]] + 0x1 || 0x1;
        var s = [];
        for (var k in obj)
            s[a0_0x52686b(0x6)]([
                obj[k],
                k
            ]);
        s[a0_0x52686b(0x7)](function (a, b) {
            return b[0x0] - a[0x0];
        });
        if (s[a0_0x52686b(0x5)] == 0x1)
            s[0x1] = [0x0];
        if (s[0x0][0x0] > s[0x1][0x0] + a[a0_0x52686b(0x5)] - (i + 0x1)) {
            ans += s[0x0][0x1] + '\x20' + (i + 0x1) + '\x0a';
            break;
        }
    }
    if (i == a[a0_0x52686b(0x5)])
        ans += a0_0x52686b(0x8) + '\x0a';
}
console['log'](ans['trim']());
function a0_0x2ac2() {
    var _0x565aa7 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'length',
        'push',
        'sort',
        'TIE'
    ];
    a0_0x2ac2 = function () {
        return _0x565aa7;
    };
    return a0_0x2ac2();
}