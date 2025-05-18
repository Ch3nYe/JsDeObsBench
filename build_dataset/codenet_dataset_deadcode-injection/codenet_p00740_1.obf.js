var a0_0x52218f = a0_0x464e;
var input = require('fs')[a0_0x52218f(0x0)](a0_0x52218f(0x1), 'utf8');
function a0_0x464e(GlCcpe, key) {
    var stringArray = a0_0x41e5();
    a0_0x464e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x464e(GlCcpe, key);
}
function a0_0x41e5() {
    var _0x249a54 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'length',
        'log'
    ];
    a0_0x41e5 = function () {
        return _0x249a54;
    };
    return a0_0x41e5();
}
var Arr = input[a0_0x52218f(0x2)]()[a0_0x52218f(0x3)]('\x0a');
while (!![]) {
    var np = Arr[a0_0x52218f(0x4)]();
    if (np == a0_0x52218f(0x5))
        break;
    np = np[a0_0x52218f(0x3)]('\x20')[a0_0x52218f(0x6)](Number);
    var n = np[0x0];
    var p = np[0x1];
    var sum = p;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr['push'](0x0);
    var j = 0x0;
    for (var i = 0x0; i < 0xf4240; i++) {
        if (j == arr[a0_0x52218f(0x7)])
            j = 0x0;
        if (p > 0x0) {
            p--;
            arr[j]++;
            if (p == 0x0 && sum == arr[j]) {
                console[a0_0x52218f(0x8)](j);
                break;
            }
        } else {
            p = arr[j];
            arr[j] = 0x0;
        }
        j++;
    }
}