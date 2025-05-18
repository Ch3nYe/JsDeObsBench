var a0_0x7b1e4c = a0_0x77fa;
var input = require('fs')[a0_0x7b1e4c(0x0)](a0_0x7b1e4c(0x1), a0_0x7b1e4c(0x2));
function a0_0x77fa(ShlEsS, key) {
    var stringArray = a0_0x5550();
    a0_0x77fa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x77fa(ShlEsS, key);
}
function a0_0x5550() {
    var _0x121bf2 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'sort',
        'length',
        'log'
    ];
    a0_0x5550 = function () {
        return _0x121bf2;
    };
    return a0_0x5550();
}
var arr = input['trim']()[a0_0x7b1e4c(0x3)]('\x0a');
arr['forEach'](function (value) {
    var _0x28f55e = a0_0x77fa;
    var vd = value['split']('\x20')[_0x28f55e(0x4)](Number);
    var v = vd[0x0];
    var d = vd[0x1];
    var f = [];
    f[0x0] = 0x1;
    f[0x1] = 0x2;
    for (var i = 0x2; i <= v; i++) {
        f[i] = (f[i - 0x1] + f[i - 0x2]) % 0x3e9;
    }
    f['shift']();
    f[_0x28f55e(0x5)](function (a, b) {
        return a - b;
    });
    var cnt = 0x0;
    for (var i = 0x1; i < f[_0x28f55e(0x6)]; i++) {
        if (f[i] - f[i - 0x1] < d)
            cnt++;
    }
    console[_0x28f55e(0x7)](f[_0x28f55e(0x6)] - cnt);
});