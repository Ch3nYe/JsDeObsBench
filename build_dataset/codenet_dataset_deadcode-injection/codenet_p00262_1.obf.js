var a0_0x372a31 = a0_0x15fb;
function a0_0x361a() {
    var _0x440503 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'every',
        'length',
        'push'
    ];
    a0_0x361a = function () {
        return _0x440503;
    };
    return a0_0x361a();
}
var input = require('fs')[a0_0x372a31(0x0)](a0_0x372a31(0x1), a0_0x372a31(0x2));
var Arr = input[a0_0x372a31(0x3)]()['split']('\x0a');
function a0_0x15fb(ictavf, key) {
    var stringArray = a0_0x361a();
    a0_0x15fb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15fb(ictavf, key);
}
while (!![]) {
    var n = Arr[a0_0x372a31(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x372a31(0x4)]()[a0_0x372a31(0x5)]('\x20')[a0_0x372a31(0x6)](Number);
    var cnt = 0x0;
    while (!![]) {
        var flag = arr[a0_0x372a31(0x7)](function (v, i) {
            return i + 0x1 == v;
        });
        if (flag)
            break;
        var L = arr[a0_0x372a31(0x8)];
        arr = arr[a0_0x372a31(0x6)](function (v) {
            return v - 0x1;
        });
        arr = arr['filter'](function (v) {
            return v != 0x0;
        });
        arr[a0_0x372a31(0x9)](L);
        cnt++;
        if (cnt == 0x2710) {
            cnt = -0x1;
            break;
        }
    }
    console['log'](cnt);
}