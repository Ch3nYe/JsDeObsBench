function a0_0x5ab2(ehKBug, key) {
    var stringArray = a0_0x3b80();
    a0_0x5ab2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ab2(ehKBug, key);
}
var a0_0xac368e = a0_0x5ab2;
var input = require('fs')[a0_0xac368e(0x0)]('/dev/stdin', a0_0xac368e(0x1));
var arr = input[a0_0xac368e(0x2)]()[a0_0xac368e(0x3)]('\x0a');
var [m, n] = arr[a0_0xac368e(0x4)]()[a0_0xac368e(0x3)]('\x20')[a0_0xac368e(0x5)](Number);
function a0_0x3b80() {
    var _0x37f5f5 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log',
        'min'
    ];
    a0_0x3b80 = function () {
        return _0x37f5f5;
    };
    return a0_0x3b80();
}
var a = arr[a0_0xac368e(0x4)]()['split']('\x20');
if (m == 0x2) {
    var cnt = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < n; i++) {
        if (a[i] - 0x1 == i % 0x2)
            cnt[0x0]++;
        if (a[i] - 0x1 == (i + 0x1) % 0x2)
            cnt[0x1]++;
    }
    console[a0_0xac368e(0x6)](Math[a0_0xac368e(0x7)](...cnt));
} else {
    var cnt = 0x0;
    for (var i = 0x1; i < n; i++) {
        if (a[i - 0x1] == a[i]) {
            cnt++;
            i++;
        }
    }
    console[a0_0xac368e(0x6)](cnt);
}