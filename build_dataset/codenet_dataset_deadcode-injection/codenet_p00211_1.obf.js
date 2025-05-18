var a0_0x29250b = a0_0x3546;
function a0_0x26d4() {
    var _0x33770d = [
        'max',
        'min',
        'XsVlK',
        'gAqVn',
        'log',
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'map',
        'push',
        'forEach'
    ];
    a0_0x26d4 = function () {
        return _0x33770d;
    };
    return a0_0x26d4();
}
function GCD(a, b) {
    var _0x3e9c2b = a0_0x3546;
    var m = Math[_0x3e9c2b(0x0)](a, b);
    var n = Math[_0x3e9c2b(0x1)](a, b);
    while (n != 0x0) {
        if (_0x3e9c2b(0x2) !== _0x3e9c2b(0x3)) {
            var N = n;
            n = m % n;
            m = N;
        } else {
            console[_0x3e9c2b(0x4)](lcm / v);
        }
    }
    return m;
}
function a0_0x3546(OObvtH, key) {
    var stringArray = a0_0x26d4();
    a0_0x3546 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3546(OObvtH, key);
}
var input = require('fs')[a0_0x29250b(0x5)]('/dev/stdin', a0_0x29250b(0x6));
var Arr = input['trim']()[a0_0x29250b(0x7)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x29250b(0x8)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var I = 0x0; I < n; I++) {
        var v = Arr[a0_0x29250b(0x8)]()[a0_0x29250b(0x7)]('\x20')[a0_0x29250b(0x9)](Number);
        var gcd = GCD(v[0x0], v[0x1]);
        arr[a0_0x29250b(0xa)]([
            v[0x0] / gcd,
            v[0x1] / gcd
        ]);
    }
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var gcd = GCD(v[0x1], lcm);
        lcm = v[0x1] * lcm / gcd;
    });
    arr = arr[a0_0x29250b(0x9)](function (v, i) {
        return v[0x0] * (lcm / v[0x1]);
    });
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var gcd = GCD(v, lcm);
        lcm = v * lcm / gcd;
    });
    arr[a0_0x29250b(0xb)](function (v) {
        console['log'](lcm / v);
    });
}