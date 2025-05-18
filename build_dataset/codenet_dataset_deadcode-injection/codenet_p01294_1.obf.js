var a0_0xb57c31 = a0_0x319f;
var input = require('fs')[a0_0xb57c31(0x0)](a0_0xb57c31(0x1), a0_0xb57c31(0x2));
function a0_0x4009() {
    var _0x2cccb6 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'reduce',
        'length',
        'max',
        'min',
        'log',
        'Yes'
    ];
    a0_0x4009 = function () {
        return _0x2cccb6;
    };
    return a0_0x4009();
}
var arr = input[a0_0xb57c31(0x3)]()[a0_0xb57c31(0x4)]('\x0a');
function a0_0x319f(vCAdNs, key) {
    var stringArray = a0_0x4009();
    a0_0x319f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x319f(vCAdNs, key);
}
while (!![]) {
    var [n, d] = arr[a0_0xb57c31(0x5)]()[a0_0xb57c31(0x4)]('\x20')[a0_0xb57c31(0x6)](Number);
    if (n == 0x0 && d == 0x0)
        break;
    var S = [];
    var C = [];
    for (var i = 0x0; i < n; i++) {
        var mc = arr[i][a0_0xb57c31(0x4)]('\x20');
        mc['shift']();
        var c = mc[a0_0xb57c31(0x6)](Number)['reverse']();
        var sum = c['length'] != 0x0 ? c[a0_0xb57c31(0x7)]((a, b) => a + b) : 0x0;
        S[i] = sum;
        C[i] = c;
    }
    while (!![]) {
        var f = ![];
        for (var i = 0x0; i < S[a0_0xb57c31(0x8)]; i++) {
            if (S[i] == 0x0)
                continue;
            S[i] -= C[i][0x0];
            if (Math[a0_0xb57c31(0x9)](...S) - Math[a0_0xb57c31(0xa)](...S) <= d) {
                C[i]['shift']();
                f = !![];
                break;
            } else {
                S[i] += C[i][0x0];
            }
        }
        if (f == ![])
            break;
    }
    var sum = S[a0_0xb57c31(0x7)]((a, b) => a + b);
    if (sum == 0x0)
        console[a0_0xb57c31(0xb)](a0_0xb57c31(0xc));
    else
        console['log']('No');
    arr = arr['slice'](n);
}