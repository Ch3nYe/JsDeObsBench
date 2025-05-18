var a0_0x398d9a = a0_0xbec0;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x398d9a(0x0));
var Arr = input[a0_0x398d9a(0x1)]()[a0_0x398d9a(0x2)]('\x0a');
while (!![]) {
    var nm = Arr[a0_0x398d9a(0x3)]()['split']('\x20')[a0_0x398d9a(0x4)](Number);
    if (nm[0x0] == 0x0 && nm[0x1] == 0x0)
        break;
    var M = nm[0x1];
    var DP = [];
    for (var i = 0x0; i < nm[0x0]; i++) {
        var dp = Arr[a0_0x398d9a(0x3)]()['split']('\x20')[a0_0x398d9a(0x4)](Number);
        DP[a0_0x398d9a(0x5)](dp);
    }
    DP[a0_0x398d9a(0x6)](function (a, b) {
        return b[0x1] - a[0x1];
    });
    var sum = 0x0;
    DP[a0_0x398d9a(0x7)](function (v) {
        var d = v[0x0];
        var p = v[0x1];
        while (!![]) {
            if (M == 0x0 || d == 0x0)
                break;
            M--;
            d--;
        }
        sum += d * p;
    });
    console[a0_0x398d9a(0x8)](sum);
}
function a0_0xbec0(OdTnNI, key) {
    var stringArray = a0_0xc27c();
    a0_0xbec0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xbec0(OdTnNI, key);
}
function a0_0xc27c() {
    var _0x356aa2 = [
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'push',
        'sort',
        'forEach',
        'log'
    ];
    a0_0xc27c = function () {
        return _0x356aa2;
    };
    return a0_0xc27c();
}