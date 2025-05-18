function a0_0x298f(vSrPpm, key) {
    var stringArray = a0_0x302f();
    a0_0x298f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x298f(vSrPpm, key);
}
var a0_0x32676d = a0_0x298f;
var input = require('fs')[a0_0x32676d(0x0)](a0_0x32676d(0x1), a0_0x32676d(0x2));
var arr = input[a0_0x32676d(0x3)]()[a0_0x32676d(0x4)]('\x0a');
while (!![]) {
    var [n, m] = arr[a0_0x32676d(0x5)]()[a0_0x32676d(0x4)]('\x20')[a0_0x32676d(0x6)](Number);
    if (n == 0x0 && m == 0x0)
        break;
    var h = [];
    for (var i = 0x0; i < n; i++)
        h[i] = 0x0;
    for (var i = 0x0; i < m; i++) {
        var p = arr['shift']()[a0_0x32676d(0x4)]('\x20')[a0_0x32676d(0x6)](Number);
        h = p['map']((v, i) => h[i] + v);
    }
    console[a0_0x32676d(0x7)](Math[a0_0x32676d(0x8)](...h));
}
function a0_0x302f() {
    var _0x722626 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log',
        'max'
    ];
    a0_0x302f = function () {
        return _0x722626;
    };
    return a0_0x302f();
}