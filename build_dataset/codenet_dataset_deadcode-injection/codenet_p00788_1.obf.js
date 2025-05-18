var a0_0x15b245 = a0_0x1852;
function a0_0x1852(CjIZYW, key) {
    var stringArray = a0_0x2b6b();
    a0_0x1852 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1852(CjIZYW, key);
}
var input = require('fs')[a0_0x15b245(0x0)](a0_0x15b245(0x1), a0_0x15b245(0x2));
var arr = input[a0_0x15b245(0x3)]()['split']('\x0a');
while (!![]) {
    var pn = arr[a0_0x15b245(0x4)]()[a0_0x15b245(0x5)]('\x20')[a0_0x15b245(0x6)](Number);
    if (pn[a0_0x15b245(0x7)]('\x20') == '0\x200')
        break;
    var p = Math[a0_0x15b245(0x8)](pn[0x0]);
    var n = pn[0x1];
    var max = 0x0;
    var min = Infinity;
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x1; j <= n; j++) {
            var v = i / j;
            if (p > v && max < v) {
                max = v;
                ans[0x1] = i + '/' + j;
            } else if (p < v && min > v) {
                min = v;
                ans[0x0] = i + '/' + j;
            }
        }
    }
    console[a0_0x15b245(0x9)](ans[a0_0x15b245(0x7)]('\x20'));
}
function a0_0x2b6b() {
    var _0x3633b2 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'join',
        'sqrt',
        'log'
    ];
    a0_0x2b6b = function () {
        return _0x3633b2;
    };
    return a0_0x2b6b();
}