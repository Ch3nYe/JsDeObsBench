var a0_0x219030 = a0_0x2cdd;
function a0_0x2cdd(YVbDiE, key) {
    var stringArray = a0_0x456b();
    a0_0x2cdd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2cdd(YVbDiE, key);
}
var input = require('fs')['readFileSync'](a0_0x219030(0x0), 'utf8');
var Arr = input[a0_0x219030(0x1)]()[a0_0x219030(0x2)]('\x0a');
function a0_0x456b() {
    var _0x21780a = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        '0\x200\x200',
        'map',
        'push',
        'log'
    ];
    a0_0x456b = function () {
        return _0x21780a;
    };
    return a0_0x456b();
}
while (!![]) {
    var A = Arr[a0_0x219030(0x3)]();
    if (A == a0_0x219030(0x4))
        break;
    var arr = A[a0_0x219030(0x2)]('\x20')[a0_0x219030(0x5)](Number);
    var m = arr[0x1];
    var start = arr[0x2];
    var hpq = [];
    for (var i = 0x0; i < m; i++)
        hpq[a0_0x219030(0x6)](Arr[a0_0x219030(0x3)]());
    hpq['sort'](function (a, b) {
        var _0x3333a8 = a0_0x2cdd;
        a = a[_0x3333a8(0x2)]('\x20')[0x0] - 0x0;
        b = b[_0x3333a8(0x2)]('\x20')[0x0] - 0x0;
        if (a >= b)
            return -0x1;
        else
            return 0x1;
    });
    var H = 0x3e9;
    for (var i = 0x0; i < hpq['length']; i++) {
        var HPQ = hpq[i]['split']('\x20')[a0_0x219030(0x5)](Number);
        var h = HPQ[0x0];
        var p = HPQ[0x1];
        var q = HPQ[0x2];
        if (H == h)
            continue;
        if (start == p || start == q) {
            H = h;
            start = start == p ? q : p;
        }
    }
    console[a0_0x219030(0x7)](start);
}