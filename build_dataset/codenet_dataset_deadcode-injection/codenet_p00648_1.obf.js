function a0_0x109e() {
    var _0x48b935 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'length',
        'push',
        'sort',
        'forEach',
        'QyKXV',
        'log'
    ];
    a0_0x109e = function () {
        return _0x48b935;
    };
    return a0_0x109e();
}
var a0_0x15e8b2 = a0_0x3290;
function a0_0x3290(feSPhF, key) {
    var stringArray = a0_0x109e();
    a0_0x3290 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3290(feSPhF, key);
}
var input = require('fs')[a0_0x15e8b2(0x0)](a0_0x15e8b2(0x1), 'utf8');
var arr = input[a0_0x15e8b2(0x2)]()[a0_0x15e8b2(0x3)]('\x0a');
while (!![]) {
    var N = arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var obj = {};
    var ary = [];
    for (var i = 0x0; i < N; i++) {
        var nws = arr[a0_0x15e8b2(0x4)]()['split']('\x20');
        var name = nws[0x0];
        var w = nws[0x1] - 0x0;
        var s = nws[0x2][a0_0x15e8b2(0x3)]('')[a0_0x15e8b2(0x5)](Number);
        s = s[a0_0x15e8b2(0x6)] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
        obj[name] = w * 0x5a0 + s;
        ary['push'](w * 0x5a0 + s);
    }
    var P = arr['shift']() - 0x0;
    for (var i = 0x0; i < P; i++) {
        var f = arr[a0_0x15e8b2(0x4)]();
        ary[a0_0x15e8b2(0x7)](obj[f] - 29.5);
    }
    ary[a0_0x15e8b2(0x8)](function (a, b) {
        return a - b;
    });
    var cnt = 0x0;
    var i = 0x0;
    var p = 0x0;
    ary[a0_0x15e8b2(0x9)](function (v) {
        var _0x5b6054 = a0_0x3290;
        if (v % 0x1 == 0.5) {
            if (_0x5b6054(0xa) === _0x5b6054(0xa)) {
                cnt++;
                p++;
                i = v + 29.5 + 0x1e;
            } else {
                var f = arr[_0x5b6054(0x4)]();
                ary['push'](obj[f] - 29.5);
            }
        } else if (i <= v) {
            cnt++;
            i = v + 0x1e;
        }
    });
    if (p != P)
        cnt = -0x1;
    console[a0_0x15e8b2(0xb)](cnt);
}