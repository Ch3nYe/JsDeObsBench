function a0_0x4970(jQPqEU, key) {
    var stringArray = a0_0x3a00();
    a0_0x4970 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4970(jQPqEU, key);
}
var a0_0x3091fb = a0_0x4970;
var input = require('fs')[a0_0x3091fb(0x0)](a0_0x3091fb(0x1), 'utf8');
var arr = input[a0_0x3091fb(0x2)]()[a0_0x3091fb(0x3)]('\x0a');
var t = arr[a0_0x3091fb(0x4)]() - 0x0;
function a0_0x3a00() {
    var _0x2d3b0c = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'length',
        'push',
        'sort'
    ];
    a0_0x3a00 = function () {
        return _0x2d3b0c;
    };
    return a0_0x3a00();
}
while (t--) {
    var [n, k] = arr[a0_0x3091fb(0x4)]()[a0_0x3091fb(0x3)]('\x20')['map'](Number);
    var x = arr[a0_0x3091fb(0x4)]()[a0_0x3091fb(0x3)]('\x20')[a0_0x3091fb(0x5)](Number);
    var d = x[x['length'] - 0x1] - x[0x0];
    var a = [];
    for (var i = 0x0; i < x[a0_0x3091fb(0x6)] - 0x1; i++)
        a[a0_0x3091fb(0x7)](x[i + 0x1] - x[i]);
    a[a0_0x3091fb(0x8)]((a, b) => b - a);
    var sum = 0x0;
    for (var i = 0x0; i < k - 0x1; i++) {
        if (i > a['length'] - 0x1)
            break;
        sum += a[i];
    }
    console['log'](d - sum);
}